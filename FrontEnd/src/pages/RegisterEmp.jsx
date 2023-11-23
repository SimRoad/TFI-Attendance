import './App.css'
import './registerEmp.css'
import Header from '../reuse/Header'
import Footer from '../reuse/footer'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

function RegisterEmployee() {
  const schema = yup.object().shape({
    fname: yup.string().required("First name is required!"),
    mname: yup.string().required("Middle name is required!"),
    lname: yup.string().required("Last name is required!"),
  })

  const { register, handleSubmit, formState: {errors} } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = (data) => {
    console.log('Registration Sent', data)
  }

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
            <pre>{ JSON.stringify(formValues, undefined, 2) }</pre>

            <form onSubmit={ handleSubmit(onSubmit) }>
              <div className='divRegistry'>
                <div className='logInput'>
                  <div className="boxInput">
                    <h1>First Name:</h1> 
                    <input type="text" placeholder='First Name' {...register("fname")} />
                    <p>{ errors.fname?.message }</p>
                  </div>
                  <div className="boxInput">
                    <h1>Middle Name:</h1>
                    <input type="text" placeholder='Middle Name' {...register("mname")} />
                    <p>{ errors.mname?.message }</p>
                  </div>
                  <div className="boxInput">
                    <h1>Last Name:</h1>
                    <input type="text" placeholder='Last Name' {...register("lname")} />
                    <p>{ errors.lname?.message }</p>
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
                      {...register("lname")}
                    />
                    <p>{ formErrors.bday }</p>
                  </div>
                  <div className="boxInput">
                    <h1>Contact No:</h1>
                    <input 
                      type="text" 
                      id='number' 
                      placeholder='Contact Number' 
                      {...register("lname")}
                    />
                    <p>{ formErrors.number }</p>
                  </div>
                  <div className="boxInput">
                    <h1>Email:</h1>
                    <input 
                      type="email" 
                      id='mail' 
                      placeholder='Email Address' 
                      {...register("lname")}
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
                      placeholder='Street' 
                      {...register("lname")}
                    />
                    <p>{ formErrors.street }</p>
                  </div>
                  <div className="boxInput">
                    <h1>Barangay:</h1>
                    <input 
                      type="text" 
                      id='address'
                      placeholder='Barangay' 
                      {...register("lname")}
                    />
                    <p>{ formErrors.barangay }</p>
                  </div>
                  <div className="boxInput">
                    <h1>Postal Code(optional):</h1>
                    <input 
                      type="text" 
                      id='address'
                      placeholder='Postal Code' 
                      {...register("lname")}
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
                      placeholder='City/Municipality' 
                      {...register("lname")}
                    />
                    <p>{ formErrors.city_municipality }</p>
                  </div>
                  <div className="boxInput">
                    <h1>Province:</h1>
                    <input 
                      type="text" 
                      id='addressv2'
                      placeholder='Province' 
                      {...register("lname")}
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
                </div>
              </div>
            </form>
          </div>
        </div>
      <Header />
      <Footer />
    </>
  )
}

export default RegisterEmployee
