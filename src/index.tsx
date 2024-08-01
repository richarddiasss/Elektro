import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Register from './pages/Register';
import {Home} from './pages/Home';
import { GlobalFont } from './assets/global/globalStyle';
import Register2 from './pages/Register2';
import Congratulations from './pages/Congratulations';
import Pesquisa from './pages/Pesquisa';
import ProductFound from './pages/ProductFound';
import MenuHamburguer from './components/MenuHamburguer';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalFont/>
    <Home/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
