import { DayProps } from "@/types/day";
import styled from "styled-components";

const Day = ({ day, schedules }: DayProps) => {
  return (
    <StyledDayContainer>
      <StyledDaytitle>{day}</StyledDaytitle>
      {schedules.map(schedule => {
        return <StyledDaySchedule label={schedule.label}>{schedule.place}</StyledDaySchedule>;
      })}
    </StyledDayContainer>
  );
};

const StyledDayContainer = styled.div`
  width: 55px;
  height: 120px;
  text-align: center;
`;

const StyledDaytitle = styled.div`
  
`;

const StyledDaySchedule = styled.div<{ label: string; }>`
  color: white;
  background-color: ${props => props.label};
`;

export default Day;