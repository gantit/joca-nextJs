import { useState } from 'react'
import Head from 'components/head'
import ControlPanel from 'components/panel'
import Mapa from 'components/svgMap'

const Home = ({ data }) => {
  const [details, setDetails] = useState(null)

  const onClick = (comunityName) => {
    const contryInfo = data[comunityName]
    setDetails({
      comunityName,
      ...contryInfo
    })
  }

  return (
    <div>
      <Head
        title="Restricciones covid en españa por comunidad"
        description="Debido al covid actualmente existen restricciones en españa, aquí las tienes por comunidad"
        image="https://me.joca.dev/img/restrictions.webp"
      />
      <div className="hero">
        <div className="row">
          <h1 className="title">Restricciones por comunidad</h1>
          <p className="text">
            El estado de alarma aprobado en España le permite a las comunidades
            autónomas, tomar las medidas que crean necesarias para frenar la
            expansión del coronavirus. Pero cada comunidad autónoma está
            aplicando sus propias restricciones.
          </p>
        </div>
        <div className="row">
          {details?.perimetralComunity && (
            <ControlPanel data={details} setData={setDetails} />
          )}
          <Mapa onClick={onClick} />
          <p className="source">
            Fuentes:{' '}
            <a
              href="https://administracion.gob.es/pag_Home/espanaAdmon/boletinesYLegislacion/BO_CCAA.html"
              target="_blank"
            >
              Boletines Oficiales de las distintas comunidades autónomas
            </a>
          </p>
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
          margin-bottom: 30px;
          padding-top: 80px;
          text-align: center;
          width: 100%;
        }
        .row {
          position: relative;
          margin: 80px auto 40px;
          max-height: 1100px;
          max-width: 1220px;
        }

        .source {
          color: var(--black);
          text-align: center;
        }
        .source a {
          text-decoration: underline;
        }

        @media (max-width: 420px) {
          .title {
            font-size: 34px;
            padding-top: 0;
          }

          .row {
            margin: 0 auto 40px;
          }
        }
      `}</style>
    </div>
  )
}

export async function getStaticProps() {
  const data = require('../../../public/data/latest.json')

  return {
    props: {
      data
    }
  }
}

export default Home
