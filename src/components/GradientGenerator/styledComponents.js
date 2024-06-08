import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-image: linear-gradient(to ${props => props.direction}, ${props =>
    props.firstColor}, ${props => props.secondColor})
`
export const ResponsiveContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    width: 60%;
  }
`
export const Heading = styled.h1`
  font-family: 'roboto';
  font-size: 30px;
  color: #ffffff;
  font-weight: bold;
  text-align: center;
`

export const DirectionAndColor = styled.p`
  color: #ededed;
  font-family: 'roboto';
  font-size: 18px;
`

export const DirectionUl = styled.ul`
  display: flex;
  padding-left: 0px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`
export const ColorPickerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50%;
  @media screen and (min-width: 768px) {
    width: 30%;
  }
`

export const ColorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Color = styled.p`
  color: #ffffff;
  font-family: 'roboto';
  font-size: 15px;
`

export const ColorInput = styled.input`
  width: 70px;
  height: 40px;
  outline: none;
  cursor: pointer;
  border: none;
  border-style: none;
  padding: 0px;
  background-color: transparent;
  margin-top: 10px;
  @media screen and (min-width: 768px) {
    width: 100px;
    height: 50px;
  }
`

export const GenerateBtn = styled.button`
  background-color: #00c9b7;
  border-radius: 6px;
  padding: 13px 25px 13px 25px;
  font-weight: 600;
  border: none;
  margin-top: 30px;
  outline: none;
  cursor: pointer;
`
