import { useRef, useEffect, useState } from 'react'

const Experience = ({ title, company, date, children }) => {
  const item = useRef()
  const [itemHeight, setItemHeight] = useState(item?.current?.offsetWidth || 0)

  useEffect(() => {
    const { current } = item
    setItemHeight(current.offsetHeight)
  }, [item?.current?.offsetHeight])

  return (
    <>
      <div className="experience" ref={item}>
        <h3>
          {title} <span className="company">{company}</span>
        </h3>
        <p className="date">{date}</p>
        <p>{children}</p>
      </div>
      <style jsx>{`
        h3 {
          margin-bottom: 0;
        }
        .company {
          font-size: 1.4rem;
          color: var(--primary);
        }

        .date {
          font-size: 12px;
          margin: 0;
          padding: 0;
          color: var(--secondary);
        }

        .experience {
          margin-top: 20px;
          position: relative;
          padding-left: 30px;
        }
        .experience:first-child {
          margin-top: 0;
        }
        .experience:before {
          background-color: var(--white);
          border-radius: 50%;
          border: 2px solid var(--primary);
          content: '';
          height: 10px;
          left: 0px;
          position: absolute;
          top: 7px;
          width: 10px;
          z-index: 1;
        }
        .experience:after {
          border-left: 2px solid var(--primary);
          content: '';
          height: ${itemHeight + 15}px;
          left: 6px;
          position: absolute;
          top: 12px;
          width: 48px;
        }

        .experience:last-child:after {
          border-bottom: 0;
          border-image: linear-gradient(
              to bottom,
              var(--primary),
              rgba(0, 0, 0, 0)
            )
            1 100%;
        }
      `}</style>
    </>
  )
}

export default Experience
