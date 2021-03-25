import { useEffect, useState } from 'react'
import Head from 'components/head'

const Home = () => {
  const [card, setCard] = useState(null)

  const getCard = async () => {
    const res = await fetch('/api/frases')
    const newCard = await res.json()
    setCard(newCard)
  }
  useEffect(() => {
    getCard()
  }, [])

  return (
    <div>
      <Head />
      <div className="hero">
        <h1 className="title">Cita del día</h1>
        <div className="row">
          <div className="card">
            {card ? (
              <>
                <h3>{card.frase}</h3>
                <p>{card.autor}</p>
                <img src={card.bg} id="scream" />
              </>
            ) : (
              <span className="loading" />
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero {
          width: 100%;
          color: var(--balck);
        }
        .canvas {
          width: 400px;
          height: 400px;
        }
        .title {
          margin: 0;
          width: 100%;
          padding-top: 80px;
          line-height: 1.15;
          font-size: 48px;
        }
        .title {
          text-align: center;
        }
        .row {
          max-width: 880px;
          margin: 80px auto 40px;
          display: flex;
          flex-direction: row;
          justify-content: space-around;
        }
        @keyframes Loading {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .card .loading {
          max-width: 100%;
          height: 24px;
          border-radius: 4px;
          display: inline-block;
          background: linear-gradient(270deg, #d1d1d1, #eaeaea);
          background-size: 200% 200%;
          animation: Loading 2s ease infinite;
        }
        .card {
          padding: 18px 18px 24px;
          width: 220px;
          text-align: left;
          text-decoration: none;
          color: #dac840;
          border: 1px solid #9b9b9b;
          position: relative;
          height: 400px;
          width: 400px;
        }
        .card:hover {
          border-color: #777777;
        }
        .card:before {
          content: '';
          position: absolute;
          z-index: 2;
          top: 0;
          left: 0;
          background: rgba(51, 45, 45, 0.5);
          width: 100%;
          height: 100%;
        }
        .card h3 {
          color: #dac840;
          font-size: 22px;
          left: 0;
          margin: 0;
          padding: 10px;
          position: absolute;
          text-shadow: 0px 0px 3px black, 0px 0px 3px black, 0px 0px 3px black,
            0px 0px 3px black;
          top: 0;
          top: 10px;
          z-index: 3;
        }
        .card p {
          bottom: 10px;
          color: #f7f7f7;
          font-size: 16px;
          margin: 0;
          padding: 12px 0 0;
          position: absolute;
          right: 10px;
          z-index: 3;
          text-shadow: 0px 0px 3px black, 0px 0px 3px black, 0px 0px 3px black,
            0px 0px 3px black;
        }
        .card img {
          height: 100%;
          left: 0;
          position: absolute;
          top: 0;
          width: 100%;
          z-index: 1;
        }
      `}</style>
    </div>
  )
}

export default Home
