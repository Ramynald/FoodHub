import { Container, Main } from "../../components";
import styles from "./styles.module.css";
import MetaTags from "react-meta-tags";
import { useTranslation } from "react-i18next";

const Technologies = () => {
  const { t } = useTranslation();

  return (
    <Main>
      <MetaTags>
        <title>{t("technologies.title")}</title>
        <meta
          name="description"
          content={`FoodHub - ${t("technologies.title")}`}
        />
        <meta
          property="og:title"
          content={t("technologies.title")}
        />
      </MetaTags>

      <Container>
        <h1 className={styles.title}>
          {t("technologies.title")}
        </h1>

        <div className={styles.content}>
          <div>
            <h2 className={styles.subtitle}>
              {t("technologies.subtitle")}
            </h2>

            <div className={styles.text}>

              <h3 className={styles.subtitle}>Backend</h3>
              <ul>
                <li>Python 3.12</li>
                <li>Django</li>
                <li>Django REST Framework</li>
                <li>PostgreSQL</li>
                <li>Gunicorn</li>
              </ul>

              <h3 className={styles.subtitle}>Frontend</h3>
              <ul>
                <li>React</li>
                <li>JavaScript</li>
                <li>CSS Modules</li>
                <li>React Router</li>
                <li>react-i18next (Localization)</li>
              </ul>

              <h3 className={styles.subtitle}>
                Infrastructure & DevOps
              </h3>
              <ul>
                <li>Docker</li>
                <li>Docker Compose</li>
                <li>Nginx</li>
                <li>Git</li>
                <li>GitHub</li>
                <li>GitHub Actions</li>
              </ul>

              <p className={styles.textItem}>
                {t("technologies.future")}
              </p>

            </div>
          </div>
        </div>
      </Container>
    </Main>
  );
};

export default Technologies;
