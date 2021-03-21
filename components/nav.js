import { useState } from 'react'
import Link from 'next/link'

import Logo from 'assets/icons/logo'
import Blog from 'assets/icons/blog'
import Git from 'assets/icons/git'
import Twitter from 'assets/icons/twitter'
import About from 'assets/icons/about'
import Sun from 'assets/icons/sun'

import useDarkMode from 'hooks/useDarkMode'

const Nav = () => {
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [theme, toggleTheme] = useDarkMode()

  const setDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    toggleTheme()
  }

  return (
    <nav>
      <ul>
        <li className="icon logo">
          <Link href="/">
            <a className="center">
              <Logo alt="Logo joca.dev" /> Joca.dev
            </a>
          </Link>
        </li>
        <li>
          <ul className="menuIcon">
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
              <a
                href="https://github.com/gantit"
                alt="Logo github.com"
                target="_blank"
              >
                <Git />
              </a>
            </li>
            <li className="icon twitter" data-tooltip="Este es mi twitter">
              <a
                href="https://twitter.com/Gantit"
                alt="Logo twitter.com"
                target="_blank"
              >
                <Twitter />
              </a>
            </li>
          </ul>
        </li>
        <li
          className="darkMode"
          data-tooltip={theme === 'light' ? 'In de Dark' : 'In the sun'}
          onClick={setDarkMode}
        >
          <Sun className="darkMode" isDarkMode={theme === 'light'} />
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

        @media (max-width: 500px) {
          .menuIcon {
            position: absolute;
            right: 0;
            background-color: white;
            z-index: 1;
            border: 1px solid black;
            top: 94vh;
            box-shadow: 0 1px 6px 0 rgb(0 0 0 / 12%);
          }
          .darkMode {
            margin-left: 0;
          }
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
