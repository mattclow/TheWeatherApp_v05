import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import Title from './components/Title';
import InputControls from './components/InputControls'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        {/*<App />*/}
        <Title />
        <InputControls />
    </React.StrictMode>
);
