import {Button} from 'flowbite-react'
import MultiDatePicker from './MultiSelectDate'
import {Controller} from 'react-hook-form'


const ShiftForm = ({fields,employees})=>{
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
                    <MultiDatePicker employees={employees} value={value} onChange={onChange} register={register}/>
                    {errors && errors[name] && errors[name].type === "required" && (
                        <span>your error message !</span>
                        )}
                    </>
                )}
            />
            <div className="flex items-center gap-2">
            </div>
            <Button color='blue' type='submit' className='text-black'>SUBMIT?</Button>
        </>
    )
}

export default ShiftForm