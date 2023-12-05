import {Button, Dropdown, Select} from 'flowbite-react'
import MultiDatePicker from './MultiSelectDate'
import {Controller} from 'react-hook-form'
import { ImBlocked } from "react-icons/im"
import {useState,useEffect} from 'react'
import client from '../axiosURL'

const ShiftForm = ({fields,employees,cat:{category,setCategory}})=>{
    const {register, control, formState:{errors}} = fields
    const [leaves,setLeaves] = useState({})

    const switchCategory = selected =>{
        setCategory(curr=> curr !== selected ? selected : null)
    }

    useEffect(()=>{
        client.get('leaves/all',)
        .then(response=>{
            setLeaves(response.data)
            console.log(response.data)
        })
    },[])

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
                    <Button onClick={()=>switchCategory('Non-Work')} color={category === 'Non-Work' ? 'blue' : 'dark'}><ImBlocked />Non-Work</Button>
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