import { useEffect, useState } from 'react'
import { removeIdea, updateIdea } from 'firebasedata'

import Head from 'components/head'
import OpenIAicon from 'assets/icons/openIA'
import Likeicon from 'assets/icons/like'
import Dislikeicon from 'assets/icons/dislike'

import useLocalStorage from 'hooks/useLocalStoage'

const Home = () => {
  const [ideas, setIdeas] = useState(null)
  const [newIdea, setNewIdea] = useState(null)
  const [isLoading, setLoading] = useState(false)
  const [votedList, setVotedList] = useLocalStorage('voted', '')

  const getData = async () => {
    const res = await fetch('/api/getIdeas')
    const { ideasList } = await res.json()
    const removed = ideasList.filter((item) => !votedList.includes(item.id))
    const [newIdea, ...rest] = removed
    setIdeas(rest)
    setNewIdea(newIdea)
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

  const voteIdea = async (idea) => {
    setLoading(true)
    await updateIdea(idea)
    if (ideas && !votedList.includes(newIdea?.id)) {
      const newVotedList = [...votedList, newIdea?.id]
      const removed = ideas.filter((item) => !newVotedList.includes(item.id))
      const [nextIdea, ...rest] = removed
      setIdeas(rest)
      setNewIdea(nextIdea)
      setVotedList(newVotedList)
    }

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
          {newIdea && (
            <div className="card" id={newIdea.id}>
              <h3>{newIdea.text}</h3>

              <div className="footer">
                <OpenIAicon className="openIA" />
                <p>
                  <Likeicon
                    className="icon"
                    onClick={() => voteIdea({ ...newIdea, likes: true })}
                  />
                  {newIdea.likes}
                  <Dislikeicon
                    className="icon"
                    onClick={() => voteIdea({ ...newIdea, dislikes: true })}
                  />
                  {newIdea.dislikes}
                </p>
                <button onClick={() => removeId(newIdea.id)}>remove</button>
              </div>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        .hero {
          width: 100%;
          color: var(--black);
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

        .older {
          align-content: center;
          align-items: stretch;
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: space-between;
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
