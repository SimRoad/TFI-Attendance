import React from 'react'
import ReactDOM from 'react-dom/client'
import Login from './pages/Login'
import './index.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/login' element={<Login />}/>
      </Routes>
    </Router>
  </React.StrictMode>,
)
