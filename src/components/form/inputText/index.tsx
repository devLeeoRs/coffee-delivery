import { Container, Label } from './style'

export function Input({ ...rest }) {
  return (
    <Container active={false}>
      <Label>
        <input {...rest} />
        <span>Opcional</span>
      </Label>
    </Container>
  )
}
