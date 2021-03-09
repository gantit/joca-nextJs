import Layout from 'components/layout';
import { getAllDocs, getDocBySlug } from 'lib/docs';
import markdownToHtml from 'lib/markdown';

const Doc = ({ meta, content }) => (
  <Layout meta={meta}>{content}</Layout>
)

export const getStaticProps = async ({ params }) => {
  const doc = getDocBySlug(params.slug);
  const content = await markdownToHtml(doc.content || '');

  return {
    props: {
      ...doc,
      content
    }
  };
}

export const getStaticPaths = async () => {
  const docs = getAllDocs();

  return {
    paths: docs.map((doc) => {
      return {
        params: {
          slug: doc.slug
        }
      };
    }),
    fallback: false
  };
}

export default Doc