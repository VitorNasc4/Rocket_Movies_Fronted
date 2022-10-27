import { FiPlus } from "react-icons/fi"
import { Link } from "react-router-dom"

import { Container } from "./styles"
import { Header } from "../../components/Header"
import { FilmNote } from "../../components/FilmNote"

import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { api } from "../../services/api"

export function Home() {
  const [movies, setMovies] = useState([])
  const [search, setSearch] = useState("")
  const [tagSelected, setTagSelected] = useState("")

  useEffect(() => {
    async function fetchMovies() {
      const response = await api.get(`/movies_notes?title=${search}&tags=${tagSelected}`)
      setMovies(response.data)
    }
    fetchMovies()

  }, [search])

  return (
    <Container>
      <Header onChange={(e) => setSearch(e.target.value)} />

      <main>
        <header>
          <h1>Meus filmes</h1>
          <Link to="/new" >
            <FiPlus />
            Adicionar filme
          </Link>
        </header>

        <section>
          {
            movies.map((movie, index) => (
              <FilmNote
                key={String(index)}
                data={movie}
                to={`/preview/${movie.id}`}
              />
            ))
          }
        </section>
      </main>
    </Container>
  )
}