import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import AppRoutes from "./AppRoutes";

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}


export default App;
