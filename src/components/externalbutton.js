import PropTypes from "prop-types"
import React from "react"

const ExternalButton = ({ label, link, color, background, border, newTab }) => (
  <a href={link} target={newTab ? "_blank" : ""} rel={newTab ? "noopener noreferrer" : ""}>
    <button style={{
        background,
        border,
        borderRadius: `50px`,
        boxShadow: `0px 8px 15px 0px rgba(0, 0, 0, 0.15)`,
        color
      }}
      className="renderedCtaButton"
    >
      {label}
    </button>
  </a>
)

ExternalButton.propTypes = {
  label: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  color: PropTypes.string,
  background: PropTypes.string,
  border: PropTypes.string,
}

ExternalButton.defaultProps = {
  color: `#252523`,
  background: `#fff`,
  border: `none`,
}

export default ExternalButton
