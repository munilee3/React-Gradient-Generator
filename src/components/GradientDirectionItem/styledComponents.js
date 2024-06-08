import styled from 'styled-components'

export const DirectionItem = styled.li`
  list-style: none;
  margin-right: 8px;
  margin-bottom: 10px;
  width: 45%;
  @media screen and (min-width: 768px) {
    width: 100px;
  }
`

export const DirectionBtn = styled.button`
  background-color: #ffffff;
  font-family: 'roboto';
  font-size: 14px;
  border: none;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
  padding: 10px 30px 10px 30px;
  font-weight: 600;
  opacity: ${props => (props.isTrue ? 1 : 0.5)};
  width: 100%;
`
