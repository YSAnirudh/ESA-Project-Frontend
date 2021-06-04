import styled from 'styled-components';

export const TextContainer = styled.text`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: lighter;
  color: black;
  font-family: Arial, Helvetica, sans-serif;
  margin-top: -2vh;
  margin-bottom: 2vh;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 5px;
  font-size: ${(props) => props.fontSize || '1.3rem'};
  @media screen and (max-width: 650px) {
    font-size: ${(props) => props.mobFontSize || '1.7rem'};
  }
`;

export const AccountHeading = styled.h1`
  margin-top: 5vh;
  margin-bottom: 10vh;
`;

export const DetailsContainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  background: #fefefe;
  position: relative;
  border-radius: 5px;
  z-index: 2;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
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
