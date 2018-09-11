import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BookShelf from './BookShelf';
// import BooksList from './BooksList';

class BookSearch extends Component {
  
  static defaultProps = { 
    filterBooks: []  
  }

  render() {
    // define variables
    const filterBooks = this.props.filterBooks;
    const searchBooks = this.props.searchBooks;
    const updateBooks = this.props.updateBooks;
    // const updateShelf = this.props.updateShelf;
    // const book = this.props.book;

    return (
      <div>

        <div className="search-books-bar">
          <Link to='/MyReads-A-Book-Tracking-App/' className="close-search">Close</Link>
          
          <Link to='/MyReads-A-Book-Tracking-App/search'> 
          <div className="search-books-input-wrapper">
            <input
              className="search-books-results"
              type='text'
              placeholder='Search...'
              onChange={(e) => searchBooks(e.target.value)}
              defaultValue={this.props.value} // R2
            />     
          </div>
          </Link>
        </div>

        <div className="search-books-results">
          <ol className="books-grid">
            { 
              filterBooks.length > 0 && filterBooks.map(book => (
              <BookShelf key={book.id} book={book} updateBooks={updateBooks} />
              ))
            }
          </ol>
        </div>

      </div>
    )
  }
}

export default BookSearch;