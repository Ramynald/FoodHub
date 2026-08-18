import styles from './style.module.css'
import { Nav, AccountMenu, LinkComponent } from '../index.js'
import Container from '../container'
import LogoHeader from '../../images/logo-header.png'
import LogoHeaderDark from '../../images/logo-header-dark.png'

const Header = ({ loggedIn, onSignOut, orders, darkMode, onThemeChange }) => {
  return <header className={styles.header}>
    <Container>
      <div className={styles.headerContent}>
        <LinkComponent
          className={styles.headerLink}
          title={
            <img
              className={styles.headerLogo}
              src={darkMode ? LogoHeaderDark : LogoHeader}
              alt='FoodHub'
            />
          }
          href='/'
        />
        <Nav
          loggedIn={loggedIn}
          onSignOut={onSignOut}
          orders={orders}
          onThemeChange={onThemeChange}
        />
      </div>
    </Container>
  </header>
}

export default Header
