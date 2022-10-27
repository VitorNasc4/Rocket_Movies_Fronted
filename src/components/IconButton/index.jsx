import { Container } from "./styles"
export function IconButton({ icon: Icon, title, ...rest }) {

  return (
    <Container>
      {Icon && <Icon size={20}/>}
      <button {...rest}>{title}</button>
    </Container>
  )
}