import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"

const Button = ({ label, link, color, background, border, fontSize }) => (
  <Link to={link}>
    <button style={{
      background,
      border,
      borderRadius: `50px`,
      boxShadow: `0px 4px 10px 0px rgba(0, 0, 0, 0.20)`,
      color,
      fontFamily: `Circular-Bold, sans-serif`,
      fontSize,
      fontWeight: `700`,
      margin: `10px`,
      padding: `10px 40px`,
    }}>
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
  fontSize: PropTypes.string,
}

Button.defaultProps = {
  color: `#252523`,
  background: `#fff`,
  border: `none`,
  fontSize: `24px`,
}

export default Button
