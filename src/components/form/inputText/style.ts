import styled from 'styled-components'

interface LabelProps {
  active: boolean
}

export const Container = styled.div<LabelProps>`
  width: 100%;
  height: 4.2rem;
  display: flex;
  align-items: center;
  border-radius: .4rem;
  padding: 0 1.2rem;
  gap: 1.2rem;
  background: ${props => props.theme['base-input']};

  border: 1px solid
    ${(props) =>
      props.active
? props.theme['yellow-dark']
: props.theme['base-input']};

  span {
    font-size: 1.2rem;
    font-family: 'Roboto';
    font-style: italic;
    color: ${props => props.theme['base-label']};
  }
`

export const Label = styled.label`
  display: flex;
  align-items: center;

  input {
    background: transparent;
    border: none;
    color: ${props => props.theme['base-text']};
    font-size: 1.4rem;
    outline: none;
    
  }


`
