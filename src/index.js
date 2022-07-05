import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/App/App';
import { BrowserRouter as Router } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <GoogleOAuthProvider clientId="798631431124-3t89jnlu98aurqa6gjm6vfivs753ukur.apps.googleusercontent.com">
        <App />
      </GoogleOAuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
