import {Component} from 'react'
import GradientDirectionItem from '../GradientDirectionItem'
import {
  AppContainer,
  ResponsiveContainer,
  Heading,
  DirectionAndColor,
  DirectionUl,
  ColorPickerContainer,
  ColorContainer,
  Color,
  ColorInput,
  GenerateBtn,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

class GradientGenerator extends Component {
  state = {
    activeDirectionInput: gradientDirectionsList[0].value,
    firstColorInput: '#8ae323',
    secondColorInput: '#014f7b',
    activeDirection: gradientDirectionsList[0].value,
    firstColor: '#8ae323',
    secondColor: '#014f7b',
  }

  firstColorChange = event => {
    this.setState({firstColorInput: event.target.value})
  }

  secondColorChange = event => {
    this.setState({secondColorInput: event.target.value})
  }

  changeDirection = value => {
    this.setState({activeDirectionInput: value})
  }

  onGenerateGradient = () => {
    const {firstColorInput, secondColorInput, activeDirectionInput} = this.state
    this.setState({
      firstColor: firstColorInput,
      secondColor: secondColorInput,
      activeDirection: activeDirectionInput,
    })
  }

  render() {
    const {
      firstColor,
      secondColor,
      activeDirection,
      firstColorInput,
      secondColorInput,
      activeDirectionInput,
    } = this.state
    return (
      <AppContainer
        direction={activeDirection}
        firstColor={firstColor}
        secondColor={secondColor}
        data-testid="gradientGenerator"
      >
        <ResponsiveContainer>
          <Heading>Generate a CSS Color Gradient</Heading>
          <DirectionAndColor>Choose Direction</DirectionAndColor>
          <DirectionUl>
            {gradientDirectionsList.map(eachDirection => (
              <GradientDirectionItem
                key={eachDirection.directionId}
                directionDetails={eachDirection}
                changeDirection={this.changeDirection}
                activeTab={activeDirectionInput}
              />
            ))}
          </DirectionUl>
          <DirectionAndColor>Pick the Colors</DirectionAndColor>
          <ColorPickerContainer>
            <ColorContainer>
              <Color>{firstColorInput}</Color>
              <ColorInput
                type="color"
                onChange={this.firstColorChange}
                value={firstColorInput}
              />
            </ColorContainer>
            <ColorContainer>
              <Color>{secondColorInput}</Color>
              <ColorInput
                type="color"
                onChange={this.secondColorChange}
                value={secondColorInput}
              />
            </ColorContainer>
          </ColorPickerContainer>
          <GenerateBtn onClick={this.onGenerateGradient}>Generate</GenerateBtn>
        </ResponsiveContainer>
      </AppContainer>
    )
  }
}

export default GradientGenerator
