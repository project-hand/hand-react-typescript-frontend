import { DAY } from "@/types/day";
import styled from "styled-components";
import Day from "../Day/Day";

const WeekCalendar = ({ schedule }) => {
  const dayArray = Object.keys(DAY);

  return (
    <StyledWeekCalendarContainer>
      {dayArray.map(today => {
        const daySchedules = schedule.filter(({ day }) => day === today);
        return <Day day={today} schedules={daySchedules} />;
      })}
    </StyledWeekCalendarContainer>
  );
};

const StyledWeekCalendarContainer = styled.div`
  display: flex;
  background-color: white;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 150px;
  border-radius: 20px;
`;



export default WeekCalendar;