import React from 'react';
import Book from './Book';

const BookShelf = ({title, books}) => (
  <div className="bookshelf">
    <h2 className="bookshelf-title">{title}</h2>
    <div className="bookshelf-books">
      <ol className="books-grid">
        {props.books.map((book) => <Book book={book}/>)}
      </ol>
    </div>
  </div>
);

export default BookShelf;
