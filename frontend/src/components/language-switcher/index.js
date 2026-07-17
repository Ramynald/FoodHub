import { useState } from 'react'
import styles from './style.module.css'

const LanguageSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [language, setLanguage] = useState('RU')

  return (
    <div className={styles.wrapper}>
      <button
        className={styles.languageButton}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{language}</span>
        <span
          className={`${styles.arrow} ${isOpen ? styles.arrowOpen : ''}`}
        >
          ▼
        </span>
      </button>

      {isOpen && (
        <div className={styles.menu}>
          <div
            className={language === 'RU' ? styles.active : ''}
            onClick={() => {
              setLanguage('RU')
              setIsOpen(false)
            }}
          >
            Русский
          </div>

          <div
            className={language === 'EN' ? styles.active : ''}
            onClick={() => {
              setLanguage('EN')
              setIsOpen(false)
            }}
          >
            English
          </div>
        </div>
      )}
    </div>
  )
}

export default LanguageSwitcher
