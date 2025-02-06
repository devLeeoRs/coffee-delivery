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
  return (
    <Container grid={name} active={false}>
      <Label>
        <input name={name} type={type} id="" placeholder={placeholder} />
        {optional && <span>Opcional</span>}
      </Label>
    </Container>
  )
}
