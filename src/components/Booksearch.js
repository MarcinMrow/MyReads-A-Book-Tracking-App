import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BookShelf from './BookShelf';

class BookSearch extends Component {

  render() {
    // define variables
    const filterBooks = this.props.filterBooks;
    const searchBooks = this.props.searchBooks;
    const updateBooks = this.props.updateBooks;

    return (
      <div>

        <div className="search-books-bar">
          <Link to='/' className="close-search">Close</Link>
          
          <Link to='/search'> 
          <div className="search-books-input-wrapper">
            <input
              className="search-books-results"
              type='text'
              placeholder='Search...'
              onChange={(e) => searchBooks(e.target.value)} />     
          </div>
          </Link>
        </div>

        <div className="search-books-results">
          <ol className="books-grid">
            {filterBooks.map(book => (
              <BookShelf key={book.id} book={book} updateBooks={updateBooks} />))}
          </ol>
        </div>

      </div>
    )
  }
}

export default BookSearch;