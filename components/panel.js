import { memo } from 'react'

import Cross from 'assets/icons/cross'
// svg comunidades https://es.wikipedia.org/wiki/Comunidad_aut%C3%B3noma
const ControlPanel = ({ data, setData }) => (
  <>
    <div className="controlPanel">
      <Cross onClick={() => setData(null)} />
      <h3>{data.countyName}</h3>
      <p>
        <strong>Cierre perimetral de la Comunidad</strong>:{' '}
        {data.perimetralComunity}
      </p>
      <p>
        <strong>Cierre perimetral de municipios</strong>:{' '}
        {data.perimetralMunicipal}
      </p>
      <p>
        <strong>Horario toque de queda</strong>: {data.curfew}
      </p>
      <p>
        <strong>Reuniones sociales</strong>: {data.socialMeetings}
      </p>
      <p>
        <strong>Hostelería</strong>: {data.catering}
      </p>
      <p>
        <strong>Comercios</strong>: {data.shops}
      </p>
      <p>
        <strong>Ultima actualización</strong>: {data.lastUpdate}
      </p>
    </div>
    <style jsx>{`
      .controlPanel {
        max-width: 800px;
        padding: 30px;
        border: 1px solid var(--black);
        margin: 0 auto;
        margin-bottom: 5px;
        position: relative;
      }
      .controlPanel :global(svg) {
        width: 20px;
        position: absolute;
        right: 20px;
      }
      .controlPanel :global(svg:hover) {
        cursor: pointer;
        fill: var(--primary);
      }
      h3 {
        font-size: 25px;
        margin-bottom: 20px;
      }

      p {
        margin-left: 20px;
      }
    `}</style>
  </>
)

export default memo(ControlPanel)
