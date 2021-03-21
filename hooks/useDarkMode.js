import { useEffect, useState } from 'react'

const useDarkMode = () => {
  const [theme, setTheme] = useState('light')
  const [componentMounted, setComponentMounted] = useState(false)
  const setMode = (mode) => {
    window.localStorage.setItem('theme', mode)

    const primary = mode === 'dark' ? '#a24f50' : '#ff9800'
    const black = mode === 'dark' ? '#fff' : '#484848'
    const white = mode === 'dark' ? '#0d1117' : '#fff'
    document.documentElement.style.setProperty('--primary', primary)
    document.documentElement.style.setProperty('--black', black)
    document.documentElement.style.setProperty('--white', white)

    console.log('setMode', mode)

    setTheme(mode)
  }

  const toggleTheme = () => {
    if (theme === 'light') {
      setMode('dark')
    } else {
      setMode('light')
    }
  }

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme')
    if (localTheme) {
      setMode(localTheme)
    }
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches &&
    !localTheme
      ? setMode('dark')
      : localTheme
      ? setTheme(localTheme)
      : setMode('light')
    setComponentMounted(true)
  }, [])

  return [theme, toggleTheme, componentMounted]
}

export default useDarkMode
