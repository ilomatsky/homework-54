import React from 'react';

interface CellProps {
    item: {
        hasItem: boolean;
        clicked: boolean;
    };
    onClick: () => void;
}

const Cell: React.FC<CellProps> = ({item, onClick}) => {
    const {hasItem, clicked} = item;
    const cellStyle: React.CSSProperties = {
        width: '50px',
        height: '50px',
        border: '1px solid #ccc',
        textAlign: 'center',
        lineHeight: '50px',
        cursor: 'pointer',
        backgroundColor: clicked ? (hasItem ? 'green' : 'red') : 'white',
        color: clicked ? 'white' : 'black'
    };

    return <div style={cellStyle} onClick={onClick}></div>;
};

export default Cell;
