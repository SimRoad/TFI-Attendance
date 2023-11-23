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
        <div className='divHolidayCalendar'>
          <div className='divYear'>
            <input className='yearUpdate' type="image" src=".\src\assets\tdesign_arrow-up.svg" alt="left arrow" style={{transform: 'scaleX(-1)'}} onClick={updateYear}/>
            
            <div className='editYear'>
              {currYear}
              <img src=".\src\assets\ic_baseline-plus.svg" alt="add" />
            </div>

            {/* <input className='editYear' type="text" onfocus="this.blur()" placeholder={currYear} maxLength={4} disabled/> */}

            <input className='yearUpdate' type="image" onClick={()=>updateYear(true)} src=".\src\assets\tdesign_arrow-up.svg" alt="right arrow"/>
          </div>

          <div className='yearTable'>
            <table className='actualTable'>
              <thead className='monthRow'>
                <th>January</th>
                <th>February</th>
                <th>March</th>
                <th>April</th>
                <th>May</th>
                <th>June</th>
              </thead>

              <tbody className='holiDaysRow'>
                <td>
                  <div className='monthHoliday'>
                    <div className='holidayDate'>12</div>
                    <div className='holdayName'>New Year Ball</div>
                  </div>
                  <div className='monthHoliday' disabled>
                    1 New Year Ball
                  </div>
                </td>
                <td>
                <div className='monthHoliday'>
                    1 New Year Ball
                  </div>
                </td>
                <td>
                  <div className='monthHoliday'>
                    <div className='holidayDate'>16</div>
                    <div className='holdayName'>Smth smtrh smth smth</div>
                  </div>
                </td>
                <td>?</td>
                <td>?</td>
                <td>?</td>
              </tbody>

              <tr className='divDivider'>
                <td></td>
              </tr>
            
              <thead className='monthRow'>
                <th>July</th>
                <th>August</th>
                <th>September</th>
                <th>October</th>
                <th>November</th>
                <th>December</th>
              </thead>
              <tbody className='holiDaysRow'>
                <td>?<br />?</td>
                <td>?</td>
                <td>
                <div className='monthHoliday'>
                    <div className='holidayDate'>29</div>
                    <div className='holdayName'>aNGELS DAYYYYY- angel </div>
                  </div>
                  <div className='monthHoliday'>
                    <div className='holidayDate'>16</div>
                    <div className='holdayName'>Smth smtrh smth smth</div>
                  </div>
                </td>
                <td>?</td>
                <td>?</td>
                <td>?</td>
              </tbody>
            </table>
          </div>
        </div>

        <div></div>
      </div>
      <Header />
      <Footer />
    </>
  )
}

export default HolidayCalendar
