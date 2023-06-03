import { createRoot } from 'react-dom/client';

// third party
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { GoogleOAuthProvider } from '@react-oauth/google';

import { PersistGate } from 'redux-persist/integration/react';

// project imports
import * as serviceWorker from 'serviceWorker';
import App from 'App';
import storeAndPersistor from 'store';

// style + assets
import 'assets/scss/style.scss';
import config from './config';

// ==============================|| REACT DOM RENDER  ||============================== //

const { store, persistor } = storeAndPersistor();

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
    <Provider store={store}>
      <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
        <BrowserRouter basename={config.basename}>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </GoogleOAuthProvider>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
