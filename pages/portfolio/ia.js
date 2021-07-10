import { useEffect, useState } from 'react'
import { removeIdea, updateIdea } from 'firebasedata'

import Head from 'components/head'
import OpenIAicon from 'assets/icons/openIA'
import Likeicon from 'assets/icons/like'
import Dislikeicon from 'assets/icons/dislike'

const Home = () => {
  const [ideas, setIdeas] = useState(null)
  const [lastIdea, setlastIdea] = useState(null)
  const [isLoading, setLoading] = useState(false)

  const getData = async () => {
    const res = await fetch('/api/getIdeas')
    const { ideasList } = await res.json()
    const [newIdea, ...rest] = ideasList
    setIdeas(rest)
    setlastIdea(newIdea)
  }

  const removeId = async (id) => {
    await removeIdea({ id })
    await getData()
  }

  const addIdea = async (id) => {
    setLoading(true)
    await fetch('/api/ia')
    await getData()
    setLoading(false)
  }

  const likeIdea = async (idea) => {
    setLoading(true)
    await updateIdea({ ...idea, likes: true })
    await getData()
    setLoading(false)
  }

  const dislikeIdea = async (idea) => {
    setLoading(true)
    await updateIdea({ ...idea, dislikes: true })
    await getData()
    setLoading(false)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div>
      <Head />
      <div className="hero">
        <h1 className="title">Es idea de una IA </h1>

        <div className="row">
          {lastIdea && (
            <div className="card">
              <h3>{lastIdea.text}</h3>
              <button disabled={isLoading} onClick={addIdea}>
                {isLoading ? 'cargando' : 'add idea'}
              </button>

              <div className="footer">
                <OpenIAicon className="openIA" />
                <p>
                  <Likeicon
                    className="icon"
                    onClick={() => likeIdea(lastIdea)}
                  />{' '}
                  {lastIdea.likes}
                  <Dislikeicon
                    className="icon"
                    onClick={() => dislikeIdea(lastIdea)}
                  />
                  {lastIdea.dislikes}
                </p>
              </div>
            </div>
          )}
        </div>
        <div className="row list">
          {ideas &&
            ideas.map((idea) => (
              <div className="card" key={idea.id}>
                <h3>{idea.text}</h3>
                <div className="footer">
                  <OpenIAicon className="openIA" />
                  <p>
                    <Likeicon className="icon" onClick={() => likeIdea(idea)} />{' '}
                    {idea.likes}
                    <Dislikeicon
                      className="icon"
                      onClick={() => dislikeIdea(idea)}
                    />
                    {idea.dislikes}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>

      <style jsx>{`
        .hero {
          width: 100%;
          color: var(--balck);
        }

        .title {
          font-size: 48px;
          line-height: 1.15;
          margin: 0;
          padding-top: 80px;
          text-align: center;
          width: 100%;
        }

        .row {
          max-width: 880px;
          margin: 80px auto 40px;
          display: flex;
          flex-direction: row;
          justify-content: space-around;
        }

        .list {
          flex-direction: column;
          align-items: center;
        }

        .list {
          flex-direction: column;
          align-items: center;
        }

        .card {
          background: var(--black);
          border-radius: 15px;
          margin: 2px 0;
          padding: 24px;
          position: relative;
          width: 400px;
        }

        .card:hover {
          border-color: var(--primary);
        }

        .card h3 {
          color: var(--primary);
          font-size: 22px;
          line-height: normal;
          margin: 0;
        }

        .footer {
          display: flex;
          flex-wrap: nowrap;
          align-content: center;
          justify-content: space-between;
        }

        .footer :global(svg.openIA) {
          fill: var(--primary);
          padding: 12px 0 0;
          width: 100px;
        }

        .footer :global(svg.icon) {
          width: 20px;
          fill: var(--white);
          margin: 5px;
          margin-left: 15px;
        }

        .footer :global(svg.icon:hover) {
          fill: var(--primary);
          cursor: pointer;
        }

        .footer p {
          align-content: center;
          align-items: center;
          color: var(--white);
          display: flex;
          justify-content: flex-end;
        }
      `}</style>
    </div>
  )
}

export default Home
