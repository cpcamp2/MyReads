import React from 'react';

const bookImage = book.imageLinks.thumbnail;

const Book = ({book}) => (
  <li>
    <div className="book">
      <div className="book-top">
        <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url(${bookImage})` }}></div>
        <div className="book-shelf-changer">
          <select>
            <option value="move" disabled>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">The Adventures of Tom Sawyer</div>
      <div className="book-authors">Mark Twain</div>
    </div>
  </li>
);

export default Book;
