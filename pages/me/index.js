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
                  edubook.vicensvives.com
                </a>{' '}
                .
              </p>
              <p>
                Creación y puesta en marcha de una plataforma de actividades
                sueltas para que los alumnos puedan hacer las actividades a su
                manera{' '}
                <a href="https://academia.vicensvives.com">
                  academia.vicensvives.com"
                </a>
              </p>
            </Expreience>
            <Expreience
              title="Front-End Developer"
              company="Innofis|CREALOGIX"
              date="Febrero de 2016 / Junio de 2018"
            >
              <p>
                Contribuir con el desarrollo de dos aplicaciones, una plataforma
                de fidelización para <a href="https://danone.es/">danone.es</a>{' '}
                y el desarrollo y estructura de una aplicación híbrida para a
                riyad bank
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
          border-radius: 10px;
          border: 3px solid;
          margin: 50px auto 20px;
          transition: all 0.3 ease;
        }

        .header > h2 {
          text-shadow: 1px 1px var(--white);
        }

        .me {
          display: grid;
          position: relative;
        }
        .me > * {
          grid-area: 1/1;
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

        /*  number of row */
        /*  number of columns */
        /* speed factor */
        @property --c-0-0 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-0-1 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-0-2 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-0-3 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-0-4 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-0-5 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-0-6 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-0-7 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-0-8 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-0-9 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-0-10 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-0-11 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-0-12 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-0-13 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-0-14 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-0-15 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-0-16 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-0-17 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-0-18 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-0-19 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-1-0 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-1-1 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-1-2 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-1-3 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-1-4 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-1-5 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-1-6 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-1-7 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-1-8 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-1-9 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-1-10 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-1-11 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-1-12 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-1-13 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-1-14 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-1-15 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-1-16 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-1-17 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-1-18 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-1-19 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-2-0 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-2-1 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-2-2 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-2-3 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-2-4 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-2-5 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-2-6 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-2-7 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-2-8 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-2-9 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-2-10 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-2-11 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-2-12 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-2-13 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-2-14 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-2-15 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-2-16 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-2-17 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-2-18 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-2-19 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-3-0 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-3-1 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-3-2 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-3-3 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-3-4 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-3-5 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-3-6 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-3-7 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-3-8 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-3-9 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-3-10 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-3-11 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-3-12 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-3-13 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-3-14 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-3-15 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-3-16 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-3-17 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-3-18 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-3-19 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-4-0 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-4-1 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-4-2 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-4-3 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-4-4 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-4-5 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-4-6 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-4-7 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-4-8 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-4-9 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-4-10 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-4-11 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-4-12 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-4-13 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-4-14 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-4-15 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-4-16 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-4-17 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-4-18 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-4-19 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-5-0 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-5-1 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-5-2 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-5-3 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-5-4 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-5-5 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-5-6 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-5-7 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-5-8 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-5-9 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-5-10 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-5-11 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-5-12 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-5-13 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-5-14 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-5-15 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-5-16 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-5-17 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-5-18 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-5-19 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-6-0 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-6-1 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-6-2 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-6-3 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-6-4 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-6-5 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-6-6 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-6-7 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-6-8 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-6-9 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-6-10 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-6-11 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-6-12 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-6-13 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-6-14 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-6-15 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-6-16 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-6-17 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-6-18 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-6-19 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-7-0 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-7-1 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-7-2 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-7-3 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-7-4 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-7-5 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-7-6 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-7-7 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-7-8 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-7-9 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-7-10 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-7-11 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-7-12 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-7-13 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-7-14 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-7-15 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-7-16 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-7-17 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-7-18 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-7-19 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-8-0 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-8-1 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-8-2 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-8-3 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-8-4 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-8-5 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-8-6 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-8-7 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-8-8 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-8-9 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-8-10 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-8-11 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-8-12 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-8-13 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-8-14 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-8-15 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-8-16 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-8-17 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-8-18 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-8-19 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-9-0 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-9-1 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-9-2 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-9-3 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-9-4 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-9-5 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-9-6 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-9-7 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-9-8 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-9-9 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-9-10 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-9-11 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-9-12 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-9-13 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-9-14 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-9-15 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-9-16 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-9-17 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-9-18 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-9-19 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-10-0 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-10-1 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-10-2 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-10-3 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-10-4 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-10-5 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-10-6 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-10-7 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-10-8 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-10-9 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-10-10 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-10-11 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-10-12 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-10-13 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-10-14 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-10-15 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-10-16 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-10-17 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-10-18 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-10-19 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-11-0 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-11-1 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-11-2 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-11-3 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-11-4 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-11-5 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-11-6 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-11-7 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-11-8 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-11-9 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-11-10 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-11-11 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-11-12 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-11-13 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-11-14 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-11-15 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-11-16 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-11-17 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-11-18 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-11-19 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-12-0 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-12-1 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-12-2 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-12-3 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-12-4 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-12-5 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-12-6 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-12-7 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-12-8 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-12-9 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-12-10 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-12-11 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-12-12 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-12-13 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-12-14 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-12-15 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-12-16 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-12-17 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-12-18 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-12-19 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-13-0 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-13-1 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-13-2 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-13-3 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-13-4 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-13-5 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-13-6 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-13-7 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-13-8 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-13-9 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-13-10 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-13-11 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-13-12 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-13-13 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-13-14 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-13-15 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-13-16 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-13-17 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-13-18 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-13-19 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-14-0 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-14-1 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-14-2 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-14-3 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-14-4 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-14-5 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-14-6 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-14-7 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-14-8 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-14-9 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-14-10 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-14-11 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-14-12 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-14-13 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-14-14 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-14-15 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-14-16 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-14-17 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-14-18 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-14-19 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-15-0 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-15-1 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-15-2 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-15-3 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-15-4 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-15-5 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-15-6 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-15-7 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-15-8 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-15-9 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-15-10 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-15-11 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-15-12 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-15-13 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-15-14 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-15-15 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-15-16 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-15-17 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-15-18 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-15-19 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-16-0 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-16-1 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-16-2 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-16-3 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-16-4 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-16-5 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-16-6 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-16-7 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-16-8 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-16-9 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-16-10 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-16-11 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-16-12 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-16-13 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-16-14 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-16-15 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-16-16 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-16-17 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-16-18 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-16-19 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-17-0 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-17-1 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-17-2 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-17-3 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-17-4 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-17-5 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-17-6 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-17-7 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-17-8 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-17-9 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-17-10 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-17-11 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-17-12 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-17-13 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-17-14 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-17-15 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-17-16 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-17-17 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-17-18 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-17-19 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-18-0 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-18-1 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-18-2 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-18-3 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-18-4 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-18-5 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-18-6 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-18-7 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-18-8 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-18-9 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-18-10 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-18-11 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-18-12 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-18-13 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-18-14 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-18-15 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-18-16 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-18-17 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-18-18 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-18-19 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-19-0 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-19-1 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-19-2 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-19-3 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-19-4 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-19-5 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-19-6 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-19-7 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-19-8 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-19-9 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-19-10 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-19-11 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-19-12 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-19-13 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-19-14 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-19-15 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-19-16 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-19-17 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-19-18 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        @property --c-19-19 {
          syntax: '<number>';
          initial-value: 1;
          inherits: false;
        }
        img {
          transition: --c-0-0 0.6383201367s 0s, --c-0-1 0.3228148369s 0.02s,
            --c-0-2 0.4947970589s 0.04s, --c-0-3 0.6964966923s 0.06s,
            --c-0-4 0.1408975056s 0.08s, --c-0-5 0.0289891223s 0.1s,
            --c-0-6 0.5938815692s 0.12s, --c-0-7 0.1970909627s 0.14s,
            --c-0-8 0.1908693061s 0.16s, --c-0-9 0.7109342461s 0.18s,
            --c-0-10 0.7957512024s 0.2s, --c-0-11 0.217803988s 0.22s,
            --c-0-12 0.076608528s 0.24s, --c-0-13 0.3703935786s 0.26s,
            --c-0-14 0.2375933774s 0.28s, --c-0-15 0.2768343337s 0.3s,
            --c-0-16 0.0476163967s 0.32s, --c-0-17 0.0338746419s 0.34s,
            --c-0-18 0.7538455921s 0.36s, --c-0-19 0.7336923663s 0.38s,
            --c-1-0 0.6599308762s 0.02s, --c-1-1 0.1648448039s 0.04s,
            --c-1-2 0.6100670952s 0.06s, --c-1-3 0.299556318s 0.08s,
            --c-1-4 0.6861552505s 0.1s, --c-1-5 0.1966560105s 0.12s,
            --c-1-6 0.3343754346s 0.14s, --c-1-7 0.3927224309s 0.16s,
            --c-1-8 0.7634834195s 0.18s, --c-1-9 0.696474136s 0.2s,
            --c-1-10 0.4153050119s 0.22s, --c-1-11 0.1825669647s 0.24s,
            --c-1-12 0.7071766245s 0.26s, --c-1-13 0.4458067263s 0.28s,
            --c-1-14 0.0535947315s 0.3s, --c-1-15 0.315406893s 0.32s,
            --c-1-16 0.7676838399s 0.34s, --c-1-17 0.3937431264s 0.36s,
            --c-1-18 0.0069116154s 0.38s, --c-1-19 0.6487847031s 0.4s,
            --c-2-0 0.0784231978s 0.04s, --c-2-1 0.6180848194s 0.06s,
            --c-2-2 0.4633877071s 0.08s, --c-2-3 0.6060926975s 0.1s,
            --c-2-4 0.5967688483s 0.12s, --c-2-5 0.4421339938s 0.14s,
            --c-2-6 0.7722533958s 0.16s, --c-2-7 0.0668714937s 0.18s,
            --c-2-8 0.1489776424s 0.2s, --c-2-9 0.4787428513s 0.22s,
            --c-2-10 0.2804814277s 0.24s, --c-2-11 0.391689848s 0.26s,
            --c-2-12 0.145886425s 0.28s, --c-2-13 0.7804654756s 0.3s,
            --c-2-14 0.2589641116s 0.32s, --c-2-15 0.2561845759s 0.34s,
            --c-2-16 0.3384967265s 0.36s, --c-2-17 0.6945724383s 0.38s,
            --c-2-18 0.3020457099s 0.4s, --c-2-19 0.5372568209s 0.42s,
            --c-3-0 0.6740517724s 0.06s, --c-3-1 0.7519900847s 0.08s,
            --c-3-2 0.0754918334s 0.1s, --c-3-3 0.5115697187s 0.12s,
            --c-3-4 0.4750316752s 0.14s, --c-3-5 0.5268265319s 0.16s,
            --c-3-6 0.0829650082s 0.18s, --c-3-7 0.6190387204s 0.2s,
            --c-3-8 0.1963263401s 0.22s, --c-3-9 0.3128599751s 0.24s,
            --c-3-10 0.473889332s 0.26s, --c-3-11 0.0192904434s 0.28s,
            --c-3-12 0.2974819s 0.3s, --c-3-13 0.3631885697s 0.32s,
            --c-3-14 0.4678939576s 0.34s, --c-3-15 0.3269401107s 0.36s,
            --c-3-16 0.2911296487s 0.38s, --c-3-17 0.3090926496s 0.4s,
            --c-3-18 0.648046011s 0.42s, --c-3-19 0.5977503847s 0.44s,
            --c-4-0 0.1891329097s 0.08s, --c-4-1 0.2043813477s 0.1s,
            --c-4-2 0.2868139409s 0.12s, --c-4-3 0.6199335921s 0.14s,
            --c-4-4 0.7608817514s 0.16s, --c-4-5 0.727320849s 0.18s,
            --c-4-6 0.503196309s 0.2s, --c-4-7 0.4944784967s 0.22s,
            --c-4-8 0.1896286978s 0.24s, --c-4-9 0.1632072056s 0.26s,
            --c-4-10 0.4269482136s 0.28s, --c-4-11 0.2871664909s 0.3s,
            --c-4-12 0.4026303428s 0.32s, --c-4-13 0.6692920871s 0.34s,
            --c-4-14 0.204515752s 0.36s, --c-4-15 0.5833566837s 0.38s,
            --c-4-16 0.4436702215s 0.4s, --c-4-17 0.3845665262s 0.42s,
            --c-4-18 0.1153621503s 0.44s, --c-4-19 0.1237650366s 0.46s,
            --c-5-0 0.6552821944s 0.1s, --c-5-1 0.4439877958s 0.12s,
            --c-5-2 0.555533784s 0.14s, --c-5-3 0.758834343s 0.16s,
            --c-5-4 0.6167327427s 0.18s, --c-5-5 0.6795031484s 0.2s,
            --c-5-6 0.283730724s 0.22s, --c-5-7 0.2493136214s 0.24s,
            --c-5-8 0.1152997203s 0.26s, --c-5-9 0.7129721221s 0.28s,
            --c-5-10 0.3486862836s 0.3s, --c-5-11 0.4902414409s 0.32s,
            --c-5-12 0.406626076s 0.34s, --c-5-13 0.4594356112s 0.36s,
            --c-5-14 0.4627820511s 0.38s, --c-5-15 0.5124105114s 0.4s,
            --c-5-16 0.421712846s 0.42s, --c-5-17 0.7855729932s 0.44s,
            --c-5-18 0.5757395527s 0.46s, --c-5-19 0.2540341445s 0.48s,
            --c-6-0 0.6944491592s 0.12s, --c-6-1 0.7168954291s 0.14s,
            --c-6-2 0.6700190474s 0.16s, --c-6-3 0.2244443375s 0.18s,
            --c-6-4 0.4287451835s 0.2s, --c-6-5 0.3642718056s 0.22s,
            --c-6-6 0.66831266s 0.24s, --c-6-7 0.6642486057s 0.26s,
            --c-6-8 0.2154313347s 0.28s, --c-6-9 0.5409555664s 0.3s,
            --c-6-10 0.0775464957s 0.32s, --c-6-11 0.1208008362s 0.34s,
            --c-6-12 0.1749109304s 0.36s, --c-6-13 0.2352742531s 0.38s,
            --c-6-14 0.3383640353s 0.4s, --c-6-15 0.785444151s 0.42s,
            --c-6-16 0.017704923s 0.44s, --c-6-17 0.5419760062s 0.46s,
            --c-6-18 0.62603668s 0.48s, --c-6-19 0.648325316s 0.5s,
            --c-7-0 0.2398070617s 0.14s, --c-7-1 0.2777466637s 0.16s,
            --c-7-2 0.1219785882s 0.18s, --c-7-3 0.308990394s 0.2s,
            --c-7-4 0.2254298262s 0.22s, --c-7-5 0.7754977058s 0.24s,
            --c-7-6 0.5671552678s 0.26s, --c-7-7 0.5582879066s 0.28s,
            --c-7-8 0.1021761087s 0.3s, --c-7-9 0.5664976266s 0.32s,
            --c-7-10 0.4341584322s 0.34s, --c-7-11 0.0074764482s 0.36s,
            --c-7-12 0.4130168962s 0.38s, --c-7-13 0.686386811s 0.4s,
            --c-7-14 0.4829742212s 0.42s, --c-7-15 0.426464728s 0.44s,
            --c-7-16 0.651670045s 0.46s, --c-7-17 0.3735731705s 0.48s,
            --c-7-18 0.4114813941s 0.5s, --c-7-19 0.6658529405s 0.52s,
            --c-8-0 0.2340766059s 0.16s, --c-8-1 0.6146176678s 0.18s,
            --c-8-2 0.4781209077s 0.2s, --c-8-3 0.3441421697s 0.22s,
            --c-8-4 0.3570250053s 0.24s, --c-8-5 0.6561791233s 0.26s,
            --c-8-6 0.7484514521s 0.28s, --c-8-7 0.2414331865s 0.3s,
            --c-8-8 0.3639009322s 0.32s, --c-8-9 0.0336118892s 0.34s,
            --c-8-10 0.2321669776s 0.36s, --c-8-11 0.0694304789s 0.38s,
            --c-8-12 0.1231951218s 0.4s, --c-8-13 0.4730369233s 0.42s,
            --c-8-14 0.4501503111s 0.44s, --c-8-15 0.2007869985s 0.46s,
            --c-8-16 0.642061912s 0.48s, --c-8-17 0.1972631165s 0.5s,
            --c-8-18 0.1743477604s 0.52s, --c-8-19 0.0697414512s 0.54s,
            --c-9-0 0.3503045386s 0.18s, --c-9-1 0.7678575113s 0.2s,
            --c-9-2 0.378476237s 0.22s, --c-9-3 0.1474587096s 0.24s,
            --c-9-4 0.5548375039s 0.26s, --c-9-5 0.4995073324s 0.28s,
            --c-9-6 0.163314543s 0.3s, --c-9-7 0.2995492892s 0.32s,
            --c-9-8 0.6536395768s 0.34s, --c-9-9 0.4178543133s 0.36s,
            --c-9-10 0.0604623108s 0.38s, --c-9-11 0.1394842842s 0.4s,
            --c-9-12 0.6988140942s 0.42s, --c-9-13 0.7876936015s 0.44s,
            --c-9-14 0.5657446469s 0.46s, --c-9-15 0.7731202835s 0.48s,
            --c-9-16 0.2542918277s 0.5s, --c-9-17 0.3059501439s 0.52s,
            --c-9-18 0.663133611s 0.54s, --c-9-19 0.2024707754s 0.56s,
            --c-10-0 0.4801745465s 0.2s, --c-10-1 0.4761696105s 0.22s,
            --c-10-2 0.5303656251s 0.24s, --c-10-3 0.4380669347s 0.26s,
            --c-10-4 0.3971083978s 0.28s, --c-10-5 0.6192795951s 0.3s,
            --c-10-6 0.6772257215s 0.32s, --c-10-7 0.6011844512s 0.34s,
            --c-10-8 0.166146677s 0.36s, --c-10-9 0.6374767537s 0.38s,
            --c-10-10 0.1031218403s 0.4s, --c-10-11 0.6552251081s 0.42s,
            --c-10-12 0.0595508465s 0.44s, --c-10-13 0.094128977s 0.46s,
            --c-10-14 0.3724773862s 0.48s, --c-10-15 0.2524051882s 0.5s,
            --c-10-16 0.7924303868s 0.52s, --c-10-17 0.4476483473s 0.54s,
            --c-10-18 0.6108373351s 0.56s, --c-10-19 0.3220572633s 0.58s,
            --c-11-0 0.4240849471s 0.22s, --c-11-1 0.0296202339s 0.24s,
            --c-11-2 0.1774919234s 0.26s, --c-11-3 0.2438305377s 0.28s,
            --c-11-4 0.3044511883s 0.3s, --c-11-5 0.0528790711s 0.32s,
            --c-11-6 0.4097144077s 0.34s, --c-11-7 0.0465979208s 0.36s,
            --c-11-8 0.7623290531s 0.38s, --c-11-9 0.5399294205s 0.4s,
            --c-11-10 0.4773986608s 0.42s, --c-11-11 0.7279334891s 0.44s,
            --c-11-12 0.1461975452s 0.46s, --c-11-13 0.5735549397s 0.48s,
            --c-11-14 0.2288780035s 0.5s, --c-11-15 0.5965388538s 0.52s,
            --c-11-16 0.3634102358s 0.54s, --c-11-17 0.5536945803s 0.56s,
            --c-11-18 0.6822332498s 0.58s, --c-11-19 0.5099997313s 0.6s,
            --c-12-0 0.0172042358s 0.24s, --c-12-1 0.7855739943s 0.26s,
            --c-12-2 0.7739718472s 0.28s, --c-12-3 0.6859922257s 0.3s,
            --c-12-4 0.6971939039s 0.32s, --c-12-5 0.3521560148s 0.34s,
            --c-12-6 0.4911495397s 0.36s, --c-12-7 0.4209625643s 0.38s,
            --c-12-8 0.0651208935s 0.4s, --c-12-9 0.250317646s 0.42s,
            --c-12-10 0.352777882s 0.44s, --c-12-11 0.4716697418s 0.46s,
            --c-12-12 0.2212528828s 0.48s, --c-12-13 0.1714574721s 0.5s,
            --c-12-14 0.7928574136s 0.52s, --c-12-15 0.6089093244s 0.54s,
            --c-12-16 0.2704247869s 0.56s, --c-12-17 0.7169125025s 0.58s,
            --c-12-18 0.7929938607s 0.6s, --c-12-19 0.6799099688s 0.62s,
            --c-13-0 0.2416197214s 0.26s, --c-13-1 0.5958123365s 0.28s,
            --c-13-2 0.4967541147s 0.3s, --c-13-3 0.2595799876s 0.32s,
            --c-13-4 0.481961283s 0.34s, --c-13-5 0.5481886291s 0.36s,
            --c-13-6 0.5280097595s 0.38s, --c-13-7 0.312988223s 0.4s,
            --c-13-8 0.6717304327s 0.42s, --c-13-9 0.5762443582s 0.44s,
            --c-13-10 0.1649109223s 0.46s, --c-13-11 0.2031117247s 0.48s,
            --c-13-12 0.02033648s 0.5s, --c-13-13 0.1229114894s 0.52s,
            --c-13-14 0.7108011017s 0.54s, --c-13-15 0.2734078003s 0.56s,
            --c-13-16 0.1449624637s 0.58s, --c-13-17 0.1736840541s 0.6s,
            --c-13-18 0.5352994631s 0.62s, --c-13-19 0.2226229533s 0.64s,
            --c-14-0 0.6682622171s 0.28s, --c-14-1 0.2788013264s 0.3s,
            --c-14-2 0.2904238522s 0.32s, --c-14-3 0.1893606399s 0.34s,
            --c-14-4 0.340832688s 0.36s, --c-14-5 0.6535827033s 0.38s,
            --c-14-6 0.0166947102s 0.4s, --c-14-7 0.5901361855s 0.42s,
            --c-14-8 0.3093585832s 0.44s, --c-14-9 0.0480360811s 0.46s,
            --c-14-10 0.5422554732s 0.48s, --c-14-11 0.6840703458s 0.5s,
            --c-14-12 0.1531489634s 0.52s, --c-14-13 0.6067332423s 0.54s,
            --c-14-14 0.3182188596s 0.56s, --c-14-15 0.1099813002s 0.58s,
            --c-14-16 0.3520096027s 0.6s, --c-14-17 0.1299116589s 0.62s,
            --c-14-18 0.0753503089s 0.64s, --c-14-19 0.6023842757s 0.66s,
            --c-15-0 0.2539908922s 0.3s, --c-15-1 0.1485369437s 0.32s,
            --c-15-2 0.3168336018s 0.34s, --c-15-3 0.5956092791s 0.36s,
            --c-15-4 0.7471473891s 0.38s, --c-15-5 0.4007797069s 0.4s,
            --c-15-6 0.1816133817s 0.42s, --c-15-7 0.1358512466s 0.44s,
            --c-15-8 0.4790332348s 0.46s, --c-15-9 0.367336443s 0.48s,
            --c-15-10 0.6986233902s 0.5s, --c-15-11 0.4664851424s 0.52s,
            --c-15-12 0.5406282335s 0.54s, --c-15-13 0.7316810438s 0.56s,
            --c-15-14 0.0509488431s 0.58s, --c-15-15 0.6929658084s 0.6s,
            --c-15-16 0.4541131365s 0.62s, --c-15-17 0.7085849458s 0.64s,
            --c-15-18 0.7658822562s 0.66s, --c-15-19 0.5608717579s 0.68s,
            --c-16-0 0.1913843614s 0.32s, --c-16-1 0.3118785789s 0.34s,
            --c-16-2 0.7437452983s 0.36s, --c-16-3 0.2136620322s 0.38s,
            --c-16-4 0.2392883201s 0.4s, --c-16-5 0.3971827s 0.42s,
            --c-16-6 0.3260430678s 0.44s, --c-16-7 0.0390962704s 0.46s,
            --c-16-8 0.4201057325s 0.48s, --c-16-9 0.742041245s 0.5s,
            --c-16-10 0.2319709901s 0.52s, --c-16-11 0.3957954265s 0.54s,
            --c-16-12 0.1324826356s 0.56s, --c-16-13 0.1386847945s 0.58s,
            --c-16-14 0.7176915063s 0.6s, --c-16-15 0.2247970157s 0.62s,
            --c-16-16 0.7125314974s 0.64s, --c-16-17 0.7400108632s 0.66s,
            --c-16-18 0.1790922349s 0.68s, --c-16-19 0.1516355414s 0.7s,
            --c-17-0 0.7690054893s 0.34s, --c-17-1 0.0355199627s 0.36s,
            --c-17-2 0.2888001089s 0.38s, --c-17-3 0.7334871044s 0.4s,
            --c-17-4 0.212821288s 0.42s, --c-17-5 0.1327523726s 0.44s,
            --c-17-6 0.2782896248s 0.46s, --c-17-7 0.1223764734s 0.48s,
            --c-17-8 0.5997886066s 0.5s, --c-17-9 0.0446972831s 0.52s,
            --c-17-10 0.0065181448s 0.54s, --c-17-11 0.2004438685s 0.56s,
            --c-17-12 0.2290046735s 0.58s, --c-17-13 0.1513938163s 0.6s,
            --c-17-14 0.0070804102s 0.62s, --c-17-15 0.2700678246s 0.64s,
            --c-17-16 0.134358644s 0.66s, --c-17-17 0.5001388418s 0.68s,
            --c-17-18 0.1630867715s 0.7s, --c-17-19 0.1911093388s 0.72s,
            --c-18-0 0.4865927289s 0.36s, --c-18-1 0.7362409879s 0.38s,
            --c-18-2 0.0628317253s 0.4s, --c-18-3 0.2114550338s 0.42s,
            --c-18-4 0.7323669187s 0.44s, --c-18-5 0.7966906872s 0.46s,
            --c-18-6 0.7118357626s 0.48s, --c-18-7 0.1984417091s 0.5s,
            --c-18-8 0.3527455973s 0.52s, --c-18-9 0.0644230232s 0.54s,
            --c-18-10 0.6446716943s 0.56s, --c-18-11 0.5738124301s 0.58s,
            --c-18-12 0.7594305556s 0.6s, --c-18-13 0.4362420853s 0.62s,
            --c-18-14 0.7019260973s 0.64s, --c-18-15 0.0917642081s 0.66s,
            --c-18-16 0.1366008604s 0.68s, --c-18-17 0.0121851165s 0.7s,
            --c-18-18 0.195081433s 0.72s, --c-18-19 0.0944544925s 0.74s,
            --c-19-0 0.1830410103s 0.38s, --c-19-1 0.6727449372s 0.4s,
            --c-19-2 0.1120325856s 0.42s, --c-19-3 0.4587960624s 0.44s,
            --c-19-4 0.2146358451s 0.46s, --c-19-5 0.7197450817s 0.48s,
            --c-19-6 0.080861066s 0.5s, --c-19-7 0.2851824421s 0.52s,
            --c-19-8 0.5639191593s 0.54s, --c-19-9 0.5793520295s 0.56s,
            --c-19-10 0.6242475312s 0.58s, --c-19-11 0.3878808032s 0.6s,
            --c-19-12 0.4638794123s 0.62s, --c-19-13 0.7857979846s 0.64s,
            --c-19-14 0.136110236s 0.66s, --c-19-15 0.2531185627s 0.68s,
            --c-19-16 0.004689167s 0.7s, --c-19-17 0.0792907984s 0.72s,
            --c-19-18 0.0710288101s 0.74s, --c-19-19 0.6016030131s 0.76s;
          mask-size: calc(100% / 20) calc(100% / 20);
          mask-repeat: no-repeat;
        }

        img:hover {
          --c-0-0: 0;
          --c-0-1: 0;
          --c-0-2: 0;
          --c-0-3: 0;
          --c-0-4: 0;
          --c-0-5: 0;
          --c-0-6: 0;
          --c-0-7: 0;
          --c-0-8: 0;
          --c-0-9: 0;
          --c-0-10: 0;
          --c-0-11: 0;
          --c-0-12: 0;
          --c-0-13: 0;
          --c-0-14: 0;
          --c-0-15: 0;
          --c-0-16: 0;
          --c-0-17: 0;
          --c-0-18: 0;
          --c-0-19: 0;
          --c-1-0: 0;
          --c-1-1: 0;
          --c-1-2: 0;
          --c-1-3: 0;
          --c-1-4: 0;
          --c-1-5: 0;
          --c-1-6: 0;
          --c-1-7: 0;
          --c-1-8: 0;
          --c-1-9: 0;
          --c-1-10: 0;
          --c-1-11: 0;
          --c-1-12: 0;
          --c-1-13: 0;
          --c-1-14: 0;
          --c-1-15: 0;
          --c-1-16: 0;
          --c-1-17: 0;
          --c-1-18: 0;
          --c-1-19: 0;
          --c-2-0: 0;
          --c-2-1: 0;
          --c-2-2: 0;
          --c-2-3: 0;
          --c-2-4: 0;
          --c-2-5: 0;
          --c-2-6: 0;
          --c-2-7: 0;
          --c-2-8: 0;
          --c-2-9: 0;
          --c-2-10: 0;
          --c-2-11: 0;
          --c-2-12: 0;
          --c-2-13: 0;
          --c-2-14: 0;
          --c-2-15: 0;
          --c-2-16: 0;
          --c-2-17: 0;
          --c-2-18: 0;
          --c-2-19: 0;
          --c-3-0: 0;
          --c-3-1: 0;
          --c-3-2: 0;
          --c-3-3: 0;
          --c-3-4: 0;
          --c-3-5: 0;
          --c-3-6: 0;
          --c-3-7: 0;
          --c-3-8: 0;
          --c-3-9: 0;
          --c-3-10: 0;
          --c-3-11: 0;
          --c-3-12: 0;
          --c-3-13: 0;
          --c-3-14: 0;
          --c-3-15: 0;
          --c-3-16: 0;
          --c-3-17: 0;
          --c-3-18: 0;
          --c-3-19: 0;
          --c-4-0: 0;
          --c-4-1: 0;
          --c-4-2: 0;
          --c-4-3: 0;
          --c-4-4: 0;
          --c-4-5: 0;
          --c-4-6: 0;
          --c-4-7: 0;
          --c-4-8: 0;
          --c-4-9: 0;
          --c-4-10: 0;
          --c-4-11: 0;
          --c-4-12: 0;
          --c-4-13: 0;
          --c-4-14: 0;
          --c-4-15: 0;
          --c-4-16: 0;
          --c-4-17: 0;
          --c-4-18: 0;
          --c-4-19: 0;
          --c-5-0: 0;
          --c-5-1: 0;
          --c-5-2: 0;
          --c-5-3: 0;
          --c-5-4: 0;
          --c-5-5: 0;
          --c-5-6: 0;
          --c-5-7: 0;
          --c-5-8: 0;
          --c-5-9: 0;
          --c-5-10: 0;
          --c-5-11: 0;
          --c-5-12: 0;
          --c-5-13: 0;
          --c-5-14: 0;
          --c-5-15: 0;
          --c-5-16: 0;
          --c-5-17: 0;
          --c-5-18: 0;
          --c-5-19: 0;
          --c-6-0: 0;
          --c-6-1: 0;
          --c-6-2: 0;
          --c-6-3: 0;
          --c-6-4: 0;
          --c-6-5: 0;
          --c-6-6: 0;
          --c-6-7: 0;
          --c-6-8: 0;
          --c-6-9: 0;
          --c-6-10: 0;
          --c-6-11: 0;
          --c-6-12: 0;
          --c-6-13: 0;
          --c-6-14: 0;
          --c-6-15: 0;
          --c-6-16: 0;
          --c-6-17: 0;
          --c-6-18: 0;
          --c-6-19: 0;
          --c-7-0: 0;
          --c-7-1: 0;
          --c-7-2: 0;
          --c-7-3: 0;
          --c-7-4: 0;
          --c-7-5: 0;
          --c-7-6: 0;
          --c-7-7: 0;
          --c-7-8: 0;
          --c-7-9: 0;
          --c-7-10: 0;
          --c-7-11: 0;
          --c-7-12: 0;
          --c-7-13: 0;
          --c-7-14: 0;
          --c-7-15: 0;
          --c-7-16: 0;
          --c-7-17: 0;
          --c-7-18: 0;
          --c-7-19: 0;
          --c-8-0: 0;
          --c-8-1: 0;
          --c-8-2: 0;
          --c-8-3: 0;
          --c-8-4: 0;
          --c-8-5: 0;
          --c-8-6: 0;
          --c-8-7: 0;
          --c-8-8: 0;
          --c-8-9: 0;
          --c-8-10: 0;
          --c-8-11: 0;
          --c-8-12: 0;
          --c-8-13: 0;
          --c-8-14: 0;
          --c-8-15: 0;
          --c-8-16: 0;
          --c-8-17: 0;
          --c-8-18: 0;
          --c-8-19: 0;
          --c-9-0: 0;
          --c-9-1: 0;
          --c-9-2: 0;
          --c-9-3: 0;
          --c-9-4: 0;
          --c-9-5: 0;
          --c-9-6: 0;
          --c-9-7: 0;
          --c-9-8: 0;
          --c-9-9: 0;
          --c-9-10: 0;
          --c-9-11: 0;
          --c-9-12: 0;
          --c-9-13: 0;
          --c-9-14: 0;
          --c-9-15: 0;
          --c-9-16: 0;
          --c-9-17: 0;
          --c-9-18: 0;
          --c-9-19: 0;
          --c-10-0: 0;
          --c-10-1: 0;
          --c-10-2: 0;
          --c-10-3: 0;
          --c-10-4: 0;
          --c-10-5: 0;
          --c-10-6: 0;
          --c-10-7: 0;
          --c-10-8: 0;
          --c-10-9: 0;
          --c-10-10: 0;
          --c-10-11: 0;
          --c-10-12: 0;
          --c-10-13: 0;
          --c-10-14: 0;
          --c-10-15: 0;
          --c-10-16: 0;
          --c-10-17: 0;
          --c-10-18: 0;
          --c-10-19: 0;
          --c-11-0: 0;
          --c-11-1: 0;
          --c-11-2: 0;
          --c-11-3: 0;
          --c-11-4: 0;
          --c-11-5: 0;
          --c-11-6: 0;
          --c-11-7: 0;
          --c-11-8: 0;
          --c-11-9: 0;
          --c-11-10: 0;
          --c-11-11: 0;
          --c-11-12: 0;
          --c-11-13: 0;
          --c-11-14: 0;
          --c-11-15: 0;
          --c-11-16: 0;
          --c-11-17: 0;
          --c-11-18: 0;
          --c-11-19: 0;
          --c-12-0: 0;
          --c-12-1: 0;
          --c-12-2: 0;
          --c-12-3: 0;
          --c-12-4: 0;
          --c-12-5: 0;
          --c-12-6: 0;
          --c-12-7: 0;
          --c-12-8: 0;
          --c-12-9: 0;
          --c-12-10: 0;
          --c-12-11: 0;
          --c-12-12: 0;
          --c-12-13: 0;
          --c-12-14: 0;
          --c-12-15: 0;
          --c-12-16: 0;
          --c-12-17: 0;
          --c-12-18: 0;
          --c-12-19: 0;
          --c-13-0: 0;
          --c-13-1: 0;
          --c-13-2: 0;
          --c-13-3: 0;
          --c-13-4: 0;
          --c-13-5: 0;
          --c-13-6: 0;
          --c-13-7: 0;
          --c-13-8: 0;
          --c-13-9: 0;
          --c-13-10: 0;
          --c-13-11: 0;
          --c-13-12: 0;
          --c-13-13: 0;
          --c-13-14: 0;
          --c-13-15: 0;
          --c-13-16: 0;
          --c-13-17: 0;
          --c-13-18: 0;
          --c-13-19: 0;
          --c-14-0: 0;
          --c-14-1: 0;
          --c-14-2: 0;
          --c-14-3: 0;
          --c-14-4: 0;
          --c-14-5: 0;
          --c-14-6: 0;
          --c-14-7: 0;
          --c-14-8: 0;
          --c-14-9: 0;
          --c-14-10: 0;
          --c-14-11: 0;
          --c-14-12: 0;
          --c-14-13: 0;
          --c-14-14: 0;
          --c-14-15: 0;
          --c-14-16: 0;
          --c-14-17: 0;
          --c-14-18: 0;
          --c-14-19: 0;
          --c-15-0: 0;
          --c-15-1: 0;
          --c-15-2: 0;
          --c-15-3: 0;
          --c-15-4: 0;
          --c-15-5: 0;
          --c-15-6: 0;
          --c-15-7: 0;
          --c-15-8: 0;
          --c-15-9: 0;
          --c-15-10: 0;
          --c-15-11: 0;
          --c-15-12: 0;
          --c-15-13: 0;
          --c-15-14: 0;
          --c-15-15: 0;
          --c-15-16: 0;
          --c-15-17: 0;
          --c-15-18: 0;
          --c-15-19: 0;
          --c-16-0: 0;
          --c-16-1: 0;
          --c-16-2: 0;
          --c-16-3: 0;
          --c-16-4: 0;
          --c-16-5: 0;
          --c-16-6: 0;
          --c-16-7: 0;
          --c-16-8: 0;
          --c-16-9: 0;
          --c-16-10: 0;
          --c-16-11: 0;
          --c-16-12: 0;
          --c-16-13: 0;
          --c-16-14: 0;
          --c-16-15: 0;
          --c-16-16: 0;
          --c-16-17: 0;
          --c-16-18: 0;
          --c-16-19: 0;
          --c-17-0: 0;
          --c-17-1: 0;
          --c-17-2: 0;
          --c-17-3: 0;
          --c-17-4: 0;
          --c-17-5: 0;
          --c-17-6: 0;
          --c-17-7: 0;
          --c-17-8: 0;
          --c-17-9: 0;
          --c-17-10: 0;
          --c-17-11: 0;
          --c-17-12: 0;
          --c-17-13: 0;
          --c-17-14: 0;
          --c-17-15: 0;
          --c-17-16: 0;
          --c-17-17: 0;
          --c-17-18: 0;
          --c-17-19: 0;
          --c-18-0: 0;
          --c-18-1: 0;
          --c-18-2: 0;
          --c-18-3: 0;
          --c-18-4: 0;
          --c-18-5: 0;
          --c-18-6: 0;
          --c-18-7: 0;
          --c-18-8: 0;
          --c-18-9: 0;
          --c-18-10: 0;
          --c-18-11: 0;
          --c-18-12: 0;
          --c-18-13: 0;
          --c-18-14: 0;
          --c-18-15: 0;
          --c-18-16: 0;
          --c-18-17: 0;
          --c-18-18: 0;
          --c-18-19: 0;
          --c-19-0: 0;
          --c-19-1: 0;
          --c-19-2: 0;
          --c-19-3: 0;
          --c-19-4: 0;
          --c-19-5: 0;
          --c-19-6: 0;
          --c-19-7: 0;
          --c-19-8: 0;
          --c-19-9: 0;
          --c-19-10: 0;
          --c-19-11: 0;
          --c-19-12: 0;
          --c-19-13: 0;
          --c-19-14: 0;
          --c-19-15: 0;
          --c-19-16: 0;
          --c-19-17: 0;
          --c-19-18: 0;
          --c-19-19: 0;
        }
      `}</style>
    </div>
  </>
)

export default Me
