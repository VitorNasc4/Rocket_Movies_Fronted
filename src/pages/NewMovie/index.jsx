import { FiArrowLeft, FiX, FiPlus } from "react-icons/fi"

import { Container } from "./styles"
import { Header } from "../../components/Header"
import { ButtonText } from "../../components/ButtonText"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { TextArea } from "../../components/TextArea"
import { Tags } from "../../components/Tags"
import { NewTags } from "../../components/NewTags"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { api } from "../../services/api"

export function NewMovie() {
  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState("")

  const [title, setTitle] = useState("")
  const [rating, setRating] = useState("")
  const [description, setDescription] = useState("")

  const navigate = useNavigate()

  function handleNewTag() {
    if (!newTag) {
      return alert("Digite algo antes de enviar")
    }

    setTags(prevState => [...prevState, newTag])
    setNewTag("")
  }

  function handleRemoveTag(deleted) {
    setTags(prevState => prevState.filter(tag => tag !== deleted))
  }

  async function handleNewMovie() {
    if (!title) {
      return alert("Preencha o título antes de salvar")
    }
    if (!rating) {
      return alert("Preencha a nota antes de salvar")
    }
    if (!description) {
      return alert("Preencha a descrição antes de salvar")
    }
    if (newTag) {
      return alert("Cadastre a tag antes de enviar")
    }

    await api.post("/movies_notes", {title, rating, description, tags})

    alert("Filme cadastrado com sucesso")

    navigate("/")
  }

  return (
    <Container>
      <Header />
      <main>
        <section className="newFilm">
          <ButtonText icon={FiArrowLeft} href={"/"} title={"Voltar"} />
          <h1>Novo filme</h1>

          <section>
            <Input placeholder={"Título"} onChange={(e) => setTitle(e.target.value)} />
            <Input placeholder={"Sua nota (de 0 a 5)"} onChange={(e) => setRating(e.target.value)} />
          </section>
          <TextArea rows={"7"} placeholder={"Observações"} onChange={(e) => setDescription(e.target.value)} />

        </section>

        <section className="tags">
          <h2>Marcadores</h2>
          <div className="Tagbackground">
            {
              tags.map((tag, index) => <Tags
                title={tag}
                icon={FiX}
                key={String(index)}
                onClick={() => handleRemoveTag(tag)}
              />)
            }
            <NewTags
              title={"Novo Marcador"}
              icon={FiPlus}
              value={newTag}
              onChange={(e) => setNewTag(e.target.value)}
              onClick={handleNewTag}
            />
          </div>
        </section>

        <section className="buttons">
          <Button title={"Exlcuir Filme"} id="buttonOne" />
          <Button title={"Salvar Alterações"} onClick={handleNewMovie}/>
        </section>
      </main>

    </Container>
  )
}