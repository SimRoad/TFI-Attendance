import { Button } from 'flowbite-react'
import { useState } from 'react'
import client from '../axiosURL'

function getTime() {
    const currentTime = Date.now()
    const Time = new Date(currentTime)
        
    return Time.toUTCString()
}

const TimeInOut = () => {
    
    const [timedIn, setTimedIn] = useState('')
    const [timedOut, setTimedOut] = useState('')
    const [id,setID] = useState('')
    
    const initTimeIn = ()=>{
        client.post('daysession/create',{
            daysession:{
                employeeID: id,
                timeIn: new Date()
            }
        })
    }
    const initTimeOut = ()=>{
        client.post('daysession/create',{
            daysession:{
                employeeID: id,
                timeOut: new Date()
            }
        })
    }

    return(
        <>
            <div className="flex justify-center items-center">
                <div className='md-2 block'>
                    <h1>Time-In & Time-Out System</h1>
                    <input type="text" onChange={({target:{value}})=>setID(value)}/>
                    <Button color='green' onClick={ () => setTimedIn(getTime()) }>Time-In</Button> 
                    <Button color='red' onClick={ () => setTimedOut(getTime()) }>Time-Out</Button>
                </div>

                <div>
                    <p>Timed-In: { timedIn }</p>
                    <p>Timed-Out: { timedOut }</p>
                </div>
            </div>
        </>
    )
}

export default TimeInOut