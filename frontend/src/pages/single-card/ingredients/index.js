import styles from './styles.module.css'
import { useTranslation } from "react-i18next"

const Ingredients = ({ ingredients }) => {
  const { t } = useTranslation();
  if (!ingredients) { return null }
  return <div className={styles.ingredients}>
    <h3 className={styles['ingredients__title']}>{t("recipe.ingredients")}:</h3>
    <ul className={styles['ingredients__list']}>
      {ingredients.map(({
        name,
        amount,
        measurement_unit
      }) => <li
        key={`${name}${amount}${measurement_unit}`}
        className={styles['ingredients__list-item']}
      >
        {name} - {amount} {measurement_unit}
      </li>)}
    </ul>
  </div>
}

export default Ingredients

