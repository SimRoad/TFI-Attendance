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
        switch (selected) {
            case 'Non-Work':
                setCategory(category !== selected ? selected : null)
                console.log(category)
                break;
            case 'Leave':
                setCategory(category !== selected ? selected : null)
                break;
            default:
                setCategory(null)
                break;
        }
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
                    <Button.Group>
                        <Button onClick={()=>switchCategory('Non-Work')} color={category === 'Non-Work' ? 'blue' : 'dark'}><ImBlocked />Non-Work</Button>
                        <Button onClick={()=>switchCategory('Leave')} color={category === 'Leave' ? 'blue' : 'dark'}><ImBlocked />Leave</Button>
                    </Button.Group>
                    <Select disabled={category !== 'Leave'}>
                        {/* {leaves.map(leave=>{
                            
                        })} */}
                    </Select>
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