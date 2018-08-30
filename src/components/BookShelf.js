import React, { Component } from 'react';
import Book from './Book';

const BookShelf = ({title, books, handleShelfChange}) => (
  <div className="bookshelf">
    <h2 className="bookshelf-title">{title}</h2>
    <div className="bookshelf-books">
      <ol className="books-grid">
        {books.map(book => <Book key={book.id} book={book} handleShelfChange={handleShelfChange}/>)}
      </ol>
    </div>
  </div>
);

export default BookShelf;
