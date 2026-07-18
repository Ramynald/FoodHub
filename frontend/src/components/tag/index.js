import styles from './styles.module.css'
import cn from 'classnames'
import { useTranslation } from 'react-i18next'

const Tag = ({ name, className }) => {
  const { t } = useTranslation()
  const tagKeys = {
    'Завтрак': 'breakfast',
    'Обед': 'lunch',
    'Ужин': 'dinner',
    'Десерт': 'dessert'
  }
  return <div className={cn(styles.tag, className)}>
    {tagKeys[name] ? t(`tags.${tagKeys[name]}`) : name}
  </div>
}

export default Tag
