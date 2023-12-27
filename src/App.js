import React, { useEffect, useState } from "react";
import "./App.css";
import Square from "./components/Square";

const App = () => {
  const [vwEquivalent, setVwEquivalent] = useState(11.25);
  const [marginEquivalent, setMarginEquivalent] = useState(8.28125);

  useEffect(() => {
    const calculateEquivalent = () => {
      // Get the viewport width
      const vw = Math.max(
        document.documentElement.clientWidth || 0,
        window.innerWidth || 0
      );

      // Get the viewport height
      const vh = Math.max(
        document.documentElement.clientHeight || 0,
        window.innerHeight || 0
      );

      // Calculate the pixel value for 20vh
      const vhPixels = (20 * vh) / 100;

      // Calculate the pixel value for 2.5vh
      const marginPixels = (2.5 * vh) / 100;

      // Calculate the equivalent vw for the pixel value of 2.5vh
      const marginLR = (marginPixels / vw) * 100;

      // Calculate the equivalent vw value for 20vh
      const newVwEquivalent = (vhPixels / vw) * 100;

      // Calculate the correct vw to use for the left and right margins and use the equivalent vw for the 2.5vh pixel value
      const newMarginEquivalent = Math.max(
        (100 - newVwEquivalent * 3) / 8,
        marginLR
      );

      // Update state
      setVwEquivalent(newVwEquivalent);
      setMarginEquivalent(newMarginEquivalent);
    };

    // Initial calculation on mount
    calculateEquivalent();

    // Recalculate on window resize
    window.addEventListener("resize", calculateEquivalent);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", calculateEquivalent);
    };
  }, []);

  const [board, setBoard] = useState([
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
  ]);

  const HandleClick = (index) => {
    board[index] = "🌴";
    setBoard([...board]);
  };

  return (
    <>
      <h1>Treasure Hunt Game</h1>
      <div className="board">
        {board.map((board, index) => {
          return (
            <Square
              key={index}
              board={board}
              index={index}
              click={HandleClick}
              viewWidth={vwEquivalent}
              marginSide={marginEquivalent}
            />
          );
        })}
      </div>
    </>
  );
};

export default App;
