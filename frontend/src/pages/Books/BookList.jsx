import React from 'react';
import BookCard from './BookCard';
import './Book.css';

function BookList({ books }) {
  if (!books || books.length === 0) {
    return (
      <div className="no-books">
        Enter a domain to see book suggestions
      </div>
    );
  }

  return (
    <div className="book-list">
      {books.map((book, index) => (
        <BookCard key={index} book={book} />
      ))}
    </div>
  );
}

export default BookList; 