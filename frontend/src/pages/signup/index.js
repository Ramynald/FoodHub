import {
  Container,
  Input,
  FormTitle,
  Main,
  Form,
  Button,
} from "../../components";
import styles from "./styles.module.css";
import { useFormWithValidation } from "../../utils";
import { Redirect } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts";
import MetaTags from "react-meta-tags";
import { useTranslation } from "react-i18next";

const SignUp = ({ onSignUp, submitError, setSubmitError }) => {
  const { t } = useTranslation();
  const { values, handleChange, errors } = useFormWithValidation();
  const authContext = useContext(AuthContext);
  
  const onChange = (e) => {
    setSubmitError({ submitError: "" });
    handleChange(e);
  };

  return (
    <Main withBG asFlex>
      {authContext && <Redirect to="/recipes" />}
      <Container className={styles.center}>
        <MetaTags>
          <title>Регистрация</title>
          <meta
            name="description"
            content="Фудграм - Регистрация"
          />
          <meta property="og:title" content="Регистрация" />
        </MetaTags>
        <Form
          className={styles.form}
          onSubmit={(e) => {
            e.preventDefault();
            onSignUp(values);
          }}
        >
          <FormTitle>{t("signup.title")}</FormTitle>
          <Input
            placeholder={t("signup.firstName")}
            name="first_name"
            required
            isAuth={true}
            error={errors}
            onChange={onChange}
          />
          <Input
            placeholder={t("signup.lastName")}
            name="last_name"
            required
            isAuth={true}
            error={errors}
            onChange={onChange}
          />
          <Input
            placeholder={t("signup.username")}
            name="username"
            required
            isAuth={true}
            error={errors}
            onChange={onChange}
          />

          <Input
            placeholder={t("signup.email")}
            name="email"
            required
            isAuth={true}
            error={errors}
            onChange={onChange}
          />
          <Input
            placeholder={t("signup.password")}
            type="password"
            name="password"
            required
            isAuth={true}
            error={errors}
            submitError={submitError}
            onChange={onChange}
          />
          <Button modifier="style_dark" type="submit" className={styles.button}>
            {t("signup.createAccount")}
          </Button>
        </Form>
      </Container>
    </Main>
  );
};

export default SignUp;
