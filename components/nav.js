import { useState } from 'react'
import Link from 'next/link'

import Logo from 'assets/icons/logo'
import Blog from 'assets/icons/blog'
import Git from 'assets/icons/git'
import Twitter from 'assets/icons/twitter'
import About from 'assets/icons/about'
import Sun from 'assets/icons/sun'

const Nav = () => {
  const [isDarkMode, setIsDarkMode] = useState(true)

  const setDarkMode = () => {
    const primary = isDarkMode ? '#a24f50' : '#ff9800'
    const black = isDarkMode ? '#fff' : '#484848'
    const white = isDarkMode ? '#0d1117' : '#fff'

    setIsDarkMode(!isDarkMode)

    document.documentElement.style.setProperty('--primary', primary)
    document.documentElement.style.setProperty('--black', black)
    document.documentElement.style.setProperty('--white', white)
  }

  return (
    <nav>
      <ul>
        <li className="icon logo">
          <Link href="/">
            <a className="center">
              <Logo atl="Logo joca.dev" /> Joca.dev
            </a>
          </Link>
        </li>
        <li>
          <ul>
            <li className="icon blog" data-tooltip="Sobre Mi">
              <Link href="/me">
                <a>
                  <About />
                </a>
              </Link>
            </li>
            <li className="icon blog" data-tooltip="Ir a mi blog">
              <Link href="/blog">
                <a>
                  <Blog />
                </a>
              </Link>
            </li>
            <li className="icon git" data-tooltip="Este es mi github">
              <a href="https://github.com/gantit" atl="Logo github.com">
                <Git />
              </a>
            </li>
            <li className="icon twitter" data-tooltip="Este es mi twitter">
              <a href="https://twitter.com/Gantit" atl="Logo twitter.com">
                <Twitter />
              </a>
            </li>
            <li
              className="darkMode"
              data-tooltip={isDarkMode ? 'In de Dark' : 'In the sun'}
              onClick={setDarkMode}
            >
              <Sun className="darkMode" isDarkMode={isDarkMode} />
            </li>
          </ul>
        </li>
      </ul>

      <style jsx>{`
        .darkMode {
          margin-left: 50px;
        }
        :global(svg.darkMode) {
          width: 30px;
          height: 30px;
          transition: all 0.2s ease-in-out;
          transform: ${isDarkMode ? 'rotate(-180deg);' : 'rotate();'};
        }
        nav {
          background-color: var(--white);
          box-shadow: 0 1px 6px 0 rgb(0 0 0 / 12%);
          position: sticky;
          text-align: center;
          top: 0;
          z-index: 5;
        }

        .logo {
          padding: 6px 0;
        }

        .logo .center {
          font-size: 20px;
        }
        ul,
        .center {
          align-items: center;
          display: flex;
          justify-content: space-between;
          margin: 0 auto;
          max-width: 1200px;
        }
        nav > ul {
          padding: 4px 0;
        }
        li {
          display: flex;
          padding: 6px 8px;
        }

        .logo :global(svg) {
          border-radius: 20px;
          fill: var(--primary);
          height: 40px;
          width: 40px;
        }

        .logo:hover :global(svg) {
          animation: none;
          border-radius: 20px;
          fill: var(--black);
          height: 40px;
          trasition: fill 2s ease-out;
          width: 40px;
        }
      `}</style>
    </nav>
  )
}

export default Nav
