import PropTypes from "prop-types"
import React from "react"

const Label = ({ label, color, icon }) => (
    <div style={{
      backgroundColor: `#fff`,
      borderRadius: `10px`,
      color,
      display: `flex`,
      fontFamily: `Circular-Bold, sans-serif`,
      fontSize: `24px`,
      alignItems: `center`,
      justifyContent: `center`,
      margin: `25px 0`,
      padding: `15px 25px`,
      boxShadow: '0px 15px 25px rgba(42, 64, 89, 0.45)',
      flexGrow: '1',
      width: `fit-content`,
    }}>
        <img src={icon} alt="label icon" style={{ marginRight: `10px` }} />
        {label}
    </div>
)

Label.propTypes = {
  label: PropTypes.string.isRequired,
  color: PropTypes.string,
  icon: PropTypes.string,
}

Label.defaultProps = {
  color: `#2A4059`,
}

export default Label
