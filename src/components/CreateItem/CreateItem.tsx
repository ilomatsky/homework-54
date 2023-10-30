import React from 'react';

interface ItemState {
  hasItem: boolean;
  clicked: boolean;
}

const CreateItem: React.FC<ItemState> = ({hasItem, clicked}) => {
  const cages: string[] = [];
  const createCage = () => {
    for (let i = 0; i < 36; i++) {

    }
  };

  return (
    <div>

    </div>
  );
};

export default CreateItem;