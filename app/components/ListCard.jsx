// ListCard.jsx
import React from 'react';
import Card from './Card';

const ListCard = () => {
  const numberOfCards = 16;
  const cards = Array.from({ length: numberOfCards });

  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black to-transparent z-20 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent z-20 pointer-events-none"></div>
      
      <div className='w-full overflow-x-auto pb-8 [scrollbar-width:none] [-webkit-scrollbar:none]'>
        <div className='flex gap-8 w-max px-4'>
          {cards.map((_, index) => (
            <Card key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListCard;