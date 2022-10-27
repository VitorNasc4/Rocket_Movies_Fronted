import { Container } from "./styles"

export function Tags({ title, icon: Icon, onClick, ...rest }) {
  return (
    <Container {...rest}>
      {title}
      <button onClick={onClick}>
        {Icon && <Icon size={12} />}
      </button>
    </Container>
  )
}