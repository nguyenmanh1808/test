export function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }
  
  export function getBestMove(squares) {
    const minimax = (squares, depth, isMaximizing) => {
      const winner = calculateWinner(squares);
      if (winner === "X") return -10 + depth;
      if (winner === "O") return 10 - depth;
      if (!squares.includes(null)) return 0;
  
      if (isMaximizing) {
        let best = -Infinity;
        for (let i = 0; i < squares.length; i++) {
          if (squares[i] === null) {
            squares[i] = "O";
            best = Math.max(best, minimax(squares, depth - 1, false));
            squares[i] = null;
          }
        }
        return best;
      } else {
        let best = Infinity;
        for (let i = 0; i < squares.length; i++) {
          if (squares[i] === null) {
            squares[i] = "X";
            best = Math.min(best, minimax(squares, depth - 1, true));
            squares[i] = null;
          }
        }
        return best;
      }
    };
  
    let bestMove = -1;
    let bestValue = -Infinity;
    for (let i = 0; i < squares.length; i++) {
      if (squares[i] === null) {
        squares[i] = "O";
        const moveValue = minimax(squares, 2, false);
        squares[i] = null;
  
        if (moveValue > bestValue) {
          bestValue = moveValue;
          bestMove = i;
        }
      }
    }
    return bestMove;
  }
  