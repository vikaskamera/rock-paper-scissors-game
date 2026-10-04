import styled from 'styled-components/macro'

export const GameViewsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 550px;
  align-self: center;
  @media screen and (min-width: 768px) {
    height: 650px;
    width: 600px;
  }
`

export const GameOptionList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding-left: 0px;
  max-width: 550px;
`

export const GameOption = styled.li`
  list-style-type: none;
`

export const GameOptionButton = styled.button`
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
`

export const OptionImage = styled.img`
  width: 140px;
  height: 140px;
  @media screen and (min-width: 768px) {
    width: 180px;
    height: 180px;
  }
`

export const GameResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`

export const GameResultList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding-left: 0px;
  width: 100%;
`

export const GameResultItem = styled.li`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const GamePlayText = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 700;
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 28px;
  }
`

export const GameResultImage = styled.img`
  width: 120px;
  height: 120px;
  @media screen and (min-width: 768px) {
    width: 180px;
    height: 180px;
  }
`

export const GameStatusText = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 28px;
  font-weight: 500;
`

export const PlayAgainButton = styled.button`
  background-color: #ffffff;
  color: #000000;
  font-family: 'Bree Serif';
  font-size: 14px;
  border: none;
  border-radius: 8px;
  outline: none;
  cursor: pointer;
  width: 180px;
  height: 45px;
`
