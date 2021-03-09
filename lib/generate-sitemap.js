const fs = require('fs');

const globby = require('globby');
const prettier = require('prettier');
const { join } = require('path');
const matter = require('gray-matter');

const docsDirectory = join(process.cwd(), 'docs');



(async () => {
  const getDocBySlug = (slug) => {
    const realSlug = slug.replace(/\.md$/, '');
    const fullPath = join(docsDirectory, `${realSlug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return { slug: realSlug, meta: data, content };
  }

  const getAllDocs = () => {
    const slugs = fs.readdirSync(docsDirectory);
    const docs = slugs.map((slug) => getDocBySlug(slug));

    return docs;
  }
  const prettierConfig = await prettier.resolveConfig('./.prettierrc');

  const pages = await globby([
    'pages/**/*{.js,.mdx}',
    '!pages/_*.js',
    '!pages/api'
  ]);
  const sitemap = `
        <?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${pages
      .map((page) => {
        const path = page
          .replace('pages', '')
          .replace('.js', '')
          .replace('.mdx', '');
        const route = path === '/blog/index' ? '' : path;

        if (!route) {
          return null;
        }

        if (route === '/index') {
          return `
            <url>
              <loc>https://joca.dev</loc>
            </url>
            
            <url>
              <loc>https://joca.dev/blog</loc>
            </url>
          `;
        }


        if (route === '/blog/[slug]') {
          const docs = getAllDocs();
          const slugs = docs.map(({ slug }) => (`
            <url>
              <loc>https://joca.dev/blog/${slug}</loc>
            </url>
          `))

          return slugs.toString().replace(/,/g, '');
        }

        return `
          <url>
            <loc>${`https://joca.dev${route}`}</loc>
          </url>
        `;
      })
      .join('')}
        </urlset>
    `;

  // If you're not using Prettier, you can remove this.
  const formatted = prettier.format(sitemap, {
    ...prettierConfig,
    parser: 'html'
  });

  fs.writeFileSync('public/sitemap.xml', formatted);
})();