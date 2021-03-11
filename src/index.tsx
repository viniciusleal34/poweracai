import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { App } from './App';

ReactDOM.render(
  <StrictMode>
    <ToastContainer />
    <App />
  </StrictMode>,
  document.getElementById('root'),
);
