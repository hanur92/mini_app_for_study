import React, { useState } from "react";
function Buttons({ numberProp, onClickProp }) {
  return (
    <div>
      <button onClick={onClickProp}>{numberProp}s</button>
    </div>
  );
}

export default Buttons;
