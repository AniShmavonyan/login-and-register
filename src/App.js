import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Landing from './components/Landing'
import Login from './components/Login'
import Register from './components/Register'
import Home from './components/Home'
import './App.css'

export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/home" element={<Home />}></Route>
          </Route>
        </Routes>
      </div>
    </Router>
  )
}
