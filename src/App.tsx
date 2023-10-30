import React, {useState} from 'react';
import GameBoard from './components/GameBoard/GameBoard';
import './App.css';

interface Item {
    hasItem: boolean;
    clicked: boolean;
}

const createItems = (): Item[] => {
    const items: Item[] = Array(36).fill(null).map(() => ({
        hasItem: false,
        clicked: false,
    }));

    const randomIndex = Math.floor(Math.random() * 36);
    items[randomIndex].hasItem = true;

    return items;
};

const App: React.FC = () => {
    const [items, setItems] = useState<Item[]>(createItems());
    const [attempts, setAttempts] = useState<number>(0);
    const [gameOver, setGameOver] = useState<boolean>(false);

    const handleCellClick = (index: number): void => {
        if (gameOver || items[index].clicked) {
            return;
        }

        const newItems: Item[] = [...items];
        newItems[index].clicked = true;
        setItems(newItems);

        setAttempts(attempts + 1);

        if (newItems[index].hasItem) {
            setGameOver(true);
        }
    };

    const handleResetClick = (): void => {
        setItems(createItems());
        setAttempts(0);
        setGameOver(false);
    };

    return (
        <div style={{textAlign: 'center', marginTop: '20px'}}>
            <h2>Find the Hidden Item Game</h2>
            <p>Attempts: {attempts}</p>
            <GameBoard items={items} onCellClick={handleCellClick}/>
            {gameOver && <p style={{color: 'red'}}>Congratulations! You found the hidden item.</p>}
            <button style={{marginTop: '30px'}} onClick={handleResetClick}>Reset</button>
        </div>
    );
};

export default App;
