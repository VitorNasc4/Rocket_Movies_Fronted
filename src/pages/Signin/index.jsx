import { FiMail, FiLock } from "react-icons/fi"

import { Link } from "react-router-dom"

import { Container, Background } from "./styles"
import { Button } from "../../components/Button"
import { Input } from "../../components/Input"

import { useAuth } from "../../hooks/auth"

import { useState } from "react"

export function Signin() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const {signIn} = useAuth()

  function handleSignIn() {
    signIn({email, password})
  }

  return (
    <Container>
      <div>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>
        <h2>Faça seu login</h2>

        <form>
          <Input placeholder={"E-mail"} icon={FiMail} onChange={e => setEmail(e.target.value)}/>
          <Input placeholder={"Senha"} icon={FiLock} type="password" onChange={e => setPassword(e.target.value)}/>
          <Button title={"Entrar"} onClick={handleSignIn}/>
        </form>

        <Link to="/register" >Criar conta</Link>
      </div>

      <Background />
    </Container>
  )
}