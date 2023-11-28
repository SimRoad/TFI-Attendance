import DatePicker,{DateObject} from 'react-multi-date-picker'

const MultiDatePicker = ({value,onChange})=>{
    const date = new DateObject()
    const nextMonth = new DateObject()
    return(
        <DatePicker 
            multiple
            value={value}
            onChange={onChange}
            minDate={date.setDay(1)}
            maxDate={nextMonth.add(1,'month').add(nextMonth.daysLeft,'days')}
        />
    )
}

export default MultiDatePicker