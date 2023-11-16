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
            <div className='divRegistry'>
              <h1>Register Employee Information</h1>
            </div>

            <div className='divRegistry'>
              <div className='logInput'>
                <h1>First Name:</h1>
                <input type="text" placeholder='First Name'/>
                <h1>Middle Name:</h1>
                <input type="text" placeholder='Middle Name'/>
                <h1>Last Name:</h1>
                <input type="text" placeholder='Last Name'/>
              </div>
            </div>
            
            <div className="divRegistry">
              <div className="logInput">
                <h1>Birthdate:</h1>
                <input type="date"/>
                <h1>Address:</h1>
                <input type="text" placeholder='Address'/>
              </div>
            </div>
              
            <div className="divRegistry">
              <div className="logInput">
                <h1>Contact No:</h1>
                <input type="text" placeholder='Contact Number'/>
                <h1>Email:</h1>
                <input type="email" placeholder='Email Address'/>
              </div>
            </div>

            <div className="divRegistry">
              <div className="logInput">
                <h1>Picture File</h1>
                <input type="file" />
              </div>
            </div>

            <div className='divRegistry'>
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
