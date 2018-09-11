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
    query: ''
    // value: ''
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
/*
  // search results included in Search Terms
  searchBooks(query) {
    if (query) {
      BooksAPI.search(query)
      .then((result) => {
        // this.updateSearch(result) //
        if (result.error !== 'empty query') {
          this.setState({filterBooks: result})
        } else {
          this.setState({filterBooks: []})
        }
      })
    } else {
      this.setState({filterBooks: []})
    }
  }
*/
  // search results included in Search Terms
  searchBooks(query) {
    if (query) {
      BooksAPI.search(query)
      .then((filterBooks) => {
        this.updateSearch(filterBooks) //
        if (filterBooks.error) {
          this.setState({filterBooks: []})
        } else {
          this.setState({filterBooks: filterBooks})
        }
      })
    } else {
      this.setState({filterBooks: []})
    }
  }

  // changes bookshelf
  updateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf) 
    .then((update) => {
      this.fetchBooks();
      this.updateSearch(this.state.filterBooks);
    })
  }

  updateSearch = (values) => {
    for (let value of Array.from(values)) { // add Array.from() 
      for (let book of this.state.Books) {
        if (value.id === book.id) {
          value.shelf = book.shelf
        } 
      }
    }
    this.setState({filterBooks: values});
    console.log('book value');
  }

  render() {

    return (
      <div className="app">
  
          <Route exact path="/" render={() => (
            <BooksList 
              books={this.state.Books} 
              updateBooks={(book, shelf) => this.updateShelf(book, shelf)}
            />
            )}
          />

          <Route path="/search" render={() => (
            <div>
              <Booksearch
                filterBooks={this.state.filterBooks}
                searchBooks={(query) => this.searchBooks(query)}
                updateBooks={(book, shelf) => this.updateShelf(book, shelf)} 
                // query = {this.state.query} 
                />
            </div>
            )}
          />

      </div>
    )
  }
}

export default BooksApp;