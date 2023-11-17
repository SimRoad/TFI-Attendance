import './App.css'
import './registerEmp.css'
import Header from '../reuse/Header'
import Footer from '../reuse/footer'

function RegisterEmployee() {

  return (
    <>
      <Header />
        <div className='body'>
          <div className='boxRegistry'>
            <div className='divRegistryHead'>
              <h1>Register Employee Information</h1>
            </div>

            <div className='divRegistry'>
              <div className='logInput'>
                <div className="boxInput">
                  <h1>First Name:</h1> 
                  <input type="text" placeholder='First Name'/>
                </div>
                <div className="boxInput">
                  <h1>Middle Name:</h1>
                  <input type="text" placeholder='Middle Name'/>
                </div>
                <div className="boxInput">
                  <h1>Last Name:</h1>
                  <input type="text" placeholder='Last Name'/>
                </div>
              </div>
            </div>
            
            <div className="divRegistry">
              <div className="logInput">
                <div className="boxInput">
                  <h1>Birthdate:</h1>
                  <input type="date" id='bday'/>
                </div>
                <div className="boxInput">
                  <h1>Address:</h1>
                  <input type="text" id='address' placeholder='Address'/>
                </div>
              </div>
            </div>
              
            <div className="divRegistry">
              <div className="logInput">
                <div className="boxInput">
                  <h1>Contact No:</h1>
                  <input type="text" id='number' placeholder='Contact Number'/>
                </div>
                <div className="boxInput">
                  <h1>Email:</h1>
                  <input type="email" id='mail' placeholder='Email Address'/>
                </div>
              </div>
            </div>

            <div className="divRegistry">
              <div className="logInput">
                <div className="boxInput">
                  <h1>Picture File</h1>
                  <input type="file"/>
                </div>
              </div>
              <div className='logSubmit'>
                <input type="submit" value="Register" />
              </div>
            </div>
          </div>
        </div>
      <Footer />
    </>
  )
}

export default RegisterEmployee
