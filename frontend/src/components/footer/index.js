import styles from './style.module.css'
import { Container, LinkComponent } from '../index'
import LogoFooter from '../../images/logo-footer.png'
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return <footer className={styles.footer}>
    <Container className={styles.footer__container}>
      <LinkComponent
        href='#'
        className={styles.footer__brand}
        title={<img src={LogoFooter} className={styles.footer__logo} />}
      />

      <div className={styles['footer__menu']}>
        <ul className={styles['footer__menu-list']}>
          <li className={styles['footer__menu-item']}>
            <LinkComponent
              title={t("footer.about")}
              href='/about'
              exact
              className={styles['footer__menu-link']}
            />
          </li>
          <li className={styles['footer__menu-item']}>
            <LinkComponent
              title={t("footer.technologies")}
              href='/technologies'
              exact
              className={styles['footer__menu-link']}
            />
          </li>
        </ul>
      </div>

      <div className={styles.footer__copyright}>
      © {(new Date()).getFullYear()}
      </div>
    </Container>
  </footer>
}

export default Footer
