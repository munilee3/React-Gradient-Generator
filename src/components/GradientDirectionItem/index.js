import {DirectionItem, DirectionBtn} from './styledComponents'

const GradientDirectionItem = props => {
  const {directionDetails, changeDirection, activeTab} = props
  const {value, displayText} = directionDetails
  const onClickDirection = () => changeDirection(value)
  const isTrue = activeTab === value
  return (
    <DirectionItem>
      <DirectionBtn onClick={onClickDirection} isTrue={isTrue}>
        {displayText}
      </DirectionBtn>
    </DirectionItem>
  )
}

export default GradientDirectionItem
