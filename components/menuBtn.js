const menuBtn = ({ isOpenMenu, setOpenMenu }) => (
  <>
    <div className="container">
      <div className="label" onClick={() => setOpenMenu(!isOpenMenu)}>
        <div className="line" />
      </div>
    </div>
    <style jsx>{`
      .container {
        display: none;
      }
      @media (max-width: 500px) {
        .container {
          display: block;
        }
      }
      .checkBox {
        display: none;
      }
      .label {
        width: 5rem;
        height: 5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        position: relative;
      }
      .label:hover .line::before {
        ${!isOpenMenu ? 'top: 3.2rem;' : ''}
      }
      .label:hover .line::after {
        ${!isOpenMenu ? 'bottom: 3.2rem;' : ''}
      }
      .line {
        transition: all 0.5s ease-in;
      }

      .line,
      .line::before,
      .line::after {
        background-color: var(--black);
        width: 5rem;
        height: 0.5rem;
        border-radius: 5rem;
      }
      .line::before,
      .line::after {
        content: '';
        transition: bottom 0.4s cubic-bezier(0.77, 0, 0.175, 1),
          top 0.4s cubic-bezier(0.77, 0, 0.175, 1),
          transform 0.4s 0.4s cubic-bezier(0.77, 0, 0.175, 1);
        position: absolute;
        left: 0;
      }

      .line::after {
        bottom: 3.5rem;
      }
      .line::before {
        top: 3.5rem;
      }
      .label .line {
        ${isOpenMenu ? 'background-color: transparent;' : ''}
      }
      .label .line::before {
        ${isOpenMenu
          ? `
            top: 2.2rem;
            transform: rotate(-45deg);
          `
          : `
            transform: rotate(0deg);
          `}
      }
      .label .line::after {
        ${isOpenMenu
          ? `
            bottom: 2.3rem;
            transform: rotate(45deg);
          `
          : `
            transform: rotate(0deg);
          `}
      }
    `}</style>
  </>
)

export default menuBtn
