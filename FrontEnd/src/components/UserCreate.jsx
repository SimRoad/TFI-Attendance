'use client'

import { TextInput, Label, Button, Alert } from "flowbite-react"
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
            <form className="flex container w-64 p-5 flex-wrap rounded-md flex-col gap-4 border-accent/20 border-b-2 bg-secondary/30" onSubmit={ handleSubmit(onSubmit) }>
                <div className="mb-2 block">
                    <label htmlFor="email" value="Your email">Email</label>
                    <input type="email" id="email" placeholder="name@flowbite.com" { ...register('email')} />
                    <p>{ errors.email?.message }</p>
                </div>
                <div className="mb-5">
                    <label htmlFor="password" value="Your password">Password</label>
                    <input type="password" id="password" { ...register('password') } />
                    <p>{ errors.password?.message }</p>
                </div>
                <div className="mb-5">
                    <label htmlFor="repeat-password" value="Repeat password">Confirm Password</label>
                    <input type="password" id="repeat-password" { ...register('repeatpassword') } />
                    <p>{ errors.repeatpassword && "Passwords should match!" }</p>
                </div>
                <button type="submit" className="text-text border-b-2 border-accent/20 rounded-md bg-primary">Register new account</button>
            </form>
        </>
    )
}

export default userCreate