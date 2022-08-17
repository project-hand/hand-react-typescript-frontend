import { DayProps } from "@/types/day";
import styled from "styled-components";

const Day = ({ day, schedules }: DayProps) => {
  return (
    <StyledDayContainer>
      <StyledDaytitle>{day}</StyledDaytitle>
      {schedules.map(schedule => {
        return <StyledDaySchedule label={schedule.label} time={parseInt(schedule.end) - parseInt(schedule.start)}>{schedule.place}</StyledDaySchedule>;
      })}
    </StyledDayContainer>
  );
};

const StyledDayContainer = styled.div`
  width: 55px;
  height: 500px;
  text-align: center;
`;

const StyledDaytitle = styled.div`
  
`;

const StyledDaySchedule = styled.div<{ label: string; time: number; }>`
  color: white;
  width: 100%;
  height: ${props => props.time * 10}px;
  background-color: ${props => props.label};
  border-radius: 15px;
`;

export default Day;