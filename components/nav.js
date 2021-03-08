import Link from 'next/link';

const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link href="/">
          <a>Inicio</a>
        </Link>
      </li>
      <li className="block">
        <Link href="/blog">
          <a>blog</a>
        </Link>
      </li>
      <li>
        <a href='https://github.com/gantit'>GitHub</a>
      </li>
      <li>
        <a href='https://twitter.com/Gantit'>Twitter</a>
      </li>
    </ul>

    <style jsx>{`
      @import url('https://fonts.googleapis.com/css?family=Source+Code+Pro&display=swap');
      :global(body) {
        margin: 0;
        font-family: 'Source Code Pro', -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
          Helvetica, sans-serif;
      }
      nav {
        background-color: #ffffff;
        box-shadow: 0 1px 6px 0 rgb(0 0 0 / 12%);
        height: 50px;
        position: sticky;
        text-align: center;
        top: 0;
        z-index: 5;
      }
      ul {
        display: flex;
        justify-content: space-between;
        margin: 0;
        line-height: 34px;
      }
      nav > ul {
        padding: 4px 16px;
      }
      li {
        display: flex;
        padding: 6px 8px;
      }
      a {
        color: #067df7;
        text-decoration: none;
        font-size: 13px;
      }
    `}</style>
  </nav>
);

export default Nav;
