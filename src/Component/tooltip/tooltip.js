import React, { useState } from "react";
import "./tooltip.css";
const Tooltip = ({ position, text }) => {
  // state to show hide tooltip initially set to false
  const [showTooltip, setShowTooltip] = useState(false);

  // dynamic position of the tooltip based on the position prop

  const tooltipPosition = {
    bottom: position === "top" ? "25px" : "auto",
    top: position === "bottom" ? "25px" : "auto",
    left: position === "left" ? "600px" : "auto",
    right: position === "right" ? "600px" : "auto",
  };

  return (
    <div>
      {/* showing and hiding the tooltip by stating the state to true and false using mouse events  */}

      <div
        className="hoverme"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        Hover me !
        {showTooltip && (
          <span className="tooltiptext" style={tooltipPosition}>
            {text}
          </span>
        )}
      </div>
    </div>
  );
};

export default Tooltip;
