import {Button} from 'flowbite-react'
import TimeRange from './TimeRange'
import MultiDatePicker from './MultiSelectDate'
import {Controller} from 'react-hook-form'
import { Calendar } from 'react-multi-date-picker'


const ShiftForm = ({fields})=>{
    const {register, control, formState:{errors}} = fields
    return(
        <>
            <Controller
                control={control}
                name='dates'
                render={({
                    field: {onChange, name, value},
                    formState: {errors}
                })=>(
                    <>
                    <MultiDatePicker value={value} onChange={onChange}/>
                    {errors && errors[name] && errors[name].type === "required" && (
                        //if you want to show an error message
                        <span>your error message !</span>
                        )}
                    </>
                )}
            />
            <TimeRange register={register} />
            <Button color='blue' type='submit' className='text-black'>SUBMIT?</Button>
        </>
    )
}

export default ShiftForm