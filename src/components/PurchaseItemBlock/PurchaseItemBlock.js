import React from 'react';

const PurchaseItemBlock = ({ imageSrc, altText, title, description, price, buttonText }) => {
  return (
    <div className="purchase-item-block">
      <img src={imageSrc} alt={altText} width="250" height="250" />
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
        <span>${price}</span>
        <button>{buttonText}</button>
      </div>
    </div>
  );
};

export default PurchaseItemBlock;