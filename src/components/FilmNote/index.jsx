import { AiFillStar, AiOutlineStar } from "react-icons/ai"

import { Container } from "./styles"
import { Tags } from "../Tags"

export function FilmNote({ data, ...rest }) {
  function countingStar(rating) {
    let arr = ["", "", "", "", ""]
    for (let i = 0; i <= rating - 1; i++) {
      arr[i] = "star"
    }

    return arr
  }

  return (
    <Container {...rest}>
      <article>
        <h1>
          {data.title}
        </h1>

        <div className="grade">
          {
            data.rating && countingStar(data.rating).map((item) => {
              if (item == "star") {
                return <AiFillStar />
              } else {
                return <AiOutlineStar />
              }
            })
          }
        </div>

        <p>
          {data.description}
        </p>

        {
          data.tags && (
            <footer>
              {
                data.tags.map((tag) => <Tags key={tag.id} title={tag.name} />)
              }
            </footer>
          )}
      </article>
    </Container>
  )
}