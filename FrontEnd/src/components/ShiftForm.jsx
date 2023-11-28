import WeekdaySelect from './WeekdaySelect'
import {Button} from 'flowbite-react'
import TimeRange from './TimeRange'
import MultiDatePicker from './MultiSelectDate'
import DatePicker from 'react-multi-date-picker'
import {Controller} from 'react-hook-form'


const ShiftForm = ({fields})=>{
    const {handleSubmit, register, control, formState:{errors}} = fields
    return(
        <>
            {/* <WeekdaySelect register={register}/> */}
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
            <Button  color='blue' type='submit' className='color-black'>SUBMIT?</Button>
        </>
    )
}

export default ShiftForm