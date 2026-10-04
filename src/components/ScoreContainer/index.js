import {
  Container,
  GameTitleContainer,
  Title,
  ScoreBgContainer,
  ScoreHeading,
  Score,
} from './styledComponents'

const ScoreContainer = props => {
  const {score} = props
  return (
    <Container>
      <GameTitleContainer>
        <Title>ROCK PAPER SCISSORS</Title>
      </GameTitleContainer>
      <ScoreBgContainer>
        <ScoreHeading>Score</ScoreHeading>
        <Score>{score}</Score>
      </ScoreBgContainer>
    </Container>
  )
}

export default ScoreContainer
