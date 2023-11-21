import { useState, useEffect } from "react"
import { Form } from "react-router-dom"
import './App.css'
import './registerEmp.css'
import Header from '../reuse/Header'
import Footer from '../reuse/footer'

function RegisterEmployee() {
  const initialValues = { fname: "", mname: "", lname: "", bday: "", number: "", email: "", street: "", barangay: "", postalCode: "", city_municipality: "", province: "", file: "" };
  const [formValues, setFormValues] = useState(initialValues)
  const [formErrors, setFormErrors] = useState({})
  const [isSubmit, setIsSubmit] = useState(false)
  
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormValues({ ...formValues, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDfault()
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
    if (!errors.bday) {
      errors.bday = "Birthday is required"
    }
    if (!errors.number) {
      errors.number = "Contact number is required"
    }
    if (!errors.email) {
      errors.email = "Email is required"
    } else if (!regex.test(values.email)) {
      errors.email = "Not a valid email format!"
    }
    if (!errors.street) {
      errors.street = "Street is required"
    }
    if (!errors.barangay) {
      errors.barangay = "Barangay is required"
    }
    if (!errors.city_municipality) {
      errors.city_municipality = "City/Municipality is required"
    }
    if (!errors.province) {
      errors.province = "Province is required"
    }
    if (!errors.file) {
      errors.file = "Picture is required"
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

            {Object.keys(formErrors).length === 0 && isSubmit ? (
              <div className="successfulReg">Registered Successfully</div>
            ) : (
              <pre>{ JSON.stringify(formValues, undefined, 2) }</pre>
            )}

            <Form onSubmit={ handleSubmit }>
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
                    <p>{ formErrors.fname }</p>
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
                    <p>{ formErrors.mname }</p>
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
                    <p>{ formErrors.lname }</p>
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
                    <p>{ formErrors.bday }</p>
                  </div>
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
                    <p>{ formErrors.number }</p>
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
                    <p>{ formErrors.email }</p>
                  </div>
                </div>
              </div>
                
              <div className="divRegistry">
                <div className="logInput">
                  <div className="boxInput">
                    <h1>Street:</h1>
                    <input 
                      type="text" 
                      id='address'
                      name="street" 
                      placeholder='Street' 
                      value={ formValues.street } 
                      onChange={ handleChange } 
                    />
                    <p>{ formErrors.street }</p>
                  </div>
                  <div className="boxInput">
                    <h1>Barangay:</h1>
                    <input 
                      type="text" 
                      id='address'
                      name="barangay" 
                      placeholder='Barangay' 
                      value={ formValues.barangay } 
                      onChange={ handleChange } 
                    />
                    <p>{ formErrors.barangay }</p>
                  </div>
                  <div className="boxInput">
                    <h1>Postal Code(optional):</h1>
                    <input 
                      type="text" 
                      id='address'
                      name="postalCode" 
                      placeholder='Postal Code' 
                      value={ formValues.postalCode } 
                      onChange={ handleChange } 
                    />
                  </div>
                </div>
              </div>

              <div className="divRegistry">
                <div className="logInput">
                  <div className="boxInput">
                    <h1>City/Municipality:</h1>
                    <input 
                      type="text" 
                      id='addressv2'
                      name="city_municipality" 
                      placeholder='City/Municipality' 
                      value={ formValues.city_municipality } 
                      onChange={ handleChange } 
                    />
                    <p>{ formErrors.city_municipality }</p>
                  </div>
                  <div className="boxInput">
                    <h1>Province:</h1>
                    <input 
                      type="text" 
                      id='addressv2'
                      name="province" 
                      placeholder='Province' 
                      value={ formValues.province } 
                      onChange={ handleChange } 
                    />
                    <p>{ formErrors.province }</p>
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
                    <p>{ formErrors.file }</p>
                  </div>
                </div>
                <div className='logSubmit'>
                  <button className="registerBtn">Register</button>
                  {/* <input id="registerBtn" type="submit" value="Register" /> */}
                </div>
              </div>
            </Form>
          </div>
        </div>
      <Header />
      <Footer />
    </>
  )
}

export default RegisterEmployee
