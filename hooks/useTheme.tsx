import { useEffect, useState } from 'react'

const LIGHT_THEME = 'light'
const DARK_THEME = 'dark'
const KEY_THEME = 'theme'
export const useTheme = () => {
  const [theme, setTheme] = useState('')
  const toggleTheme = () => { setTheme(theme === DARK_THEME ? LIGHT_THEME : DARK_THEME) }

  useEffect(() => {
    const localTheme = localStorage.getItem(KEY_THEME)
    if (localTheme === null) {
      localStorage.setItem(KEY_THEME, LIGHT_THEME)
    } else {
      setTheme(localTheme)
    }
  }, [])

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
      localStorage.setItem(KEY_THEME, theme)
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.removeItem(KEY_THEME)
    }
  }, [theme])

  return {
    theme,
    toggleTheme
  }
}
