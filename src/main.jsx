import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Provider} from './components/Provider/provider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider/> 
  </React.StrictMode>,
)