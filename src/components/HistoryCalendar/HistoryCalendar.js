import styled from 'styled-components';
import { useState, useEffect} from 'react';
import Calendar from 'react-calendar';
import  'react-calendar/dist/Calendar.css'
import ServiceToday from '../../services/Today';
import dayjs from 'dayjs';

export default function HistoryCalendar(){
    const [calendarValue, setCalendarValue] = useState(new Date());
    const [habitsHistory, setHabitsHistory] = useState([]);
    
      useEffect(() => {
        const req = ServiceToday.HistoryHabitToday();
        req.then(res => {
            setHabitsHistory(res.data);
        });
      }, []);
      

    return(
        <>
            <Banner>
                <h1>Histórico</h1>
            </Banner>
            <Container>
                <Calendar className="my-calendar"
                value={calendarValue}
                onChange={setCalendarValue}
                formatDay={(locale, date) => {
                const day = dayjs(date).format('DD');
                const habitHistory = habitsHistory.find((h) => h.day === dayjs(date).format('DD/MM/YYYY'));
                if (habitHistory) {
                    const doneHabits = habitHistory.habits.filter((h) => h.done);
                    if (doneHabits.length === habitHistory.habits.length) {
                    return <div style={{ backgroundColor: '#8CC654', borderRadius: '10px', height: '25px',  lineHeight: '25px', fontWeight: '500' }} >{day}</div>;
                    }
                    if (doneHabits.length < habitHistory.habits.length) {
                    return <div style={{ backgroundColor: '#EA5766', borderRadius: '5px',  height: '25px',  lineHeight: '25px', fontWeight: '500'   }}>{day}</div>;
                    }
                }
                return <div>{day}</div>;
                }}
                />
            </Container>
        </>
    )
}

const Banner = styled.div`
@media (max-width: 767px){
    width:100%;
    font-family:'Lexend Deca', sans-serif;
    padding-left:20px;
    padding-right:20%;

    h1{
        color:#126BA5;
        font-size:35px;
        font-weight:500;
    }
}
`
const Container = styled.div`
@media (max-width: 767px){
    width:100%;
    height:70vh;
    display:flex;
    align-items:center;
    justify-content:center;

    .my-calendar {
    border-radius: 10px;
    height: 75%;
    border:none; 
    }
}
`