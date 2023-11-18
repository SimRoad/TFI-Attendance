import { useState, useEffect } from "react"
import './App.css'
import './registerEmp.css'
import Header from '../reuse/Header'
import Footer from '../reuse/footer'

function RegisterEmployee() {
  const initialValues = { fname: "", mname: "", lname: "", bday: "", address: "", number: "", email: "", file: "" };
  const [formValues, setFormValues] = useState(initialValues)
  const [formErrors, setFormErrors] = useState({})
  const [isSubmit, setIsSubmit] = useState(false)
  
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormValues({ ...formValues, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormErrors(validate(formValues))
    setIsSubmit(true)
  }

  useEffect(() => {
    console.log(formErrors)
    if(Object.keys(formErrors).length === 0 && isSubmit){
      console.log(formValues)
    }
  }, [formErrors])

  const validate = (values) => {
    const errors = {}
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i

    if (!errors.fname) {
      errors.fname = "First name is required"
    }
    if (!errors.mname) {
      errors.mname = "Middle name is required"
    }
    if (!errors.lname) {
      errors.lname = "Last name is required"
    }
    return errors
  }

  return (
    <>
      <Header />
        <div className='body'>
          <div className='boxRegistry'>
            <div className='divRegistryHead'>
              <h1>Register Employee Information</h1>
            </div>

            <pre>{ JSON.stringify(formValues, undefined, 2) }</pre>

            <form onSubmit={ handleSubmit }>
              <div className='divRegistry'>
                <div className='logInput'>
                  <div className="boxInput">
                    <h1>First Name:</h1> 
                    <input 
                      type="text" 
                      placeholder='First Name' 
                      name="fname"
                      value={ formValues.fname } 
                      onChange={ handleChange } 
                    />
                  </div>
                  <div className="boxInput">
                    <h1>Middle Name:</h1>
                    <input 
                      type="text" 
                      placeholder='Middle Name' 
                      name="mname"
                      value={ formValues.mname } 
                      onChange={ handleChange } 
                    />
                  </div>
                  <div className="boxInput">
                    <h1>Last Name:</h1>
                    <input 
                      type="text" 
                      placeholder='Last Name' 
                      name="lname"
                      value={ formValues.lname } 
                      onChange={ handleChange } 
                    />
                  </div>
                </div>
              </div>
              
              <div className="divRegistry">
                <div className="logInput">
                  <div className="boxInput">
                    <h1>Birthdate:</h1>
                    <input 
                      type="date" 
                      id='bday' 
                      name="bday"
                      value={ formValues.bday } 
                      onChange={ handleChange } 
                    />
                  </div>
                  <div className="boxInput">
                    <h1>Address:</h1>
                    <input 
                      type="text" 
                      id='address'
                      name="address" 
                      placeholder='Address' 
                      value={ formValues.address } 
                      onChange={ handleChange } 
                    />
                  </div>
                </div>
              </div>
                
              <div className="divRegistry">
                <div className="logInput">
                  <div className="boxInput">
                    <h1>Contact No:</h1>
                    <input 
                      type="text" 
                      id='number' 
                      name="number"
                      placeholder='Contact Number' 
                      value={ formValues.number } 
                      onChange={ handleChange } 
                    />
                  </div>
                  <div className="boxInput">
                    <h1>Email:</h1>
                    <input 
                      type="email" 
                      id='mail' 
                      name="email"
                      placeholder='Email Address' 
                      value={ formValues.email } 
                      onChange={ handleChange } 
                    />
                  </div>
                </div>
              </div>

              <div className="divRegistry">
                <div className="logInput">
                  <div className="boxInput">
                    <h1>Picture File</h1>
                    <input 
                      type="file" 
                      name="file"
                      value={ formValues.file } 
                      onChange={ handleChange } 
                    />
                  </div>
                </div>
                <div className='logSubmit'>
                  <button className="registerBtn">Register</button>
                  {/* <input type="submit" value="Register" /> */}
                </div>
              </div>
            </form>
          </div>
        </div>
      <Footer />
    </>
  )
}

export default RegisterEmployee
