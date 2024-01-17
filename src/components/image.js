import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const Image = ({ imageName, className, width }) => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { sourceInstanceName: {eq: "images"}, extension: {regex: "/(jpg)|(jpeg)|(png)/"} }) {
        edges {
          node {
            id
            base
            childImageSharp {
              gatsbyImageData(
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
      }
    }
  `);

  // Filter the image by the passed imageName prop
  const image = data.allFile.edges.find(edge => edge.node.base === imageName);

  if (!image) {
    return '';
  }

  return (
    <GatsbyImage
      image={getImage(image.node.childImageSharp.gatsbyImageData)}
      alt={imageName}
      className={className}
      style={{ width: width ? width : '100%' }} // Use the width prop if passed, or default to 100%
    />
  );
};

export default Image;
