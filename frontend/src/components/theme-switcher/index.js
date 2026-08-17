import { useEffect, useState } from 'react'
import styles from './style.module.css'

const ThemeSwitcher = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark'
  })

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.body.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [darkMode])

  return (
    <button
      className={styles.switch}
      onClick={() => setDarkMode(!darkMode)}
    >
      <span className={styles.icon}>☀️</span>

      <div
        className={`${styles.slider} ${
          darkMode ? styles.sliderDark : ''
        }`}
      >
        <div
          className={`${styles.thumb} ${
            darkMode ? styles.thumbDark : ''
          }`}
        />
      </div>

      <span className={styles.icon}>🌙</span>
    </button>
  )
}

export default ThemeSwitcher