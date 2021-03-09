import Link from 'next/link'
import { getAllDocs } from 'lib/docs';

import Back from 'components/back'

const Doc = ({ slugs }) => {
  return (
    <div className="posts">
      <Back url="/" />
      <div className="posts-list">
        {slugs.map(({ slug, meta: { description, title } }) => (
          <Link href={`/blog/${slug}`} key={slug} >
            <a>
              <article key={slug}>
                <h1>
                  {title}
                </h1>

                <p>{description}</p>
              </article>
            </a>
          </Link>
        ))}
      </div>
      <style jsx>{`
        .posts {
          max-width: 1200px;
          margin: 0 auto;
        }
        .posts-list {
          max-width: 800px;
          margin: 0 auto;
        }

        article {
          padding: 1rem;
          margin-top: 1rem;
          transition: all .3s ease;
        }
        article p {
          transition: all .3s ease;
        }
        article:hover {
          border-left: 1px solid var(--primary);
        }

        article:hover h1{
          color: var(--primary);
        }
        article:hover p {
          transform: translateX(5px)
        }
        h1 a {
          color: inherit;
        }
        .posts {
          position: relative;
        }
      `}</style>

    </div>
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