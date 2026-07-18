import styles from './styles.module.css'
import { useContext } from 'react'
import { LinkComponent, Account, Button } from '../index.js'
import { AuthContext } from '../../contexts'
import { useLocation } from 'react-router-dom'
import { NotLoggedInMenu } from '../../configs/navigation'
import { useTranslation } from "react-i18next"

const AccountMenu = ({ onSignOut, orders }) => {
  const authContext = useContext(AuthContext)
  const location = useLocation()
  const { t } = useTranslation()
  if (!authContext) {
    return <div className={styles.menu}>
      {NotLoggedInMenu.map(item => {
        return location.pathname === item.href ? <Button
          href={item.href}
          modifier='style_dark'
          className={styles.menuButton}
        >
          {t(item.title)}
        </Button> : <LinkComponent
          title={t(item.title)}
          href={item.href}
          exact
          className={styles.menuLink}
        />
      })}
    </div>
  }
  return <div className={styles.menu}>
    <Account onSignOut={onSignOut} orders={orders} />
  </div>
}


export default AccountMenu