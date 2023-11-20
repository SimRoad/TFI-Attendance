import React from 'react'
import ReactDOM from 'react-dom/client'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import RegisterEmployee from './pages/RegisterEmp'
import HolidayCalendar from './pages/Holidays'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HolidayCalendar />
  </React.StrictMode>,
)
  