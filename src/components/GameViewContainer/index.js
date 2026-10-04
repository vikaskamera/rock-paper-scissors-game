import {
  GameViewsContainer,
  GameOptionList,
  GameOption,
  GameOptionButton,
  OptionImage,
  GameResultContainer,
  GameResultList,
  GameResultItem,
  GameResultImage,
  GamePlayText,
  GameStatusText,
  PlayAgainButton,
} from './styledComponents'

const GameViewContainer = props => {
  const {
    activeChoiceId,
    opponentChoiceId,
    choicesList,
    isGameStart,
    onSelectActiveImage,
    onPlayAgain,
    gameStatusMsg,
  } = props

  const getImageURLById = imageId =>
    choicesList.find(eachOption => eachOption.id === imageId).imageUrl

  const onClickPlayAgain = () => onPlayAgain()

  const renderGameResultView = () => {
    const activeImageURL = getImageURLById(activeChoiceId)
    const opponentImageURL = getImageURLById(opponentChoiceId)

    return (
      <GameResultContainer>
        <GameResultList>
          <GameResultItem>
            <GamePlayText>YOU</GamePlayText>
            <GameResultImage src={activeImageURL} alt="your choice" />
          </GameResultItem>
          <GameResultItem>
            <GamePlayText>OPPONENT</GamePlayText>
            <GameResultImage src={opponentImageURL} alt="opponent choice" />
          </GameResultItem>
        </GameResultList>
        <GameStatusText>{gameStatusMsg}</GameStatusText>
        <PlayAgainButton type="button" onClick={onClickPlayAgain}>
          PLAY AGAIN
        </PlayAgainButton>
      </GameResultContainer>
    )
  }

  const renderGameStartView = () => (
    <GameOptionList>
      {choicesList.map(eachOption => {
        const onClickSelectImage = () => onSelectActiveImage(eachOption.id)

        return (
          <GameOption key={eachOption.id}>
            <GameOptionButton
              onClick={onClickSelectImage}
              data-testid={`${eachOption.id.toLowerCase()}Button`}
            >
              <OptionImage src={eachOption.imageUrl} alt={eachOption.id} />
            </GameOptionButton>
          </GameOption>
        )
      })}
    </GameOptionList>
  )

  return (
    <GameViewsContainer>
      {isGameStart ? renderGameStartView() : renderGameResultView()}
    </GameViewsContainer>
  )
}

export default GameViewContainer
