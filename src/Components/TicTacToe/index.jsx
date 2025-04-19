import React, { useState } from 'react';
import styles from './TicTacToe.module.css';

// Tic-Tac-Toe Component
export const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null)); // 9 cells initialized to null
  const [isXTurn, setIsXTurn] = useState(true); // Track whose turn it is

  const handleClick = (index) => {
    // TODO: Implement cell click logic
    setIsXTurn((prevTurn) => !prevTurn)
    board[index] = board[index] ? {...board[index], value: isXTurn ? 'X' : 'O'} : {value: isXTurn ? 'X' : 'O'}
    setBoard([...board]);
  };

  const resetGame = () => {
    // TODO: Implement reset logic
  };

  return (
    <div>
      <h1>Tic-Tac-Toe</h1>
      <div className={styles.container}>
        {/* TODO: Render the grid and buttons */}
        {board.map((item, index) => {
            return (
              <button onClick={() => handleClick(index)}>
                {item ? item.value : ''}
              </button>
            )
          })
        }
      </div>
    </div>
  );
};
