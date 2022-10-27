import { FiMail, FiLock, FiUser, FiArrowLeft } from "react-icons/fi"

import { Container, Background } from "../Signup/styles";
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"
import { useNavigate } from "react-router-dom";

import { api } from "../../services/api"

import { useState } from "react";

export function Signup() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  
  const navigate = useNavigate()

  function handleSignup() {
    if (!name || !email || !password) {
        return alert("Preencha todos os campos")
    }

    api.post("/users", {name, email, password})
        .then(() => {
            alert("Usuário cadastrado com sucesso")
            navigate("/")
        })
        .catch(error => {
            if (error.response) {
                alert(error.response.data.message)
            } else {
                alert("Não foi possível cadastrar")
            }
        })
}   

  return (
    <Container>
      <Background />
      <div>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>
        <h2>Crie sua conta</h2>

        <form>
          <Input placeholder={"Nome"} icon={FiUser} autocomplete={"none"} onChange={e => setName(e.target.value)}/>
          <Input placeholder={"E-mail"} icon={FiMail} onChange={e => setEmail(e.target.value)}/>
          <Input placeholder={"Senha"} icon={FiLock} onChange={e => setPassword(e.target.value)} type="password" />
          <Button title={"Cadastrar"} onClick={handleSignup} />
        </form>

        <ButtonText icon={FiArrowLeft} href="/" title={"Criar conta"} />
      </div>
    </Container>
  )
}