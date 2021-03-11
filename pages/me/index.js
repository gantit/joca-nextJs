import Link from 'next/link'
import Image from 'next/image'
import Hability from "components/hability";

import Chating from "assets/img/chating";

const Me = () => {
  return (
    <div className="me">
      <section className="header">
        <Image
          src='/img/avatar.png'
          alt="Johnny C. Avatar"
          width={200}
          height={200}
          className="avatar"
          layout="fixed"
        />
        <h1>Frontend Developer</h1>
        <h2>Padre de dos jedis, entusiasta de las nuevas tecnologías.</h2>
      </section>
      <section className="chat">
        <div className="bar"></div>
        <Chating />
        <div className="text">
          <h3>Un poco sobre mí</h3>
          <p>🔭 Actualmente trabajo para <a target="_blank" href="https://www.vicensvives.com/">Vicens Vives</a></p>
          <p>👯 Puedo colaborar en <strong>cualquier proyecto</strong> y más si mejoran la vida de las personas</p>
          <p>👨‍💻 Todos mis proyectos públicos los puedes ver en <a target="_blank" href="https://github.com/gantit">@gantit</a></p>
          <p>📝 Intiento escribir articulos en el <Link href="/blog">blog</Link></p>
          <p>💬 Hablemos de <strong>React, Node, JavaScript, NextJs</strong></p>
          <p>📫 Puedes contactar conmigo en <a href="me@joca.dev"><strong>me@joca.dev</strong></a></p>
        </div>
      </section>

      <section className="details">
        <div className="hability">
          <h2>Habilidades</h2>
          <div className="content">
            <Hability title="Frontend" habilities={['html', 'css', 'js', 'ES6', 'sass', 'redux', 'ReactJs', 'Angular', 'webpack', 'Eslint', 'Prettier']} />
            <Hability title="Backend" habilities={['Node', 'REST', '"NextJs"', 'ES6', 'Firebase', 'MongoDB']} />
            <Hability title="Testing" habilities={['Jest', 'Mocha', 'chai', 'React Testing library', 'enzye', 'cypress']} />
            <Hability title="Agile" habilities={['Kanban', 'Scrum', 'jira', 'TDD', 'Mentorin']} />
          </div>
        </div>
        <div className="experience">
        </div>
      </section>
      <style jsx>{`

        .header {
          display: flex;
          align-items: center;
          flex-direction: column;
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
          margin-bottom: 30px;
          max-width:1200px;
          margin: 0 auto;
        }
        .header > :global(div) {
          margin: 50px auto 20px;
          border: 3px solid;
          border-radius: 10px;
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
          background-image: linear-gradient(50deg,#bdb22e,#ffd001 63%,#f5b400);
          height: 440px;
          left: 50%;
          margin-bottom: 100px;
          position: absolute;
          top: 70%;
          transform: translate(-50%,-50%) rotate(-8deg);
          width: 200%;
          z-index: -1;
        }
        .chat .text {
          border-radius: 5px;
          box-shadow: 0 3px 1px -2px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%), 0 1px 5px 0 rgb(0 0 0 / 12%);
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
          line-height:2rem;
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
          max-width:1200px;
          margin: 0 auto;
        }

        .details h2{
          margin-bottom: 2rem;
        }

        .details .content {
          border-radius: 5px;
          box-shadow: 0 3px 1px -2px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%), 0 1px 5px 0 rgb(0 0 0 / 12%);
          margin: 10px 0;
          max-width: 450px;
          padding: 20px;
          background: var(--white);
        }
      `}</style>
    </div>
  )
}

export default Me