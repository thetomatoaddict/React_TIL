import React from "react";

const Box = ({ boxColor, boxNumber, handleDrag, handleDrop, todo }) => {
  return (
    <div
      draggable={true}
      id={boxNumber}
      onDragOver={(ev) => ev.preventDefault()}
      onDragStart={handleDrag}
      onDrop={handleDrop}
      style={{
        backgroundColor: boxColor,
        border: "1px solid",
        borderColor: boxColor,
        borderRadius: "5px",
        color: "#FFF",
        width: "30%",
        height: "100px",
        margin: "10px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      {todo}
    </div>
  );
};

export default Box;
