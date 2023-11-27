import WeekdaySelect from './WeekdaySelect'
import {Button} from 'flowbite-react'
import {useForm} from 'react-hook-form'
import { DevTool } from '@hookform/devtools'
import TimeRange from './TimeRange'


const ShiftForm = ({fields})=>{
    const {handleSubmit, register, control, formState:{errors}} = fields
    return(
        <>
            <WeekdaySelect register={register}/>
            <TimeRange register={register} />
            <Button  color='blue' type='submit' className='color-black'>SUBMIT?</Button>
        </>
    )
}

export default ShiftForm