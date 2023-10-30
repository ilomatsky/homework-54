import React from 'react';
import Cell from '../Cell/Cell';

interface Item {
    hasItem: boolean;
    clicked: boolean;
}

interface GameBoardProps {
    items: Item[];
    onCellClick: (index: number) => void;
}

const GameBoard: React.FC<GameBoardProps> = ({items, onCellClick}) => {
    return (
        <div style={{display: 'flex', flexWrap: 'wrap', width: '330px'}}>
            {items.map((item, index) => (
                <Cell key={index} item={item} onClick={() => onCellClick(index)}/>
            ))}
        </div>
    );
};

export default GameBoard;
