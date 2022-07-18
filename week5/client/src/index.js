import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App.js'
import Provider from "./context/UserProvider"
import "./css/styles.css"

ReactDOM.render(
  <BrowserRouter>
  <Provider>
    <App/>
    </Provider>
  </BrowserRouter>, 
  document.getElementById('root')
)
