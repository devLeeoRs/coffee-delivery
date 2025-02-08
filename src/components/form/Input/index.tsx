import { useState } from 'react'
import { Container, Label } from './style'

interface FormProps {
  optional?: boolean
  placeholder?: string
  type?: string
  name: string
}

export function InputFlex(
  {
    optional,
    placeholder,
    type = 'text',
    name,
  }: FormProps) {
  const [isFocused, setIsFocused] = useState(false)

  function handleFocus() {
    setIsFocused(true)
  }

  function handleBlur() {
    setIsFocused(false)
  }

  return (
    <Container $grid={name} $active={isFocused}>
      <Label>
        <input
          id={name}
          onFocus={handleFocus}
          onBlur={handleBlur}
          name={name}
          type={type}
          placeholder={placeholder}
        />
        {optional && <span>Opcional</span>}
      </Label>
    </Container>
  )
}
