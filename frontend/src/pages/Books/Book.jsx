/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import DomainSearch from './DomainSearch';
import BookList from './BookList';
import './Book.css';

function Book() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleDomainSearch = async (domain) => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(`https://backend-r6wa.onrender.com/books/${encodeURIComponent(domain)}`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch books');
      }
      const data = await response.json();
      setBooks(data.books || []);
    } catch (err) {
      setError(err.message);
      setBooks([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="book-container">
      <div className="book-page">
        <div className="book-content">
          <h1>Book Suggestions</h1>
          <DomainSearch onSearch={handleDomainSearch} />
          {loading && <div className="loading">Loading...</div>}
          {error && <div className="error">{error}</div>}
          {!loading && !error && <BookList books={books} />}
        </div>
      </div>
    </div>
  );
}

export default Book;
