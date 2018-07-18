# Front-End Nanodegree MyReads: A Book Tracking App Project

## Project Overview

MyReads project is a bookshelf app that allows you to select and categorize books you have read, are currently reading, or want to read. The project emphasizes using React to build the application and provides an API server and client library that you use to persist information as you interact with the application.

1. Starter template for the assessment project for Udacity's React Fundamentals course provided a static example of the CSS and HTML markup without any of the React code that was needed to complete the project. 
2. The goal of the project: adding interactivity to the app by refactoring the static code in the template.

Start this project from scratch: [Create React App](https://github.com/facebookincubator/create-react-app).

## App Functionality

1. The main page displays a list of "shelves" (i.e. categories):

* Currently Reading
* Want to Read
* Read

and each of the shelves contains a number of books.

2. Each book has a control that lets you select the shelf for that book so when you select a different shelf, the book moves there. Note that the default value for the control should always be the current shelf the book is in.

3. The main page also has a link to /search, a search page that allows you to find books to add to your library.

4. The search page has a text input that may be used to find books. As the value of the text input changes, the books that match that query are displayed on the page, along with a control that lets you add the book to your library. To keep the interface consistent, you may consider re-using some of the code you used to display the books on the main page.

5. The search page also has a link to / (the root URL), which leads back to the main page. When you navigate back to the main page from the search page, you should instantly see all of the selections you made on the search page in your library.

### Created for [**Front-End Web Developer Nanodegree Program**](https://eu.udacity.com/).

## Getting started

1. Download/ clone the repository 
```
$ git clone https://github.com/MarcinMrow/MyReads-A-Book-Tracking-App.git
```
2. Open the project directory.

* install all project dependencies with `npm install`
* start the development server with `npm start`
* with your server running, visit the site: `http://localhost:3000`

## Instructions

Project Instructions [rubric](https://review.udacity.com/#!/rubrics/918/view).

## Dependencies

1. MyReads: A Book Tracking App has been created as the Udacity Project and based on the **starters code**.
2. **React**: [A JavaScript library for building user interfaces](https://reactjs.org/).
3. **React**: [React Training/ React Router](https://reacttraining.com/react-router/).
4. **React**: [Learn ReactJS - Tutorial](https://www.tutorialspoint.com/reactjs/index.htm).
5. **GIT**: [Writing on GitHub](https://help.github.com/articles/basic-writing-and-formatting-syntax/#links).
6. **Style Guidelines**: [Udacity Frontend Nanodegree Style Guide](http://udacity.github.io/frontend-nanodegree-styleguide/index.html).
7. **Udacity Community**: [Forums](https://discussions.udacity.com/) and [Knowledge](https://knowledge.udacity.com/) and [Slack](https://slack.com/).
8. **Web Fundamentals**: [guide](https://developers.google.com/web/fundamentals/).

## Backend Server

To simplify your development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important

The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Contributing

This repository had the starter code for _all_ Udacity students. 
For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).
