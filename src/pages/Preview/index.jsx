import { FiArrowLeft, FiClock } from "react-icons/fi"
import { AiFillStar, AiOutlineStar } from "react-icons/ai"

import { Container } from "./styles"
import { Header } from "../../components/Header"
import { ButtonText } from "../../components/ButtonText"
import { Button } from "../../components/Button"
import { Tags } from "../../components/Tags"

import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { api } from "../../services/api"
import { useAuth } from "../../hooks/auth";


import avatarPlaceHolder from "../../assets/avatar_placeholder.svg"

export function Preview() {
  const params = useParams()

  const [data, setData] = useState("")
  const [grade, setGrade] = useState("")

  const {user} = useAuth()
 
  const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceHolder

  const navigate = useNavigate()

  function countingStar(grade) {
    let arr = ["","","","",""]
    for (let i = 0; i <= grade - 1; i++) {
      arr[i] = "star"
    }

    return arr
  }

  async function handleDeleteMovie() {
    await api.delete(`/movies_notes/${params.id}`)

    alert("Filme excluído com sucesso")
    navigate("/")
  }

  useEffect(() => {
    async function fetchMovie() {
      const response = await api.get(`/movies_notes/${params.id}`)
      setData(response.data)
      setGrade(response.data.rating)
    }

    fetchMovie()
  }, [])
  
  return (
    <Container>
      <Header />
      <main>
        <header>
          <ButtonText icon={FiArrowLeft} href={"/"} title={"Voltar"} />
          <div className="title">
            <h1>{data.title}</h1>
            {
              grade && countingStar(grade).map((item, index) => {
                if (item == "star") {
                  return <AiFillStar key={String(index)}/>
                } else {
                  return <AiOutlineStar key={String(index)}/>
                }
              })
            }
          </div>

          <footer>
            <img src={avatarURL} alt="Foto de perfil" />
            <p>{`Por ${user.name}`} </p>
            <FiClock />
            <p>{data.updated_at}</p>
          </footer>
        </header>

        <section>
          <div className="tags">
            {
              data && data.movie_tags.map((tag) => <Tags title={tag.name} key={tag.id} />)
            }
            
          </div>
          <p>{data.description}</p>
          
        </section>

        <footer>
          <Button title={"Exluir filme"} onClick={handleDeleteMovie}/>
        </footer>
        
      </main>
    </Container>
  )
}