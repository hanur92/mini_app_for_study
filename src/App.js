import React, { useState } from "react";
import Buttons from "./ component/Buttons";
// import logo from "./logo.svg";
// import './App.css';

const App = () => {
  const [number, count] = useState(0);
  const Plus = () => {
    count(number + 1);
  };

  const Minus = () => {
    count(number - 1);
  };
  return (
    <div>
      <Buttons numberProp={number} onClickProp={Plus}>
        +
      </Buttons>
      {number}
      <Buttons numberProp={number} onClickProp={Minus}>
        -
      </Buttons>
    </div>
  );
};

export default App;
