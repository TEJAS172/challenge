import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import Home from './components/Home'
import './App.css'

function App(props){
  return(
  <BrowserRouter>
  <Home/>
  </BrowserRouter>
  )
}
export default App
