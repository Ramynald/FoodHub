import styles from './styles.module.css'
import { useTranslation } from "react-i18next"

const Description = ({ description }) => {
  const { t } = useTranslation();
  if (!description) { return null }
  return <div className={styles.description}>
    <h3 className={styles['description__title']}>{t("recipe.description")}:</h3>
    <div className={styles['description__content']}>{description}</div>
  </div>
}

export default Description

