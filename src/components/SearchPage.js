import React, { Component } from 'react';
import * as BooksAPI from '../BooksAPI';
import Book from './Book';

class SearchPage extends Component {
  state = {
    books: [],
    query: ''
  };

  onChange = (e) => {
    this.setState({query: e.target.value});
    this.handleBookSearch(e.target.value);
  }

  handleBookSearch = (query) => {
    if (query.length !== 0) {
      BooksAPI.search(query).then((books) => {
        books = this.setDefaultShelf(books)
        this.setState({ books });
      });
    } else {
      this.setState({
        books: [],
        query: ''
      })
    }
  }

  setDefaultShelf = (books) => {
    const myBooks = this.props.books

    for (let book of books) {
      book.shelf = "none"
      for (let myBook of myBooks) {
        if (myBook.id === book.id) {
          book.shelf = myBook.shelf;
        }
      };
    };
    return books
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <a className="close-search" href="/"></a>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author" value={this.state.query} onChange={this.onChange} />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.query.length > 0 && this.state.books.map((book) => (<Book key={book.id} book={book} handleShelfChange={(shelf) => this.props.handleShelfChange(book, shelf)}/>))}
          </ol>
        </div>
      </div>
    );
  }
}

export default SearchPage;
