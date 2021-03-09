import { useRef, useState, useLayoutEffect } from "react";

const ListItem = ({ title, description }) => {
  const hover = useRef();
  const [wordWidth, setWordWidth] = useState(hover?.current?.offsetWidth || 0);

  useLayoutEffect(() => {
    const { current } = hover;
    console.log({ c: current.offsetWidth })
    setWordWidth(current.offsetWidth / 2)
  }, [])

  return (
    <>
      <article onMouseEnter={() => console.log('width', hover.current ? hover.current.offsetWidth : 0)}>
        <div className="postsbg" ref={hover}><p>{title.split(" ")[0]}</p></div>
        <h1>
          {title}
        </h1>

        <p>{description}</p>
      </article>
      <style jsx>{`
        .postsbg {
          position: absolute;
          left: 0;
          top: 3.4rem;
          transform: translate(-50%,-50%) rotate(0deg);
          z-index: -2;
          height: 3rem;
          background: transparent;
          overflow: hidden;
          border-radius: 3px;
          transition: all .3s ease;
        }
        .postsbg p{
          left: -1px;
          font-size: 2.6rem;
          margin: 0 1rem;
          width: 100%;
          color: var(--white);
        }
        
        .posts-list {
          max-width: 800px;
          margin: 0 auto;
        }

        article {
          padding: 1rem;
          margin-top: 1rem;
          transition: all .3s ease;
          border-left: 1px solid transparent;
          border-right: 1px solid transparent;
          overflow: hidden;
          position: relative;
        }
        article p, article h1 {
          transition: all .3s ease;
        }
        article:hover {
          border-left-color: var(--primary);
          border-right-color: var(--primary);
        }

        article:hover h1{
          color: var(--primary);
        }
        article:hover p, article:hover h1 {
          transform: translateX(5px)
        }

        article:hover .postsbg {
          z-index: 1;
          left: ${wordWidth}px;
          background: var(--primary);
        }
        article:hover .postsbg p {
          opacity: 1;
          left: 11.5%;
        }
        h1 a {
          color: inherit;
        }
    `}</style>
    </>
  )
}

export default ListItem;