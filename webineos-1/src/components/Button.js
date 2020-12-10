import styled from 'styled-components'
import PropTypes from "prop-types"

const Button = styled.button`
  background: ${({ isSelected }) => isSelected ? '#EEE' : '#999'};
  border: 0;
  border-right: 1px solid #EEE;
  cursor: ${({ isSelected }) => isSelected ? null : 'pointer'};
  padding: 4px 8px;
  
  ${({ isSelected }) => !isSelected && `
    &:hover {
      background: #BBB;
    }
  `};
  
  &:first-of-type {
    border-left: 1px solid #EEE;
  }
`

Button.propTypes = {
  isSelected: PropTypes.bool,
}

export default Button
