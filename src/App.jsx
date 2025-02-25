// App.jsx
import React from "react";
import BookCard from "./components/bookcard";
import "./App.css"; 

const books = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    description: "A novel about the American dream and the roaring twenties.",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/f6/The_Great_Gatsby_%281926%29_Theatrical_Poster_Retouched.jpg",
    price: 10.99,
  },
  {
    id: 2,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    description: "A powerful story of racial injustice in the Deep South.",
    image: "https://images.blinkist.io/images/books/63fc4bfa0ec20100080b21fb/1_1/470.jpg",
    price: 12.99,
  },
  {
    id: 3,
    title: "1984",
    author: "George Orwell",
    description: "A dystopian novel about surveillance and totalitarianism.",
    image : "https://upload.wikimedia.org/wikipedia/en/4/4a/1984_%281956_movie_poster%29.jpg",
    price: 14.99,
  },
  {
    id: 4,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    description: "A classic novel about love and society in 19th-century England.",
    image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1681804503i/129915654.jpg",
    price: 9.99,
  },
];

const App = () => {
  return (
    <div>
      <h1 className="library-header">Digital Library</h1>
      <div className="book-grid">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default App;
