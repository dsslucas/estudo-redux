import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//Integração do React com o Redux
import { Provider } from 'react-redux'

//Configuração da Store
import configStore from './store/storeConfig'

const store = configStore() 

ReactDOM.render(
  //Integração entre os frameworks React e Redux
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
