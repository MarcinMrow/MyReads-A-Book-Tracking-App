import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import BookShelf from './BookShelf';

// Component to render main page with bookshelves
class BooksList extends Component {

  render() {
    // define variables
    const books = this.props.books;
    const updateBooks = this.props.updateBooks;

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>

        <div className="list-books-content">

          <div className="bookshelf">
            <h2 className="bookshelf-title">Currently Reading</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                { 
                  books.filter((book) => book.shelf === "currentlyReading").map(book => (
                  <BookShelf key={book.id} book={book} updateBooks={updateBooks} /> 
                  ))
                }
              </ol>
            </div>
          </div>

          <div className="bookshelf">
            <h2 className="bookshelf-title">Want To Read</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">             
                { 
                  books.filter((book) => book.shelf === "wantToRead").map(book => (
                  <BookShelf key={book.id} book={book} updateBooks={updateBooks} /> 
                  ))
                }
              </ol>
            </div>
          </div>

          <div className="bookshelf">
            <h2 className="bookshelf-title">Read</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                { 
                  books.filter((book) => book.shelf === "read").map(book => (
                  <BookShelf key={book.id} book={book} updateBooks={updateBooks} /> 
                  ))
                }
              </ol>
            </div>
          </div>

          <div className="open-search">
            <Link to="/search">Add a book</Link>
          </div>

        </div>
      </div>
    )
  }

}

BooksList.propTypes = {
  books: PropTypes.array.isRequired
}

export default BooksList;