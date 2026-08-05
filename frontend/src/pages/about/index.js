import { Container, Main } from "../../components";
import styles from "./styles.module.css";
import MetaTags from "react-meta-tags";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <Main>
      <MetaTags>
        <title>{t("about.title")}</title>
        <meta
          name="description"
          content={`FoodHub - ${t("about.title")}`}
        />
        <meta property="og:title" content={t("about.title")} />
      </MetaTags>

      <Container>
        <h1 className={styles.title}>{t("about.hello")}</h1>

        <div className={styles.content}>
          <div>
            <h2 className={styles.subtitle}>{t("about.whatIs")}</h2>

            <div className={styles.text}>
              <p className={styles.textItem}>{t("about.paragraph1")}</p>

              <p className={styles.textItem}>{t("about.paragraph2")}</p>

              <h2 className={styles.subtitle}>
                {t("about.featuresTitle")}
              </h2>

              <ul className={styles.text}>
                <li>{t("about.feature1")}</li>
                <li>{t("about.feature2")}</li>
                <li>{t("about.feature3")}</li>
                <li>{t("about.feature4")}</li>
                <li>{t("about.feature5")}</li>
                <li>{t("about.feature6")}</li>
              </ul>

              <h2 className={styles.subtitle}>
                {t("about.futureTitle")}
              </h2>

              <ul className={styles.text}>
                <li>{t("about.future1")}</li>
                <li>{t("about.future2")}</li>
                <li>{t("about.future3")}</li>
                <li>{t("about.future4")}</li>
                <li>{t("about.future5")}</li>
              </ul>

              <p className={styles.textItem}>{t("about.thanks")}</p>
            </div>
          </div>

          <aside>
            <h2 className={styles.additionalTitle}>
              {t("about.links")}
            </h2>

            <div className={styles.text}>
              <p className={styles.textItem}>
                {t("about.repository")} -{" "}
                <a
                  href="#"
                  className={styles.textLink}
                >
                  GitHub
                </a>
              </p>

              <p className={styles.textItem}>
                {t("about.author")} -{" "}
                <a
                  href="#"
                  className={styles.textLink}
                >
                  Nelly Romanenko
                </a>
              </p>
            </div>
          </aside>
        </div>
      </Container>
    </Main>
  );
};

export default About;

