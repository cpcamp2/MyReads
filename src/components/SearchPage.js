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
        this.setState({ books });
      });
    } else {
      this.setState({
        books: [],
        query: ''
      })
    }
  }



  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <a className="close-search" href="/"></a>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input type="text" placeholder="Search by title or author" value={this.state.query} onChange={this.onChange} />

          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.books.map((book) => (<Book key={book.id} book={book} onChange={(shelf) => this.props.handleShelfChange(book, shelf)}/>))}
          </ol>
        </div>
      </div>
    );
  }
}

export default SearchPage;
