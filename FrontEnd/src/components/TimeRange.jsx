import { Datepicker, Button } from 'flowbite-react'
import { useState } from 'react'

function getTime() {
    const currentTime = Date.now()
    const Time = new Date(currentTime)
        
    return Time.toUTCString()
}

const TimeRange = ({register})=>{
    const [timedIn, setTimedIn] = useState('')
    const [timedOut, setTimedOut] = useState('')

    return(
        <>
            {/* <div className="flex justify-center items-center">
                <div className='md-2 block'>
                    <h1>Time-In & Time-Out System</h1>
                    <Button color='green' onClick={ () => setTimedIn(getTime()) }>Time-In</Button> 
                    <Button color='red' onClick={ () => setTimedOut(getTime()) }>Time-Out</Button>
                </div>

                <div>
                    <p>Timed-In: { timedIn }</p>
                    <p>Timed-Out: { timedOut }</p>
                </div>
            </div> */}
            <input {...register('timeIn')} type='time'/>
            <input {...register('timeOut')} type='time'/>
        </>
    )
}

export default TimeRange