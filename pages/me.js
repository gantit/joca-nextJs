import Link from 'next/link'
import Image from 'next/image'
import Hability from 'components/hability'
import Expreience from 'components/experience'
import Head from 'components/head'

import Chating from 'assets/img/chating'

const Me = ({ t }) => (
  <>
    <Head title={t.titleSeo} description={t.descriptionSeo} />
    <div className="me">
      <section className="header">
        <div className="me">
          <Image
            src="/img/avatar.png"
            alt="Johnny C. Avatar"
            width={200}
            height={200}
            className="photo"
            layout="fixed"
          />
        </div>

        <h1>Frontend Developer</h1>
        <h2>{t.description}</h2>
        {/*
          cuando tiempo de
          porque
        */}
      </section>
      <section className="chat">
        <div className="bar"></div>

        <div className="text">
          <h3>{t.thats_me}</h3>
          <p>
            {t.today_work}
            <a target="_blank" href="https://www.vicensvives.com/">
              Vicens Vives
            </a>
          </p>
          <p>
            {t.colaborate_1} <strong>{t.colaborate_2}</strong> {t.colaborate_3}
          </p>
          <p>
            {t.all_my_projects}
            <a target="_blank" href="https://github.com/gantit">
              @gantit
            </a>
          </p>
          <p>
            {t.blog} <Link href="/blog">blog</Link>
          </p>
          <p>
            {t.talk_to} <strong>React, Node, JavaScript, NextJs</strong>
          </p>
          <p>
            {t.contact_me}
            <a href="mailto:me@joca.dev">
              <strong>me@joca.dev</strong>
            </a>
          </p>
        </div>
        <Chating />
      </section>

      <section className="details">
        <div className="experience">
          <h2>{t.exprerience_title}</h2>
          <div className="content">
            <Expreience
              title="Javascript Developer"
              company="Vicens Vives Digital"
              date={t.vv_date}
            >
              <p>
                {t.vv_description}{' '}
                <a href="https://edubook.vicensvives.com/">
                  edubook.vicensvives.com
                </a>
              </p>
              <p>
                {t.vv_description_academy}{' '}
                <a href="https://academia.vicensvives.com">
                  academia.vicensvives.com
                </a>
              </p>
            </Expreience>
            <Expreience
              title="Front-End Developer"
              company="Innofis|CREALOGIX"
              date={t.inn_date}
            >
              <p>
                {t.inn_description_1} <a href="https://danone.es/">danone.es</a>
                {t.inn_description_2}
              </p>
            </Expreience>
          </div>
        </div>

        <div className="hability">
          <h2>{t.skills}</h2>
          <div className="content">
            <Hability
              title="Frontend"
              habilities={[
                'Angular',
                'css',
                'ES6',
                'Eslint',
                'html',
                'ionic',
                'js',
                'Prettier',
                'ReactJs',
                'redux',
                'sass',
                'webpack'
              ]}
            />
            <Hability
              title="Backend"
              habilities={[
                'ES6',
                'Firebase',
                'MongoDB',
                'NextJs',
                'Node',
                'REST'
              ]}
            />
            <Hability
              title="Testing"
              habilities={[
                'chai',
                'cypress',
                'enzyme',
                'Jest',
                'Mocha',
                'React Testing library'
              ]}
            />
            <Hability
              title="Agile"
              habilities={['Kanban', 'Scrum', 'Jira', 'TDD', 'Mentoring']}
            />
          </div>
        </div>
      </section>
      <style jsx>{`
        .header {
          align-items: center;
          display: flex;
          flex-direction: column;
          margin-bottom: 30px;
          margin: 0 auto;
          max-width: 1200px;
          position: relative;
          text-align: center;
        }

        .header .me > :global(div):nth-child(1) {
          margin: 50px auto 20px;
          border: 3px solid;
          border-radius: 10px;
          transition: all 0.3 ease;
        }
        .header > h2 {
          text-shadow: 1px 1px var(--white);
        }

        .chat {
          align-items: start;
          display: flex;
          justify-content: center;
          margin-bottom: 10rem;
          margin-top: -15rem;
          overflow: hidden;
          padding-top: 25rem;
          position: relative;
        }
        .chat .bar {
          background-image: linear-gradient(
            50deg,
            var(--secondary),
            var(--secondaryGrad) 63%,
            var(--secondaryGrad2)
          );
          height: 440px;
          left: 50%;
          margin-bottom: 100px;
          position: absolute;
          top: 70%;
          transform: translate(-50%, -50%) rotate(8deg);
          width: 200%;
          z-index: -1;
        }
        .chat .text {
          border-radius: 5px;
          box-shadow: 0 3px 1px -2px rgb(0 0 0 / 20%),
            0 2px 2px 0 rgb(0 0 0 / 14%), 0 1px 5px 0 rgb(0 0 0 / 12%);
          margin: 10px;
          max-width: 450px;
          padding: 20px;
          background: var(--white);
        }

        .chat .text a,
        .chat .text a:visited {
          text-decoration: underline;
        }
        .chat .text a:hover {
          color: var(--primary);
          text-decoration: underline dotted;
        }

        .chat .text h3 {
          margin-bottom: 2rem;
        }

        .chat p {
          line-height: 2rem;
          margin-bottom: 2rem;
        }
        .chat :global(svg) {
          max-width: 500px;
          min-width: 200px;
        }
        @media (max-width: 700px) {
          .chat :global(svg) {
            display: none;
          }
        }
        .details {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
        }
        @media (max-width: 1024px) {
          .details {
            display: block;
          }
        }

        .details h2 {
          margin-bottom: 2rem;
        }

        .details .content {
          border-radius: 5px;
          box-shadow: 0 3px 1px -2px rgb(0 0 0 / 20%),
            0 2px 2px 0 rgb(0 0 0 / 14%), 0 1px 5px 0 rgb(0 0 0 / 12%);
          margin: 10px 0;
          max-width: 450px;
          padding: 20px;
          background: var(--white);
        }
        .details .experience .content {
          max-width: 700px;
          overflow: hidden;
        }

        @media (max-width: 1024px) {
          .details h2 {
            text-align: center;
          }
          .details .content {
            margin: 0 auto;
          }
        }
      `}</style>
    </div>
  </>
)

export async function getStaticProps({ locale = 'es', ...props }) {
  const response = await import(`../locales/${locale}.json`)
  const locales = response.default.me

  return { props: { t: locales } }
}

export default Me
