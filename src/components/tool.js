import React, { useRef, useEffect, useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'

const Tool = ({ id, isActive, setActive, title, text, classBg, img1Name, img2Name, img3Name, alt, index }) => {

    const { allFile } = useStaticQuery(graphql`
    query {
      allFile(filter: {
        extension: {regex: "/(jpg)|(jpeg)|(png)/"}, 
        sourceInstanceName: {eq: "images"}}) 
      {
        edges {
          node {
            childImageSharp {
              fluid( quality: 100) {
                originalName
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }`);

    const image1 = allFile.edges.find(edge => edge.node.childImageSharp.fluid.originalName.includes(img1Name));
    const image2 = allFile.edges.find(edge => edge.node.childImageSharp.fluid.originalName.includes(img2Name));
    const image3 = allFile.edges.find(edge => edge.node.childImageSharp.fluid.originalName.includes(img3Name));
    const image1Path = image1 && image1.node ? image1.node.childImageSharp.fluid.src : null;
    const image2Path = image2 && image2.node ? image2.node.childImageSharp.fluid.src : null;
    const image3Path = image3 && image3.node ? image3.node.childImageSharp.fluid.src : null;

    const toolDetailRef = useRef(null);
    const [imagesLoaded, setImagesLoaded] = useState(0);

    useEffect(() => {
        const images = toolDetailRef.current ? toolDetailRef.current.querySelectorAll('img') : [];
        if (images.length === 0) {
            setImagesLoaded(1); // Set to 1 if there are no images to load.
            return;
        }

        let loadedImages = 0;
        const onImageLoad = () => {
            loadedImages++;
            if (loadedImages === images.length) {
                setImagesLoaded(imagesLoaded + 1);
            }
        };

        images.forEach(image => {
            if (image.complete) {
                loadedImages++;
            } else {
                image.addEventListener('load', onImageLoad);
                image.addEventListener('error', onImageLoad); // In case the image fails to load
            }
        });

        if (loadedImages === images.length) {
            setImagesLoaded(imagesLoaded + 1);
        }

        return () => {
            images.forEach(image => {
                image.removeEventListener('load', onImageLoad);
                image.removeEventListener('error', onImageLoad);
            });
        };
    }, [isActive]);

    useEffect(() => {
      if (isActive && toolDetailRef.current && imagesLoaded) {
          const fullHeight = toolDetailRef.current.scrollHeight;
          toolDetailRef.current.style.height = `${fullHeight}px`;
      } else if (toolDetailRef.current) {
          toolDetailRef.current.style.height = '50px'; // Collapse the tool
      }
    }, [isActive, imagesLoaded]);

    return (
        <div  className={`tool ${isActive ? 'active' : ''}`}>

                <div className={classBg}>
                  <div className="toolBg">
                    <div ref={toolDetailRef} className={`toolDetail ${isActive ? 'active' : ''}`} 
                        onClick={() => setActive(false)}
                        onKeyPress={() => setActive(false)} 
                        role="button" 
                        aria-expanded="true"
                        tabIndex={index}>
                        <h3>{title}</h3>
                        <p>{text}</p>
                        <div className="tool-images">
                          {image1Path && <img src={image1Path} alt={alt} /> }
                          {image2Path && <img src={image2Path} alt={alt} /> }
                          {image3Path && <img src={image3Path} alt={alt} /> }
                        </div>
                    </div>
                  </div>
                </div>
                <button onClick={() => setActive(id)} className="setActiveButton"></button>

      
        </div>
    );
}

Tool.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
  classBg: PropTypes.string,
  img1Name: PropTypes.string,
  img2Name: PropTypes.string,
  img3Name: PropTypes.string,
}

Tool.defaultProps = {
  classBg: `tool`,
}

export default Tool
