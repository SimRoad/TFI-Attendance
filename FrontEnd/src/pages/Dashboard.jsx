import './App.css'
import './dashboard.css'
import Header from '../reuse/Header'
import Footer from '../reuse/footer'

function Dashboard() {

  return (
    <>
      <Header />
        <div className='body'>
          <div className='dashDiv'>
              <img className='dashImg' src=".\src\assets\TFIicon.png" alt="" />
          </div>
        </div>
      <Footer />
    </>
  )
}

export default Dashboard
