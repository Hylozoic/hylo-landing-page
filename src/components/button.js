import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"

const Button = ({ label, link, color, background, border }) => (
  <Link to={link}>
    <button style={{
      background,
      border,
      borderRadius: `50px`,
      boxShadow: `0px 8px 15px 0px rgba(0, 0, 0, 0.15)`,
      color,
      fontFamily: `Circular-Bold, sans-serif`,
      fontWeight: `200`,
      margin: `10px`,
      cursor: `pointer`,
    }} className="renderedCtaButton">
        {label}
    </button>
  </Link>
)

Button.propTypes = {
  label: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  color: PropTypes.string,
  background: PropTypes.string,
  border: PropTypes.string,
}

Button.defaultProps = {
  color: `#252523`,
  background: `#fff`,
  border: `none`,
}

export default Button
