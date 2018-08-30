import React, { Component } from 'react';

const BookShelf = ({title}) => (
  <div className="bookshelf">
    <h2 className="bookshelf-title">{title}</h2>
    <div className="bookshelf-books">
      <ol className="books-grid">
      </ol>
    </div>
  </div>
);

export default BookShelf;
