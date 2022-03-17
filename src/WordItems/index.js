import {Items, Description} from './styledComponents'

const WordItems = props => {
  const {wordDetails} = props
  const {word} = wordDetails

  return (
    <Items>
      <Description>
        {word}: {word.length}
      </Description>
    </Items>
  )
}

export default WordItems
