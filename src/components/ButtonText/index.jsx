import {Container} from "./styles"

export function ButtonText({icon: Icon, href, title, ...rest}) {
  return (
    <Container to={href}>
     {Icon && <Icon size={20}/>}
     {title}
    </Container>
  )
}