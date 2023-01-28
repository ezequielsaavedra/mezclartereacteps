import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCx270yWRizQ_4RnS7-LdugM8c6Y2SS8TQ",
  authDomain: "mezclarte-react.firebaseapp.com",
  projectId: "mezclarte-react",
  storageBucket: "mezclarte-react.appspot.com",
  messagingSenderId: "694793077601",
  appId: "1:694793077601:web:7aba56c0b015bf6c5afb20"
};


const app = initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
