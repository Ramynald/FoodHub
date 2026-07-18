import cn from 'classnames'
import styles from './styles.module.css'
import { useState } from 'react'
import { Icons } from '../index'
import { hexToRgba } from '../../utils'
import { useTranslation } from 'react-i18next'

const Checkbox = ({
  onChange,
  className,
  color,
  value = false,
  name,
  id
}) => {
  const { t } = useTranslation()

  const tagKeys = {
    'Завтрак': 'breakfast',
    'Обед': 'lunch',
    'Ужин': 'dinner',
    'Десерт': 'dessert'
  }
  const clickHandler = () => {
    onChange && onChange(id)
  }
  const classNames = cn(styles['checkbox-container'], className, {
    [styles['checkbox_active']]: value
  })

  return <div className={classNames} onClick={clickHandler}>
    {tagKeys[name] ? t(`tags.${tagKeys[name]}`) : name}
  </div>
}

export default Checkbox