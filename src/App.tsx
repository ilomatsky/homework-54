import { useState } from 'react';
import Cell from './Cell';

const createItems = () => {
  const items = Array(36).fill(null).map(() => ({
    hasItem: false,
    clicked: false,
  }));

  const randomIndex = Math.floor(Math.random() * 36);
  items[randomIndex].hasItem = true;

  return items;
};

const Game = () => {
  const [items, setItems] = useState(createItems());
  const [attempts, setAttempts] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const handleCellClick = (index) => {
    if (gameOver || items[index].clicked) {
      return;
    }

    const newItems = [...items];
    newItems[index].clicked = true;
    setItems(newItems);

    setAttempts(attempts + 1);

    if (newItems[index].hasItem) {
      setGameOver(true);
    }
  };

  const handleResetClick = () => {
    setItems(createItems());
    setAttempts(0);
    setGameOver(false);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h2>Find the Hidden Item Game</h2>
      <p>Attempts: {attempts}</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', width: '300px', margin: '0 auto' }}>
        {items.map((item, index) => (
          <Cell key={index} item={item} onClick={() => handleCellClick(index)} />
        ))}
      </div>
      {gameOver && <p style={{ color: 'red' }}>Congratulations! You found the hidden item.</p>}
      <button onClick={handleResetClick}>Reset</button>
    </div>
  );
};

export default App;
