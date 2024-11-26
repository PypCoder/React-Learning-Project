import React, { useState } from "react";

export default function Counter() {
  let myStyle = {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    display:"flex",
    flexDirection:"column",
  };
  const [count, setCount] = useState(0);
  const handleAddCount = () => {
    setCount(count + 1);
  };
  const handleSubCount = () => {
    count > 0 && setCount(count - 1);
  };
  const handleResetCount = () => {
    setCount(0);
  };
  return (
    <>
      <h1>Counter App</h1>
      <div className="container my-3" style={myStyle}>
        <div className="alert alert-secondary"  style={{padding:"3rem" , fontSize:"3rem"}} role="alert">
          <b>{count}</b>
        </div>
        </div>
        <div className="justify-content-center gap-3 d-flex">
      <button className="btn btn-success mx-3" onClick={handleAddCount}>
        Add
      </button>
      <button className="btn btn-danger mx-3" onClick={handleSubCount}>
        Minus
      </button>
      <button className="btn btn-secondary mx-3" onClick={handleResetCount}>
        Reset
      </button>
      </div>
    </>
  );
}
