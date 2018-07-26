import React, { Component } from 'react';

// decides which status a book currently has (1.Currently Reading | 2.Want to Read | 3.Read | 4.None)
class BookShelf extends Component {

  render() {
    // define variables
    const book = this.props.book;
    const updateBooks = this.props.updateBooks;
    let bookShelf = (book.shelf);
   
    return (
      <li>
        <div className="book">
          <div className="book-top">
            { 
              book.imageLinks && (
                <div className="book-cover" 
                  style={{backgroundImage: `url('${book.imageLinks.thumbnail}')`}}>
                </div>
              )
            }

            <div className="book-shelf-changer">
              <select
                defaultValue="none"
                value={bookShelf} //
                onChange={(e) => this.props.updateBooks(book, e.target.value)}
                // onChange={(e) => this.setState.updateBooks(book, e.target.value)} 
              >  
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
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

export default BookShelf;


// https://hackernoon.com/react-stateless-functional-components-nine-wins-you-might-have-overlooked-997b0d933dbc
/* 
import React, { Component } from 'react';
// import PropTypes from 'prop-types';

// decides which status a book currently has (1.Currently Reading | 2.Want to Read | 3.Read | 4.None)
const BookShelf = (props) => {

  // define variables
  const book = props.book;
  const updateBooks = props.updateBooks;
  let bookShelf = (book.shelf);
   
    return (
      <li>
        <div className="book">
          <div className="book-top">
            { 
              book.imageLinks && (
                <div className="book-cover" 
                  style={{backgroundImage: `url('${book.imageLinks.thumbnail}')`}}>
                </div>
              )
            }

            <div className="book-shelf-changer">
              <select
                defaultValue="none"
                value={bookShelf} //
                onChange={(e) => props.updateBooks(book, e.target.value)}
                // onChange={(e) => this.setState.updateBooks(book, e.target.value)} 
              >  
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>

          <div className="book-title">{props.book.title}</div>
          
          <div className="book-authors">{props.book.authors}</div>

        </div>
      </li>
    )
  }

export default BookShelf;
*/