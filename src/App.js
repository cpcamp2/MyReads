import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
// import * as BooksAPI from './BooksAPI';
import BookShelfPage from './components/BookShelfPage';
import SearchPage from './components/SearchPage';
import './App.css';

class BooksApp extends Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" component={BookShelfPage} />
        <Route path="/search" component={SearchPage} />
      </Switch>
    )
  }
}

export default BooksApp
