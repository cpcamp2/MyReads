import React, { Component } from 'react';
import BookShelf from './BookShelf';

class MainPage extends Component {
  render() {
    const booksCurrentlyReading = this.props.books.filter((book) => book.shelf === "currentlyReading");
    const booksWantToRead = this.props.books.filter((book) => book.shelf === "wantToRead");
    const booksRead = this.props.books.filter((book) => book.shelf === "read");

    return (
      <div className="app">
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              <BookShelf title={'Currently Reading'} books={booksCurrentlyReading} />
              <BookShelf title={'Want to Read'} books={booksWantToRead} />
              <BookShelf title={'Read'} books={booksRead} />
            </div>
          </div>
          <div className="open-search">
            <a href="/search">Add a book</a>
          </div>
        </div>
      </div>
    );
  }
}

export default MainPage;
