import React, { useState } from "react";
import Board from "./component/Board";
import { calculateWinner, getBestMove } from "./component/AI";
import './App.css'

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const myTurn = (squares)=>{
    let arr  = squares.filter((item,index)=>{
        return item!= null
    })
    if(arr.length % 2 == 0 ){
      
      return 1;
    }
    else{
    
      return -1;
    }
    return 0; 
  }
  const handleClick = (index) => {
    if (calculateWinner(squares) || squares[index]) return;

    const newSquares = [...squares];
    newSquares[index] = isXNext ? "X" : "O";
    setSquares(newSquares);

    if(myTurn == 1){
      setIsXNext(false);
    }
    else{
      setIsXNext(true);
      const aiMove = getBestMove(newSquares);
      newSquares[aiMove] = "O";
      setSquares(newSquares);
    }
    
   
  };
  const playAgain =()=>{
    setSquares(Array(9).fill(null));
    setIsXNext(true);
  }
  const winner = calculateWinner(squares);
  const status = winner
    ? `Winner: ${winner}`
    : `Next player: ${isXNext ? "X" : "O"}`;

  return (
    <div className="game">
      <h1>Tic Tac Toe</h1>
      <div className={winner? "winner":"next"}>{status}</div>
      <Board squares={squares} onClick={handleClick} />
      <div className="button">
          <button type="submit" onClick={()=>playAgain()}>Chơi lại</button>
      </div>
    </div>
  );
}

export default App;
