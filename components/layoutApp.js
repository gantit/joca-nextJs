import { useRouter } from "next/router"

import Nav from 'components/nav';
import Transition from 'components/transition'

const Layout = ({ children }) => {
  const router = useRouter()
  return (
    <>
      <div className="layoutContainer">
        <header>
          <Nav />
        </header>
        <Transition location={router.pathname}>
          <main className="content">{children}</main>
        </Transition>
      </div>
      <style jsx>{`
      header {
        position: sticky;
        top: 0;
        z-index: 1;
        filter: opacity(0.9);
      }
      .layoutContainer {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: auto;
        padding: 1rem;
      }
      .content {
        padding: 1rem;
        border-radius: 10px;
      }
    `}</style>
    </>
  )
}
export default Layout