import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.scss';
import { Auth0Provider } from '@auth0/auth0-react';

const domain = process.env.REACT_APP_AUTH0_DOMAIN as string;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID as string;

ReactDOM.render(
  <Auth0Provider domain={domain} clientId={clientId} redirectUri={window.location.origin}>
    <App />
  </Auth0Provider>,
  document.getElementById('root'),
);
