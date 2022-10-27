import { FiArrowLeft, FiCamera, FiMail, FiLock, FiUser } from "react-icons/fi"

import { Container, Avatar, Form } from "./styles"
import { ButtonText } from "../../components/ButtonText"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

import { useAuth } from "../../hooks/auth"

import { useState } from "react"
import { useNavigate } from "react-router-dom"

import avatarPlaceHolder from "../../assets/avatar_placeholder.svg"
import {api} from "../../services/api"

export function Profile() {
  const { updateProfile, user } = useAuth()

  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [password, setPassword] = useState("")
  const [old_password, setOldPassword] = useState("")

  const navigate = useNavigate()

  const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceHolder
  const [avatar, setAvatar] = useState(avatarURL)
  const [avatarFile, setAvatarFile] = useState(null)

  async function handleClick() {
    const updated = {
      name,
      email, 
      password,
      old_password 
    }

    const userUpdated = Object.assign(user, updated)
    
    await updateProfile({user: userUpdated, avatarFile})
    navigate("/")
  }

  function handleChangeAvatar(event) {
    const file = event.target.files[0]
    setAvatarFile(file)

    const imagePreview = URL.createObjectURL(file)
    setAvatar(imagePreview)
  }

  return (
    <Container>
      <div>
        <ButtonText href={"/"} title={"Voltar"} icon={FiArrowLeft} />
      </div>

      <Avatar>
        <img
          src={avatar}
          alt="Foto de usuário"
        />

        <label htmlFor="avatar">
          <FiCamera />

          <input
            id="avatar"
            type="file"
            onChange={handleChangeAvatar}
          />
        </label>
      </Avatar>

      <Form>
        <Input icon={FiUser} value={name} onChange={e => setName(e.target.value)}/>
        <Input icon={FiMail} value={email} onChange={e => setEmail(e.target.value)}/>
        <Input icon={FiLock} placeholder={"Senha atual"} onChange={e => setOldPassword(e.target.value)} type="password"/>
        <Input icon={FiLock} placeholder={"Nova senha"} onChange={e => setPassword(e.target.value)} type="password"/>
        <Button title={"Salvar"} onClick={handleClick} />

      </Form>

    </Container>
  )
}