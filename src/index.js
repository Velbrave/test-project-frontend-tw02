import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/App/App';
import { persistore, store } from './redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <BrowserRouter basename="/test-project-frontend-tw02">
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistore}>
        <App />
      </PersistGate>
    </Provider>
  </BrowserRouter>
  // </React.StrictMode>
);
