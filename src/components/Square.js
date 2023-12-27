import React from "react";

const Square = ({ board, index, click, viewWidth, marginSide }) => {
  return (
    <>
      <div
        onClick={() => click(index)}
        className="square"
        style={{
          width: `${viewWidth}vw`,
          marginLeft: `${marginSide}vw`,
          marginRight: `${marginSide}vw`,
        }}
      >
        {board}
      </div>
    </>
  );
};
export default Square;
