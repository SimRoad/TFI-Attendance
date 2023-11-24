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
    bday: yup.date().required("Birthdate required!"),
    number: yup.string().min(11).max(15).required("Number required!"),
    email: yup.string().email().required("Email required!"),
    street: yup.string().required("Street required!"),
    barangay: yup.string().required("Barangay required!"),
    postalCode: yup.number().positive().integer().max(4),
    city_municipality: yup.string().required("City/Municipality required!"),
    province: yup.string().required("Province required!"),
    // file: yup.file().required("Picture required!"),
  })

  const { register, handleSubmit, formState: {errors} } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = (data) => {
    console.log('Registration Sent', data)
  }

  return (
    <>
      <Header />
        <div className='body'>
          <div className='boxRegistry'>
            <div className='divRegistryHead'>
              <h1>Register Employee Information</h1>
            </div>

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
                    <input type="date" id='bday' {...register("bday")} />
                    <p>{ errors.bday?.message }</p>
                  </div>
                  <div className="boxInput">
                    <h1>Contact No:</h1>
                    <input type="text" id='number' placeholder='Contact Number' {...register("number")} />
                    <p>{ errors.number?.message }</p>
                  </div>
                  <div className="boxInput">
                    <h1>Email:</h1>
                    <input type="email" id='mail' placeholder='Email Address' {...register("email")} />
                    <p>{ errors.email?.message }</p>
                  </div>
                </div>
              </div>
                
              <div className="divRegistry">
                <div className="logInput">
                  <div className="boxInput">
                    <h1>Street:</h1>
                    <input type="text" id='address' placeholder='Street' {...register("street")} />
                    <p>{ errors.street?.message }</p>
                  </div>
                  <div className="boxInput">
                    <h1>Barangay:</h1>
                    <input type="text" id='address' placeholder='Barangay' {...register("barangay")} />
                    <p>{ errors.barangay?.message }</p>
                  </div>
                  <div className="boxInput">
                    <h1>Postal Code(optional):</h1>
                    <input type="number" id='address' placeholder='Postal Code' {...register("postalCode")} />
                  </div>
                </div>
              </div>

              <div className="divRegistry">
                <div className="logInput">
                  <div className="boxInput">
                    <h1>City/Municipality:</h1>
                    <input type="text" id='addressv2' placeholder='City/Municipality' {...register("city_municipality")} />
                    <p>{ errors.city_municipality?.message }</p>
                  </div>
                  <div className="boxInput">
                    <h1>Province:</h1>
                    <input type="text" id='addressv2' placeholder='Province' {...register("province")} />
                    <p>{ errors.province?.message }</p>
                  </div>
                </div>
              </div>

              <div className="divRegistry">
                <div className="logInput">
                  <div className="boxInput">
                    <h1>Picture File</h1>
                    <input type="file" {...register("file")} />
                    {/* <p>{ errors.file?.message }</p> */}
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
