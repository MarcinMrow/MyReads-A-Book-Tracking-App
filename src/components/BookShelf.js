import React, { Component } from 'react';
// import PropTypes from 'prop-types';

// decides which status a book currently has (1.Currently Reading | 2.Want to Read | 3.Read | 4.None)
class BookShelf extends Component {

  render() {
    // define variables
    const book = this.props.book;
    // const updateBooks = this.props.updateBooks;
    let shelfBook = (book.shelf);

    return (
      <li>
        <div className="book">
          <div className="book-top">

            { book.imageLinks && (
              <div className="book-cover" 
                style={{backgroundImage: `url('${book.imageLinks.thumbnail}')`}}>
              </div>
            )}

            <div className="book-shelf-changer">
              <select
                value={shelfBook} //
                onChange={(e) => this.props.updateBooks(book, e.target.value)}
                >  
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none" defaultValue={book.shelf}>None</option>
              </select>
            </div>
          </div>

          <div className="book-title">{this.props.book.title}</div>
          
          <div className="book-authors">{this.props.book.authors}</div>

        </div>
      </li>
    )
  }
}

/*
BookShelf.propTypes = {
  updateBooks: PropTypes.func.isRequired
}
*/

export default BookShelf;