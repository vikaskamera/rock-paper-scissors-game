import styled from 'styled-components/macro'

export const AppContainer = styled.div`
  background-color: #223a5f;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 18px;
  @media screen and (min-width: 768px) {
    padding-top: 48px;
  }
`

export const RulesButton = styled.button`
  background-color: #ffffff;
  color: #000000;
  font-family: 'Bree Serif';
  font-size: 14px;
  font-weight: 500;
  width: 120px;
  height: 35px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  align-self: flex-end;
`

export const PopupContainer = styled.div`
  background: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 350px;
  height: 350px;
  border-radius: 8px;
  padding: 8px;
  @media screen and (min-width: 768px) {
    width: 550px;
    height: 500px;
  }
`

export const PopupCloseButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cusor: pointer;
  outline: none;
  border: 1px solid #223a5f;
  border-radius: 50%;
  padding: 0px;
  align-self: flex-end;
`

export const RulesImage = styled.img`
  width: 100%;
  padding: 12px;
  @media screen and (min-width: 768px) {
    padding: 18px;
  }
`
