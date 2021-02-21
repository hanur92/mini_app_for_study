import React, { useState } from "react";
function Buttons({ numberProp, onClickProp }) {
  return (
    <div>
      <button onClick={onClickProp}>{numberProp}</button>
    </div>
  );
}

export default Buttons;
