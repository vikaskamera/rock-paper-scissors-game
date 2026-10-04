import styled from 'styled-components/macro'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  border: 3px solid #ffffff;
  border-radius: 12px;
  padding: 8px;
  @media screen and (min-width: 768px) {
    padding: 18px;
    width: 750px;
    align-self: center;
  }
`

export const GameTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const Title = styled.h1`
  color: #ffffff;
  font-family: 'Bree Serif';
  font-size: 24px;
  margin: 0px;
  max-width: 80px;
`

export const ScoreBgContainer = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  width: 120px;
`
export const ScoreHeading = styled.p`
  font-family: 'Bree Serif';
  font-size: 24px;
  font-weight: 500;
  margin: 0px;
`

export const Score = styled.p`
  font-family: 'Roboto';
  font-size: 32px;
  font-weight: 500;
  margin: 0px;
`
