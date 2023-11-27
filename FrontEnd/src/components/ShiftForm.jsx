import WeekdaySelect from './WeekdaySelect'
import {Button} from 'flowbite-react'
import {useForm} from 'react-hook-form'
import { DevTool } from '@hookform/devtools'


const ShiftForm = ()=>{
    const {handleSubmit, register, control, formState:{errors}} = useForm()
    return(
        <>
        <form onSubmit={handleSubmit(e=>console.log(e))}>
            <WeekdaySelect register={register}/>
            <Button  color='blue' type='submit' className='color-black'>SUBMIT?</Button>
        </form>
        <DevTool control={control}/>
        </>
    )
}

export default ShiftForm