import Link from 'next/link'
import { getAllDocs } from 'lib/docs'

import Back from 'components/back'
import ListItem from 'components/listItem'

const Doc = ({ slugs }) => {
  return (
    <div className="posts">
      <Back url="/" />
      <div className="posts-list">
        <a
          href="http://edubook.vicensvives.com/"
          className="option"
          target="_blank"
        >
          <ListItem
            title="Edubook"
            description="App para realizar actividades educativas relacionadas con los libros de vicens vives, que le permite al profesor hacer seguimiento de los alumnos"
          />
        </a>
        <a
          href="http://academia.vicensvives.com/"
          className="option"
          target="_blank"
        >
          <ListItem
            title="Academia"
            description="Realiza activiades educatiavas relacionadas con los libros de vicens vives, de una manera mas libre a tú medidaa"
          />
        </a>
        <a href="http://sitfoods.com/" className="option" target="_blank">
          <ListItem
            title="SitFoods"
            description="App para crear la carta de tu restarante o local de comida. Que te permite modificarla en cualquier momento"
          />
        </a>
        <Link href={`/portfolio/restrictions`} className="option">
          <a>
            <ListItem
              title="Restricciones en la comunidades"
              description="Una pequeña app que te muestra las restricciones en tu comunidad"
            />
          </a>
        </Link>
      </div>
      <style jsx>{`
        .posts {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
        }
        .posts-list {
          max-width: 800px;
          margin: 0 auto;
        }
      `}</style>
    </div>
  )
}

export const getStaticProps = async ({ params }) => {
  const docs = getAllDocs()
  const slugs = docs.map(({ slug, meta }) => ({ slug, meta }))

  return {
    props: {
      slugs
    }
  }
}

export default Doc
