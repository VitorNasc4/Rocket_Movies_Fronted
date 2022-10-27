import { Container } from "./styles"

export function NewTags({ title, icon: Icon, onClick, value, onChange, ...rest }) {
  return (
    <Container {...rest}>
      <input type="text" placeholder={title} value={value} onChange={onChange}/>
      <button onClick={onClick}>
        {Icon && <Icon size={12} />}
      </button>
    </Container>
  )
}