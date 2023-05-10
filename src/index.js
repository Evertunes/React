import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//cria o root do react
const root = ReactDOM.createRoot(document.getElementById('root'));

//chama a função render
//App é o componente renderizado
root.render(
    <App />
);