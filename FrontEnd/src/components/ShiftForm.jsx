import {Button} from 'flowbite-react'
import MultiDatePicker from './MultiSelectDate'
import {Controller} from 'react-hook-form'
import {useState} from 'react'


const ShiftForm = ({fields})=>{
    const {register, control, formState:{errors}} = fields
    const [displayDates,setDisplayDates] = useState()
    return(
        <>
        <Button.Group>
            <Button>Work</Button>
            <Button>Leaves</Button>
        </Button.Group>
            <Controller
                control={control}
                name='dates'
                render={({
                    field: {onChange, name, value},
                    formState: {errors}
                })=>(
                    <>
                    <MultiDatePicker value={value} onChange={onChange} register={register}/>
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