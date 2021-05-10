import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

export const UserInput = styled.div`
  border: 1px solid black;
`;

export const ButtonWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.colorChange || '#fff'};
  border-radius: 2px;
  width: 35px;
  height: 35px;
  box-sizing: border-box;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  border-radius: 3px;
  border: 2px solid;
  border-color: rgba(0, 0, 0, 0.3);
  margin: calc(-100vh + 120px) 0 0 calc(100vw - 55px);
  color: #000000;
  z-index: 999;

  &:hover {
    transition: all 0.2s ease-in-out;
    background-color: #f5f5f5;
  }
  /* @media screen and (max-width: 650px) {
    //font-size: 1.5rem;
    padding: 15px 0 15px 0;
  } */
`;

export const ButtonRoute = styled(NavLink)`
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  font-size: ${(props) => props.fontSize || '16px'};
  border: 0;
  font-weight: lighter;
  color: black;
  font-family: Arial, Helvetica, sans-serif;
  padding: 0 3px 0 3px;
  @media screen and (max-width: 650px) {
    font-size: ${(props) => props.mobFontSize || '20px'};
  }
`;

export const MapElements = styled.div`
  position: absolute;
  width: 100%;
  z-index: 1;
`;
