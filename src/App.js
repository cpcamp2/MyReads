import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import * as BooksAPI from './BooksAPI';
import MainPage from './components/MainPage';
import SearchPage from './components/SearchPage';
import './App.css';

class BooksApp extends Component {
  state = {
    books: []
  }

  componentDidMount() {
    this.getBooks();
  }

  handleShelfChange = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      this.getBooks();
    })
  }

  getBooks = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({ books });
    });
  }

  render() {
    // console.log(this.state);
    return (
      <Switch>
        <Route exact path="/" render={() => <MainPage books={this.state.books} handleShelfChange={this.handleShelfChange} />} />
        <Route path="/search" render={() => <SearchPage books={this.state.books} handleShelfChange={this.handleShelfChange} />} />
      </Switch>
    )
  }
}

export default BooksApp
