import { Fragment } from 'react'
import Link from 'next/link'
import { getAllDocs } from 'lib/docs';

const Doc = ({ slugs }) => {
  return (
    <>
      <Link href={`/`}><a>volver</a></Link>
      { slugs.map(({ slug, meta: { description, title } }) => (
        <Fragment key={slug}>
          <Link href={`/blog/${slug}`}>
            <a>
              <h1>
                {title}
              </h1>
            </a>
          </Link>

          <p>{description}</p>
        </Fragment>
      ))}
    </>
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