const Hability = ({ title, habilities }) => (
  <>
    <h3 className="title">{title}</h3>
    <p className="list">
      {habilities.map((hability) => (
        <span key={hability} className="hability">{hability}</span>
      ))}
    </p>
    <style jsx>{`
        .title {
          font-size: 1.8rem;
          margin-bottom: 2rem;
        }
        .list {
          margin-bottom: 2rem;
        }
        .hability {
          background-color: var(--primary);
          padding: 5px;
          font-size: 1.3rem;
          border-radius: 2px;
          margin-right: 4px;
          color: var(--white);
          margin-bottom: 4px;
          white-space: nowrap;
          display: inline-block;
        }

        .hability:hover {
          filter: drop-shadow(0 0 5px #666);
        }
    `}</style>
  </>
)

export default Hability