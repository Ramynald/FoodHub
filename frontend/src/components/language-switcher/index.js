import { useState } from 'react'
import styles from './style.module.css'
import { useTranslation } from 'react-i18next'

const LanguageSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [language, setLanguage] = useState('RU')
  const { i18n } = useTranslation()

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
