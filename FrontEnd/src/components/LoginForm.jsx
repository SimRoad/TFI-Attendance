import { TextInput, Label, Button } from "flowbite-react";
import { useForm } from 'react-hook-form'
import { DevTool } from '@hookform/devtools'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import client from '../axiosURL'

const loginForm = ()=>{
  const schema = yup.object().shape({
    email: yup.string().email(`Test`).required(`Test`),
    password : yup.string().matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    ).required()
  })
  const {handleSubmit, register, control, formState:{errors}} = useForm({
    resolver: yupResolver(schema)
  })
  const request = user=>{
    client.post({user})
    .then(response=>console.log(JSON.stringify(response.data)))
    .catch(error=>console.error(error))
  }
    return(
      <>

        <form className="flex max-w-md flex-col gap-4 bg-primary border-2 border-accent/20" onSubmit={handleSubmit(request)}>
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