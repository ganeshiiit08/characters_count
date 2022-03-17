import {Component} from 'react'

import {v4} from 'uuid'

import WordItems from '../WordItems'

import {
  BgContainer,
  SecondaryDiv,
  HeadingElementLeft,
  LeftBoxDiv,
  RightBoxDiv,
  HeadingElementRight,
  InputItem,
  WordsListDiv,
  ImageItem,
  ButtonItem,
} from './styledComponents'

class CharacterCounter extends Component {
  state = {
    wordsList: [],
    inputValue: '',
  }

  toAddWord = event => {
    event.preventDefault()
    const {inputValue} = this.state

    const EnteredNewWord = {
      id: v4(),
      word: inputValue,
    }
    this.setState(prevState => ({
      wordsList: [...prevState.wordsList, EnteredNewWord],
      inputValue: '',
    }))
  }

  onChangeInputValue = event => {
    this.setState({inputValue: event.target.value})
  }

  render() {
    const {wordsList, inputValue} = this.state

    return (
      <BgContainer>
        <SecondaryDiv>
          <LeftBoxDiv>
            <HeadingElementLeft>
              Count the characters like a Boss...
            </HeadingElementLeft>
            {wordsList.length === 0 ? (
              <ImageItem
                src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                alt="no user inputs"
              />
            ) : (
              <WordsListDiv>
                {wordsList.map(eachItem => (
                  <WordItems key={eachItem.id} wordDetails={eachItem} />
                ))}
              </WordsListDiv>
            )}
          </LeftBoxDiv>
          <RightBoxDiv>
            <HeadingElementRight>Character Counter</HeadingElementRight>
            <form onSubmit={this.toAddWord}>
              <InputItem
                type="text"
                id="word"
                value={inputValue}
                placeholder="Enter the characters here"
                onChange={this.onChangeInputValue}
              />
              <ButtonItem type="submit">Add</ButtonItem>
            </form>
          </RightBoxDiv>
        </SecondaryDiv>
      </BgContainer>
    )
  }
}

export default CharacterCounter
