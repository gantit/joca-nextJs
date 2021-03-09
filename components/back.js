
import Link from 'next/link'
import BackIcon from "assets/icons/back";

const Back = ({ url = '/' }) => (
  <>
    <Link href={url}>
      <a className="icon icon_back center">
        <BackIcon atl="Arrow go to back" />
        <span>volver</span>
      </a>
    </Link>
    <style jsx>{`
      a.icon_back{
        width: 100px;
        margin: 14px;
        text-decoration: none;
        transition: all .2s ease; 
        overflow: hidden;
      }
      a.icon_back :global(svg){
        background: var(--white);
        margin-right: 10px;
        z-index: 1;
      }
      a.icon_back:hover :global(svg){
        margin-right: 2px;
        animation: none;
        transform: translateX(2px)
      }
      a.icon_back span{
        display: block;
        transition: all .3s ease;
      }
      a.icon_back:hover span{
        display: block;
        transform: translateX(-200px);
      }
      a.icon_back:hover{
        color: var(--primary);
        animation: bounceX 0.2s;
        animation-direction: alternate;
        animation-iteration-count: 5;
      }
      @media (max-width: 1080px) {
        a.icon_back {
          background: var(--white);
          border-radius: 10px;
          border: 1px solid var(--black);
          padding: 5px;
        }
      }
      
    `}</style>
  </>
)

export default Back;