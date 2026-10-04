import {Component} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'

import ScoreContainer from '../ScoreContainer'
import GameViewContainer from '../GameViewContainer'

import {
  AppContainer,
  RulesButton,
  PopupContainer,
  PopupCloseButton,
  RulesImageContainer,
  RulesImage,
} from './styledComponents'

class GameContainer extends Component {
  state = {
    score: 0,
    isGameStart: true,
    activeChoiceId: '',
    opponentChoiceId: '',
    gameStatusMsg: '',
  }

  componentDidMount() {
    this.onPlayAgain()
  }

  onPlayAgain = () => {
    const {choicesList} = this.props
    this.setState({
      opponentChoiceId: choicesList[Math.floor(Math.random() * 3)].id,
      isGameStart: true,
    })
  }

  onSelectActiveImage = imageId => {
    const optionsConstants = ['ROCK', 'PAPER', 'SCISSORS']
    const {opponentChoiceId} = this.state

    if (imageId === opponentChoiceId) {
      this.setState({
        activeChoiceId: imageId,
        isGameStart: false,
        gameStatusMsg: 'IT IS DRAW',
      })
    } else if (
      (imageId === optionsConstants[0] &&
        opponentChoiceId === optionsConstants[2]) ||
      (imageId === optionsConstants[1] &&
        opponentChoiceId === optionsConstants[0]) ||
      (imageId === optionsConstants[2] &&
        opponentChoiceId === optionsConstants[1])
    ) {
      this.setState(prevState => ({
        activeChoiceId: imageId,
        isGameStart: false,
        gameStatusMsg: 'YOU WON',
        score: prevState.score + 1,
      }))
    } else {
      this.setState(prevState => ({
        activeChoiceId: imageId,
        isGameStart: false,
        gameStatusMsg: 'YOU LOSE',
        score: prevState.score - 1,
      }))
    }
  }

  render() {
    const {choicesList} = this.props
    const {
      score,
      activeChoiceId,
      opponentChoiceId,
      isGameStart,
      gameStatusMsg,
    } = this.state

    return (
      <AppContainer>
        <ScoreContainer score={score} />
        <GameViewContainer
          activeChoiceId={activeChoiceId}
          opponentChoiceId={opponentChoiceId}
          choicesList={choicesList}
          isGameStart={isGameStart}
          onPlayAgain={this.onPlayAgain}
          onSelectActiveImage={this.onSelectActiveImage}
          onAddScore={this.onAddScore}
          gameStatusMsg={gameStatusMsg}
        />
        <Popup modal trigger={<RulesButton>RULES</RulesButton>}>
          {close => (
            <PopupContainer>
              <PopupCloseButton onClick={() => close()}>
                <RiCloseLine size={21} />
              </PopupCloseButton>
              <RulesImageContainer>
                <RulesImage
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                  alt="rules image"
                />
              </RulesImageContainer>
            </PopupContainer>
          )}
        </Popup>
      </AppContainer>
    )
  }
}

export default GameContainer
