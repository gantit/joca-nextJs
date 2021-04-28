import Cross from 'assets/icons/cross'
// svg comunidades https://es.wikipedia.org/wiki/Comunidad_aut%C3%B3noma
const ControlPanel = ({ data, setData }) => (
  <>
    <div className="controlPanel">
      <Cross onClick={() => setData(null)} />
      <h3>{data.comunityName}</h3>
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
        background-color: var(--white);
        border: 1px solid var(--black);
        color: var(--black);
        margin-bottom: 5px;
        margin: 0 auto;
        max-width: 800px;
        padding: 30px;
        position: absolute;
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

      @media (max-width: 420px) {
        .controlPanel {
          padding: 10px;
        }
        .controlPanel :global(svg) {
          top: 20px;
        }
        p {
          margin-left: 0;
        }
      }
    `}</style>
  </>
)

export default ControlPanel
