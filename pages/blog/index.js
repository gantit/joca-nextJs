import Link from 'next/link'
import { getAllDocs } from 'lib/docs';

import Back from 'components/back'
import ListItem from 'components/listItem'

const Doc = ({ slugs }) => {

  return (
    <div className="posts">
      <Back url="/" />
      <div className="posts-list">
        {slugs.map(({ slug, meta: { description, title } }) => (
          <Link href={`/blog/${slug}`} key={slug} className="option">
            <a>
              <ListItem title={title} description={description} />
            </a>
          </Link>
        ))}
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

    </div >
  )
}

export const getStaticProps = async ({ params }) => {
  const docs = getAllDocs();
  const slugs = docs.map(({ slug, meta }) => ({ slug, meta }))

  return {
    props: {
      slugs
    }
  };
}


export default Doc