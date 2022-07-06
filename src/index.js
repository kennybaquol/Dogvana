import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/App/App.jsx';
import { BrowserRouter as Router} from 'react-router-dom';


// const root = ReactDOM.createRoot(document.getElementById('root'));
ReactDOM.render(
  <React.StrictMode>
    <Router><App /></Router>
  </React.StrictMode>,
  document.getElementById('root')
);
