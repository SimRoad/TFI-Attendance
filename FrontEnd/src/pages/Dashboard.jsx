import './App.css'
import './dashboard.css'
import Header from '../reuse/Header'
import Footer from '../reuse/footer'
import { useState } from 'react'

import LogPresent from './LogButtons/logPresent.jsx'
import LogLate from './LogButtons/logLate.jsx'
import LogError from './LogButtons/logError.jsx'
import LogAbsent from './LogButtons/logAbsent.jsx'

function Dashboard() {
  const [position, setPosition] = useState("Admin");
  const [name, setName] = useState("Simone Allen");


  return (
    <>
      
        <div className='body'>
          <div className='dashBody'>
            <div className='dashDiv'>
              <div className='dashElem'>
                <img className='dashImg' src=".\src\assets\TFIicon.png" alt="" />
              </div>
              <div className='dashElem'>
                <h1 className='dashGreet'>Hello! {position} {name}</h1>
                <div className='dashStats'>
                  das
                </div>
              </div>
            </div>


            <div className='dashDiv'>
                  <input className='dashSearchText' type="text" placeholder='Employee Name'/>
                  <input className='dashSearchButton' type="image" src=".\src\assets\material-symbols_search.svg" alt="search" />
            </div>


            <div className='dashDiv'>
                <div className='dashLogs'>
                  <div>
                    <LogAbsent />
                    <LogLate />
                  </div>

                  <div>
                    <LogPresent />
                    <LogError />
                  </div>
                </div>
            </div>
          </div>
        </div>
      <Header />
      <Footer />
    </>
  )
}

export default Dashboard
