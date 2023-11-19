import React from "react";

const Card = ({ imageUrl, name, text, type, rarity }) => {
  return (
    <div className="card magicCard mx-3 my-4 bg-body-tertiary">
      <img src={imageUrl} className="card-img-top p-3" alt="card" />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{text}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">{type}</li>
        <li className="list-group-item">{rarity}</li>
      </ul>
    </div>
  );
};

export default Card;
