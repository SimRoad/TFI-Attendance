'use client'

import { TextInput, Label, Button, Select } from "flowbite-react"
import { useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup"
import { userSchema } from '../yupSchema'
import client from '../axiosURL'
import { SessionContext } from "../session/SessionProvider"
import { useNavigate } from "react-router-dom"

const userCreate = () => {

    const { register, handleSubmit, formState: {errors} } = useForm({
        resolver: yupResolver( userSchema ),
    })

    const onSubmit = (data) => {
        console.log('Registration Sent', data)
    }

    return(
        <>
            <div className="flex justify-center items-center">
                <form className="flex max-w-md flex-col gap-4" onSubmit={ handleSubmit(onSubmit) }>
                    <div className="mb-2 block">
                        <Label htmlFor="email" value="Your email">Email</Label>
                        <TextInput 
                            type="email" 
                            id="email" 
                            placeholder="name@flowbite.com" 
                            { ...register('email') } 
                            color={ errors.email ? 'failure' : '' } 
                            helperText={ <>{ errors.email ? errors.email.message : ''}</> }
                        />
                    </div>
                    <div className="mb-2 block">
                        <Label htmlFor="password" value="Your password">Password</Label>
                        <TextInput 
                            type="password" 
                            id="password" 
                            { ...register('password') } 
                            color={ errors.password ? 'failure' : '' } 
                            helperText={ <>{ errors.password ? errors.password.message : ''}</> }
                        />
                    </div>
                    <div className="mb-2 block">
                        <Label htmlFor="repeat-password" value="Repeat password" />
                        <TextInput 
                            id="repeat-password" 
                            type="password" 
                            { ...register('repeatpassword') } 
                            color={ errors.repeatpassword ? 'failure' : '' } 
                            helperText={ <>{ errors.repeatpassword ? errors.repeatpassword.message : ''}</> }
                        />
                    </div>
                    <div className="max-w-md">
                        <Label htmlFor="positions" value="Position" />
                        <Select id="positions" required>
                            <option className='color-gray-500'>---</option>
                            <option>Admin</option>
                            <option>Management</option>
                            <option>Suspended</option>
                        </Select>
                    </div>
                    <Button type="submit" className="text-text border-b-2 border-accent/20 rounded-md bg-primary">
                        Register new account
                    </Button>
                </form>
            </div>
        </>
    )
}

export default userCreate