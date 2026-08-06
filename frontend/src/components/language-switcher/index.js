import { useState } from 'react'
import styles from './style.module.css'
import { useTranslation } from 'react-i18next'

const LanguageSwitcher = () => {
  const { i18n } = useTranslation()

  const [isOpen, setIsOpen] = useState(false)
  const [language, setLanguage] = useState(
    i18n.language === 'en' ? 'EN' : 'RU'
  )

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
              localStorage.setItem('language', 'ru')
              i18n.changeLanguage('ru')
              setLanguage('RU')
              setIsOpen(false)
            }}
          >
            Русский
          </div>

          <div
            className={language === 'EN' ? styles.active : ''}
            onClick={() => {
              localStorage.setItem('language', 'en')
              i18n.changeLanguage('en')
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
