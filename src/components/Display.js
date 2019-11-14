import React from "react";

const Display = (props) =>{
    const changeDispayField = () => {
        if (props.result.toString()) {
          return props.result;
        } else if (props.currentValue.toString()) {
          return props.currentValue;
        } else if (props.operando.toString()) {
          return props.operando;
        } else {
          return "0";
        }
      };

    return(
        <div className="Display" id="display">{changeDispayField()}</div>
    )
}

export default Display