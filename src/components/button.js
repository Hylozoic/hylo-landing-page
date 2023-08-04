import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"

const Button = ({ label, link, color, backgroundColor }) => (
  <Link to={link}>
    <button style={{
      backgroundColor,
      border: `1px solid ${color}`,
      borderRadius: `21px`,
      color,
      fontFamily: `Circular-Book, sans-serif`,
      fontSize: `16px`,
      margin: `10px`,
      padding: `8px 20px`,
    }}>
        {label}
    </button>
  </Link>
)

Button.propTypes = {
  label: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
}

Button.defaultProps = {
  color: `#252523`,
  backgroundColor: `#fff`,
}

export default Button
