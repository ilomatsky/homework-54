import Cell from '../Cell/Cell';

const GameBoard = ({ items, onCellClick }) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', width: '300px' }}>
      {items.map((item, index) => (
        <Cell key={index} item={item} onClick={() => onCellClick(index)} />
      ))}
    </div>
  );
};

export default GameBoard;
