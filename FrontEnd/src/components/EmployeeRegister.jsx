import { useForm } from 'react-hook-form'
import { DevTool } from '@hookform/devtools'
import { yupResolver } from '@hookform/resolvers/yup'
import {Button} from 'flowbite-react'
import { employeeRegisterSchema } from '../yupSchema'
import client from '../axiosURL'
import { ProfileSection } from './employeeInputs/ProfileSection'
import { AddressPortion } from './employeeInputs/AddressPortion'
import { ContactPortion } from './employeeInputs/ContactPortion'

const EmployeeRegisterForm = ()=>{
    const {handleSubmit, register, control, formState:{errors}} = useForm({resolver: yupResolver(employeeRegisterSchema)})
    const fields = {register,control,errors}
    const submit = result=>{
        let data = result
        data.profileImage = data.profileImage[0]
        console.log(data)
        client.post('/employee/create',data,{
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then(response=>{
            console.log(response)
        })
    }
    return(
        <>
        <div className="flex justify-center items-center">
            <form onSubmit={handleSubmit(submit)}>
                <ProfileSection {...fields} />
                <AddressPortion {...fields} />
                <ContactPortion {...fields}/>
                <Button className="text-text border-b-2 border-accent/20 rounded-md bg-primary" color='default' type='submit'>Submit</Button>
            </form>
            <DevTool control={control}/>
        </div>
        </>
    )
}

export default EmployeeRegisterForm