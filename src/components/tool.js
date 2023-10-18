import { useStaticQuery, graphql } from 'gatsby'
import PropTypes from "prop-types"
import React, { useState } from 'react';

const Tool = ({ title, text, classBg, imgName, alt, index }) => {

    const [isActive, setActive] = useState(false)
    const { allFile } = useStaticQuery(graphql`
    query {
      allFile(filter: {
        extension: {regex: "/(jpg)|(jpeg)|(png)/"}, 
        sourceInstanceName: {eq: "images"}}) 
      {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 425, quality: 100) {
                originalName
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }`);

    const image = allFile.edges.find(edge => edge.node.childImageSharp.fluid.originalName.includes(imgName));
    const imagePath = image && image.node ? image.node.childImageSharp.fluid.src : null
    
    return (
        <div className="tool">
            { isActive ? 
                <div className={classBg}>
                  <div className="toolBg">
                    <div className="toolDetail" 
                        onClick={() => setActive(false)}
                        onKeyPress={() => setActive(false)} 
                        role="button" 
                        aria-expanded="true"
                        tabIndex={index}>
                        <h3>{title}</h3>
                        <p>{text}</p>
                        <img src={imagePath} alt={alt} />
                    </div>
                  </div>
                </div> : <button onClick={() => setActive(true)}><h3>+ {title}</h3></button>
            }
        </div>
    );
}

Tool.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
  classBg: PropTypes.string,
  imgName: PropTypes.string,
}

Tool.defaultProps = {
  classBg: `tool`,
}

export default Tool
