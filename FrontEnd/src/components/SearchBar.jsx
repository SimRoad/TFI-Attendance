import {Controller} from 'react-hook-form'
import Select from 'react-select'
import client from '../axiosURL'

const SearchInput = ({fields,options,setOptions})=>{
    const debounce = (callback,delay)=>{
        let timer
        return (...args)=>{
            clearTimeout(timer)
            timer = setTimeout(()=>{
                callback(...args)
            },delay)
        }
    }
    const inputChange = debounce(input=>{
        if(input === '') return
        client.get(`employee/name?input=${input}`)
        .then(({data})=>setOptions(data.map(employee=>{
            return {
                value: employee.employeeID,
                label: employee.fullName
            }
        })))
    },1000)
    return(
        <Controller
            control={fields.control}
            name='seachBar'
            render={({field})=>(
                <Select 
                    {...field}
                    options={options}
                    onInputChange={inputChange}
                />
            )}
        />
    )
}

export default SearchInput