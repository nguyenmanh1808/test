import React from "react";
import Square from "./Square";

function Board({ squares, onClick }) {
  return (
    <div>
      <div className="board-row">
        {squares.slice(0, 3).map((item, index) => (
          <Square key={index} value={item} onClick={() => onClick(index)} />
        ))}
      </div>
      <div className="board-row">
        {squares.slice(3, 6).map((item, index) => (
          <Square key={index + 3} value={item} onClick={() => onClick(index + 3)} />
        ))}
      </div>
      <div className="board-row">
        {squares.slice(6, 9).map((item, index) => (
          <Square key={index + 6} value={item} onClick={() => onClick(index + 6)} />
        ))}
      </div>
    </div>
  );
}

export default Board;
