import React, { useState } from "react";

function InputValidation({ inputError }) {
  return (
    <>
      <div className="formErrors">
        {Object.keys(inputError).map((fieldName, i) => {
          if (inputError[fieldName].length > 0) {
            return (
              <p key={i}>
                {fieldName} {inputError[fieldName]}
              </p>
            );
          } else {
            return "";
          }
        })}
      </div>
    </>
  );
}

export default InputValidation;
