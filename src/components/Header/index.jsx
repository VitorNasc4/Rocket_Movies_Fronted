import { Container, Profile } from "./styles";
import { Input } from "../Input"

import { Link, useNavigate } from "react-router-dom";

import { useAuth } from "../../hooks/auth";

import avatarPlaceHolder from "../../assets/avatar_placeholder.svg"
import {api} from "../../services/api"

export function Header({onChange, ...rest}) {
  const {signOut, user} = useAuth()

  const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceHolder

  const navigate = useNavigate()

  function handleClick() {
    signOut()
    navigate("/")
  }
  return (
    <Container {...rest}>
      <Link to={"/"}>RocketMovies</Link>
      <Input placeholder={'Pesquisar pelo título'} onChange={onChange} />

      <Profile>
        <div>
          <Link to="/profile">{user.name}</Link>
          <a onClick={handleClick}>sair</a>
        </div>
        <img src={avatarURL} alt="Foto de perfil do usuário" />
      </Profile>
    </Container>
  )
}