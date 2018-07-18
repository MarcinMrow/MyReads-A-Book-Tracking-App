import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import BooksList from './components/BooksList';
import Booksearch from './components/Booksearch';
import './App.css';

class BooksApp extends Component {
  state = {
    Books: [],
    filterBooks: [],
    search: "" // 
  }

  // gets books from bookstore 
  fetchBooks() {
    BooksAPI.getAll()   
    .then((data) => {
      this.setState({
        Books: data
      });
    })
  }

  // invokes the function which gets all books
  componentDidMount() {
    this.fetchBooks(); 
  }

  // search results included in Search Terms
  searchBooks(query) {
    if (query) {
      BooksAPI.search(query)
      .then((result) => {
        if (result.error !== 'empty query') {
          this.setState({filterBooks: result})
        } else {
          this.setState({filterBooks: []})
        }
      })
    }
  }

  // changes bookshelf
  updateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf)
    .then((update) => {
      this.fetchBooks()
    })
  }

  render() {
    return (
      <div className="app">
  
          <Route exact path="/" render={() => (
            <BooksList books={this.state.Books} 
              updateBooks={(book, shelf) => this.updateShelf(book, shelf)} />
            )}
          />

          <Route path="/search" render={() => (
            <div>
              <Booksearch
                filterBooks={this.state.filterBooks}
                searchBooks={(query) => this.searchBooks(query)}
                updateBooks={(book, shelf) => this.updateShelf(book, shelf)} />
            </div>
            )}
          />

      </div>
    )
  }
}

export default BooksApp;