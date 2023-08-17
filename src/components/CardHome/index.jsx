import React from 'react'

function CardHome({item}) {
  return (
   
      <a href={item.path} target="_blank">
        <div className="border p-2 rounded">
          <img src={item.image} />
        </div>
        <h4 className="text-base text-center mt-4">{item.title}</h4>
      </a>
  );
}

export default CardHome