import { SidebarStyleProps } from "@/types/sidebarProps";
import styled from "styled-components";

const StyledSidebar = styled.div<SidebarStyleProps>`
position: fixed;
right: 0;
bottom: 15%;
display: flex;
height: 500px;
width: 140px;
transform: translateX(${props => props.xPosition}px);
transition: transform 300ms ease-out;
`;

const StyledSidebarBtnWrap = styled.div`
display: flex;
justify-content: center;
align-items: center;
`;

const StyledSidebarBtn = styled.button`
display: flex;
justify-content: center;
align-items: center;
height: 40px;
font-size: 2rem;
padding:0;
margin: 0;
background-color: #eee;
border: none;
border-top-left-radius:10px;
border-bottom-left-radius: 10px;
cursor: pointer;
`;

const StyledSidebarContent = styled.div`
background-color: #eee;
display: flex;
flex-direction: column;
align-items: center;
padding: 20px;
gap: 10px;
width: 100%;
height: 100%;
border-top-left-radius: 15px;
border-bottom-left-radius: 15px;
`;

export { StyledSidebar, StyledSidebarBtn, StyledSidebarBtnWrap, StyledSidebarContent };