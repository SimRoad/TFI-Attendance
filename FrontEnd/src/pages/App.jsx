import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './Dashboard'
import Login from './Login'
import RegisterEmployee from './RegisterEmp'
import HolidayCalendar from './Holidays'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard />}></Route>
        <Route path='/Login' element={<Login />}></Route>
        <Route path='/RegisterEmployee' element={<RegisterEmployee />}></Route>
        <Route path='/HolidayCalendar' element={<HolidayCalendar />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App