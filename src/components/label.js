import PropTypes from "prop-types"
import React from "react"

const Label = ({ label, color, icon }) => (
    <div className="passionLabel">
        <img src={icon} alt="label icon" style={{ marginRight: `15px` }} />
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
