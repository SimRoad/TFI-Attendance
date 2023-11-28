import DatePicker from 'react-multi-date-picker'

const MultiDatePicker = ({value,onChange})=>{
    return(
        <DatePicker 
            multiple
            value={value}
            onChange={onChange}
        />
    )
}

export default MultiDatePicker