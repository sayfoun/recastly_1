import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import AddVideo from "./AddVideo"
import Home from "./home"
import NavBar from './navbar'
import {Route,Routes} from 'react-router-dom'

export default function App() { return (
  <div>
      <NavBar/>
      <Routes >
      <Route path='/' element={<Home/>}/>
      <Route path='/addVideo' element={<AddVideo/>}></Route>

    </Routes>
  </div>
  )}