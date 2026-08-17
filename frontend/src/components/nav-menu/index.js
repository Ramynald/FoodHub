import navigation from '../../configs/navigation'
import cn from 'classnames'
import styles from './style.module.css'
import { useLocation } from 'react-router-dom'
import { LinkComponent } from '../index.js'
import { useTranslation } from 'react-i18next'

const NavMenu = ({
  loggedIn
}) => {
  const location = useLocation()
  const { t } = useTranslation()

  const renderMenuItem = (item) => {
    if (!loggedIn && item.auth) {
      return null
    }

    const isActive = location.pathname === item.href

    return (
      <li
        className={cn(styles['nav-menu__item'], {
          [styles['nav-menu__item_active']]: isActive
        })}
        key={item.href}
      >
        <LinkComponent
          title={t(item.title)}
          activeClassName={styles['nav-menu__link_active']}
          href={item.href}
          exact
          className={styles['nav-menu__link']}
        />
      </li>
    )
  }

  return (
    <ul className={styles['nav-menu']}>
      {navigation.map(item => renderMenuItem(item))}
    </ul>
  )
}

export default NavMenu