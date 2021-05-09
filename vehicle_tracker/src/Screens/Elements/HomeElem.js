import styled from 'styled-components';
import {NavLink, Link} from 'react-router-dom';
export const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100vh - 60px);
  border: 3px solid black;
  box-sizing: border-box;
`;

export const DetailsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #fefefe;
  position: relative;
  width: 40%;
  height: 50vh;
  min-height: 200px;
  max-width: 300px;
  border-radius: 5px;

  @media screen and (max-width: 650px) {
    width: 100%;
    height: calc(100vh - 60px);
    max-width: 100%;
    border-radius: 0px;
  }
`;

export const TextInputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ccc;
  border-radius: 5px;
  width: 95%;
  box-sizing: border-box;
  margin: 10px 0 5px 0;
  padding: 10px 0 10px 0;
  @media screen and (max-width: 650px) {
    margin: 20px 0 10px 0;
    padding: 20px 0 20px 0;
  }
`;

export const TextContainer = styled.text`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: lighter;
  color: black;
  font-family: Arial, Helvetica, sans-serif;
  margin-top: -2vh;
  margin-bottom: 2vh;
  font-size: ${(props) => props.fontSize || '1.2rem'};
  @media screen and (max-width: 650px) {
    font-size: ${(props) => props.mobFontSize || '1.7rem'};
  }
`;

export const MapIcon = styled.div`
  margin: 0 10px 0 10px;
  opacity: 0.6;
  cursor: pointer;
`;

export const TextInput = styled.input.attrs((props) => ({
  type: 'text',
  size: props.size || '4px',
}))`
  width: 95%;
  box-sizing: border-box;
  border: 0;
  font-weight: lighter;
  color: grey;
  font-family: Arial, Helvetica, sans-serif;
  margin-left: 10px;
  background-color: #ccc;
  &:focus {
    outline: 0;
    /* border: 1px solid red; */
  }
`;

export const ButtonText = styled.text`
  font-weight: lighter;
  color: grey;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 0.8rem;
  margin-left: 10px;
  width: 20%;
  @media screen and (max-width: 650px) {
    font-size: 1.2rem;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.colorChange || '#01bf71'};
  border-radius: 5px;
  width: 95%;
  box-sizing: border-box;
  padding: 10px 0 10px 0;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-top: 20px;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #ccc;
    color: #010606;
  }
  @media screen and (max-width: 650px) {
    //font-size: 1.5rem;
    padding: 15px 0 15px 0;
  }
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

export const Button = styled.button`
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  font-size: ${(props) => props.fontSize || '16px'};
  background-color: ${(props) => props.colorChange || '#01bf71'};
  border: 0;
  font-weight: lighter;
  color: black;
  font-family: Arial, Helvetica, sans-serif;
  padding: 0 3px 0 3px;
  @media screen and (max-width: 650px) {
    font-size: ${(props) => props.mobFontSize || '20px'};
  }
`;

export const BackButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  font-size: ${(props) => props.fontSize || '16px'};
  border-radius: 5px;
  box-sizing: border-box;
  padding: 5px 0 5px 0;
  margin: 5px 0 3px 0;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #ccc;
    color: #010606;
  }
`;
