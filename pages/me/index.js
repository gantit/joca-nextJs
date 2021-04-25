import Link from 'next/link'
import Image from 'next/image'
import Hability from 'components/hability'
import Expreience from 'components/experience'
import Head from 'components/head'

import Chating from 'assets/img/chating'

const Me = () => (
  <>
    <Head
      title="Johnny C. desarrollador web"
      description="Información personal sobre mi trayectoria como desarrollador web"
    />
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
        <h2>Padre de dos jedis, entusiasta de las nuevas tecnologías.</h2>

        {/* 
          cuando tiempo de
          porque 
        */}
      </section>
      <section className="chat">
        <div className="bar"></div>

        <div className="text">
          <h3>Un poco sobre mí</h3>
          <p>
            🔭 Actualmente trabajo para{' '}
            <a target="_blank" href="https://www.vicensvives.com/">
              Vicens Vives
            </a>
          </p>
          <p>
            👯 Puedo colaborar en <strong>cualquier proyecto</strong> y más si
            mejoran la vida de las personas
          </p>
          <p>
            👨‍💻 Todos mis proyectos públicos los puedes ver en{' '}
            <a target="_blank" href="https://github.com/gantit">
              @gantit
            </a>
          </p>
          <p>
            📝 Intento escribir articulos en el <Link href="/blog">blog</Link>
          </p>
          <p>
            💬 Hablemos de <strong>React, Node, JavaScript, NextJs</strong>
          </p>
          <p>
            📫 Puedes contactar conmigo en{' '}
            <a href="mailto:me@joca.dev">
              <strong>me@joca.dev</strong>
            </a>
          </p>
        </div>
        <Chating />
      </section>

      <section className="details">
        <div className="experience">
          <h2>Experiencia</h2>
          <div className="content">
            <Expreience
              title="Javascript Developer"
              company="Vicens Vives Digital"
              date="Julio de 2018 / actualidad"
            >
              <p>
                Refactor y desarrollo para la aplicación que permite el
                seguimiento de los alumnos con el profesorado, todo la
                aplicación está basada en las actividades que tienen los libros
                de la casa. Permitiendo al profesor tener un mejor y mayor
                seguimiento del avance de su alumno{' '}
                <a href="https://edubook.vicensvives.com/">
                  edubook.vicensvives.com/
                </a>
                .{' '}
              </p>
              <p>
                {' '}
                Creación y puesta en marcha de una plataforma de actividades
                sueltas para que los alumnos puedan hacer las actividades a su
                manera{' '}
                <a href="https://academia.vicensvives.com">
                  https://academia.vicensvives.com{' '}
                </a>{' '}
              </p>
            </Expreience>
            <Expreience
              title="Front-End Developer"
              company="Innofis|CREALOGIX"
              date="Febrero de 2016 / Junio de 2018"
            >
              <p>
                Contribuir con el desarrollo de dos aplicaciones, una plataforma
                de fidelización para{' '}
                <a href="https://danone.es/">danone.es/ </a> y el desarrollo y
                estructura de una aplicación híbrida para a riyad bank{' '}
              </p>
            </Expreience>
          </div>
        </div>

        <div className="hability">
          <h2>Habilidades</h2>
          <div className="content">
            <Hability
              title="Frontend"
              habilities={[
                'html',
                'css',
                'js',
                'ES6',
                'sass',
                'redux',
                'ReactJs',
                'Angular',
                'ionic',
                'webpack',
                'Eslint',
                'Prettier'
              ]}
            />
            <Hability
              title="Backend"
              habilities={[
                'Node',
                'REST',
                'NextJs',
                'ES6',
                'Firebase',
                'MongoDB'
              ]}
            />
            <Hability
              title="Testing"
              habilities={[
                'Jest',
                'Mocha',
                'chai',
                'React Testing library',
                'enzyme',
                'cypress'
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

export default Me
