// write the book component code here

// cart/bookcard.jsx
import React from "react";
import "../App.css";

const BookCard = ({ book }) => {
  return (
    <div className="book-card">
      <img src={book.image} alt={book.title} />
      <div>
        <h2 className="book-title">{book.title}</h2>
        <p className="book-author">by {book.author}</p>
        <p className="book-description">{book.description}</p>
        <div className="book-footer">
          <span className="book-price">${book.price}</span>
          <button className="add-to-cart">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
