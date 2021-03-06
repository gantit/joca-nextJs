import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const docsDirectory = join(process.cwd(), 'docs')

export const getDocBySlug = (slug) => {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(docsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  return { slug: realSlug, meta: data, content }
}

export const getAllDocs = () => {
  const slugs = fs.readdirSync(docsDirectory)
  const docs = slugs
    .map((slug) => getDocBySlug(slug))
    .sort((a, b) => parseFloat(b.meta.order) - parseFloat(a.meta.order))

  return docs
}
