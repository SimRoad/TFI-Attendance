import './App.css'
import './holiday.css'
import Header from '../reuse/Header'
import Footer from '../reuse/footer'
import { useState } from 'react'

function HolidayCalendar() {
  const [currYear, setCurrYear] = useState(new Date().getFullYear());

  function updateYear (check) {
      if(check == true){
        setCurrYear(currYear + 1);
      } else {
        setCurrYear(currYear - 1);
      }
  } 

  return (
    <>
      <div className='body'>
        <div>
          <div className='divYear'>
            <input className='yearUpdate' type="image" src=".\src\assets\tdesign_arrow-up.svg" alt="left arrow" style={{transform: 'scaleX(-1)'}} onClick={updateYear}/>
            
            <h1>{currYear}</h1>
            <input className='yearUpdate' type="image" onClick={()=>updateYear(true)} src=".\src\assets\tdesign_arrow-up.svg" alt="right arrow"/>
          </div>

          <div className='yearTable'>
            <h1>hi</h1>
          </div>
        </div>
      </div>
      <Header />
      <Footer />
    </>
  )
}

export default HolidayCalendar
