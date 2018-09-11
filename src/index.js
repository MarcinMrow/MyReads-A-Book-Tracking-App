import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
// add a <Router> that uses the HTML5 history API to keep UI in sync with the URL
import { BrowserRouter } from 'react-router-dom';

// add a <Router>
ReactDOM.render(
	<BrowserRouter basename={process.env.PUBLIC_URL}><App /></BrowserRouter>, 
	document.getElementById('root')
)