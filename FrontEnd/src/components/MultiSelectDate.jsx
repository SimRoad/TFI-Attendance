import DatePicker,{DateObject} from 'react-multi-date-picker'
import DatePanel from 'react-multi-date-picker/plugins/date_panel'
import TimeRange from './TimeRange'
import Weekends from "react-multi-date-picker/plugins/highlight_weekends"
import Icon from 'react-multi-date-picker/components/icon'
import {useRef,useEffect,useState} from 'react'
import client from '../axiosURL'

const MultiDatePicker = ({onChange,value,employees,register})=>{
    const date = new DateObject()
    const nextMonth = new DateObject()
    const [shifts,setShifts] = useState()
    const [holidays,setHolidays] = useState()
    const openCalendar = useRef()
    useEffect(()=>{
        openCalendar.current.openCalendar()
        client.get('/holidays/month')
        .then(response=>setHolidays(response.data))
    },[])
    useEffect(()=>{
        client.post('shift/conflict',employees)
        .then(response=>{
            setShifts(response.data)
            console.log(response.data)
        })
    },[employees])
    return(
        <DatePicker 
            multiple
            ref={openCalendar}
            mapDays={({date,selectedDate})=>{
                const props = {}
                let holidayDates = holidays?.map(a=>(new DateObject(new Date(a.holidayDate))).format())
                let shiftDates = shifts?.map(a=>(new DateObject(new Date(a.shiftDate))).format())
                let selected = selectedDate.map(a=>a.format())
                // console.log(selected)
                // console.log(shiftDates)
                // console.log(shiftDates.some(date1 => selected.includes(date1)))
                // if(shiftDates.some(date1 => selected.includes(date1))){
                //     props.style = { backgroundColor: "#FF0000"}
                //     console.log(`bg`)
                // }
                //Problematic when it comes to identifying the specific day
                if(shiftDates?.includes(date.format())){
                    props.style = { backgroundColor: "#FFA500"}
                }
                else if (holidayDates?.includes(date.format())){
                    props.disabled = true
                    props.style = { color: "#ccc", backgroundColor: "#FFBF00" }
                }
                return props
              }}
            onChange={onChange}
            value={value}
            minDate={date.setDay(1)}
            maxDate={nextMonth.add(1,'month').add(nextMonth.daysLeft,'days')}
            plugins={[
                <DatePanel
                markFocused
                removeButton={false}
                />,
                Weekends()
            ]}
            render={<Icon/>}
        >
            <TimeRange register={register}/>
        </DatePicker>
    )
}

export default MultiDatePicker