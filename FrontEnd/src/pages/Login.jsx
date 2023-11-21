import './App.css'
import './login.css'
import Header from '../reuse/Header'
import Footer from '../reuse/footer'

function Login() {

  return (
    <>
      <Header />
        <div className='body'>
          <div className='boxLogin'>
            <div className='divLogin'>
              <img className='logPNG' src="src/assets/TFIicon.png" alt="icon" />
            </div>

            <div className='divLogin'>
              <div className='logInput'>
                <h1>Username:</h1>
                <input type="text" placeholder='Username'/>
              </div>

              <div className='logInput'>
                <h1>Password:</h1>
                <input type="password" placeholder='Password'/>
                <a href="http://">Forgot password?</a>
              </div>
            </div>

            <div className='divLogin'>
              <div className='logSubmit'>
                <input type="submit" value="Login" />
              </div>
            </div>
          </div>
        </div>
      <Footer />
    </>
  )
}

export default Login
