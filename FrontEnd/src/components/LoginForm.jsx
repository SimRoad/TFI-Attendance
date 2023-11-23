import { TextInput, Label, Button } from "flowbite-react";
import { useForm } from 'react-hook-form'
import { DevTool } from '@hookform/devtools'
import axios from 'axios'

const loginForm = ()=>{
  const {handleSubmit, register, control} = useForm()
  const request = data=>{
    axios.get('http://127.0.0.1:8080/user/all').then(response=>console.log(response))
  }
    return(
      <>

        <form className="flex max-w-md flex-col gap-4" onSubmit={handleSubmit(request)}>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email1" value="Your email" />
        </div>
        <TextInput id="email1" type="email" placeholder="name@flowbite.com" {...register('email')} required />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password1" value="Your password" />
        </div>
        <TextInput id="password1" type="password" {...register('password')} required />
      </div>
      <div className="flex items-center gap-2">
      </div>
      <Button type="submit">Submit</Button>
    </form>
    <DevTool control = {control}/>
    </>
    )
}

export default loginForm