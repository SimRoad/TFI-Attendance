import {Button, Select} from 'flowbite-react'
import MultiDatePicker from './MultiSelectDate'
import {Controller} from 'react-hook-form'

const ShiftForm = ({fields,employees})=>{
    const {register, control, formState:{errors}} = fields

    return(
        <>
            <Button color='blue' type='submit' className='text-black'>SUBMIT?</Button>
            <Controller
                control={control}
                name='dates'
                render={({
                    field: {onChange, name, value},
                    formState: {errors}
                })=>(
                    <>
                    <MultiDatePicker employees={employees} value={value} onChange={onChange} register={register}/>
                    {errors && errors[name] && errors[name].type === "required" && (
                        <span>your error message !</span>
                        )}
                    </>
                )}
            />
            
        </>
    )
}

export default ShiftForm