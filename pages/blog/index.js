import Link from 'next/link'
import { getAllDocs } from 'lib/docs';

import Back from 'components/back'

const Doc = ({ slugs }) => {
  return (
    <div className="posts">
      <Back url="/" />
      <div className="posts-list">
        {slugs.map(({ slug, meta: { description, title } }) => (
          <Link href={`/blog/${slug}`} key={slug} className="option">
            <a>
              <article key={slug}>
                <div className="postsbg"><p>{title}</p></div>
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
        .postsbg {
          position: absolute;
          left: 0;
          top: 38%;
          transform: translate(-50%,-50%) rotate(0deg);
          z-index: -2;
          width: 20%;
          height: 40px;
          background: transparent;
          overflow: hidden;
          border-radius: 3px;
          transition: all .3s ease;
        }
        .postsbg p{
          position: absolute;
          left: 0;
          font-size: 2.6rem;
          top: 2px;
          word-break: break-all;
          margin: 0;
          width: 200%;
          color: var(--white);
          opacity: 0;
        }
        
        .posts-list {
          max-width: 800px;
          margin: 0 auto;
        }

        article {
          padding: 1rem;
          margin-top: 1rem;
          transition: all .3s ease;
          border-left: 1px solid transparent;
          border-right: 1px solid transparent;
          overflow: hidden;
          position: relative;
        }
        article p, article h1 {
          transition: all .3s ease;
        }
        article:hover {
          border-left-color: var(--primary);
          border-right-color: var(--primary);
        }

        article:hover h1{
          color: var(--primary);
        }
        article:hover p, article:hover h1 {
          transform: translateX(5px)
        }

        article:hover .postsbg {
          z-index: 1;
          left: 9%;
          background: var(--primary);
        }
        article:hover .postsbg p {
          opacity: 1;
          left: 10%;
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