import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './utils/iconUtils';

ReactDOM.render(
	<App />, 
	document.getElementById('root'));
serviceWorker.unregister();
