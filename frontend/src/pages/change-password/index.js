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
import { AuthContext } from "../../contexts";
import { Redirect } from "react-router-dom";
import { useContext } from "react";
import MetaTags from "react-meta-tags";
import { ChangePasswordText } from "../../components/change-password-text";
import { useTranslation } from "react-i18next";

const ChangePassword = ({ onPasswordChange, submitError, setSubmitError }) => {
  const { t } = useTranslation();
  const { values, handleChange, errors, isValid, resetForm } =
    useFormWithValidation();
  const authContext = useContext(AuthContext);

  const onChange = (e) => {
    setSubmitError({ submitError: "" });
    handleChange(e);
  };

  return (
    <Main withBG asFlex>
      <Container className={styles.center}>
        <MetaTags>
          <title>Изменить пароль</title>
          <meta
            name="description"
            content="Фудграм - Изменить пароль"
          />
          <meta property="og:title" content="Изменить пароль" />
        </MetaTags>
        <Form
          className={styles.form}
          onSubmit={(e) => {
            e.preventDefault();
            onPasswordChange(values);
          }}
        >
          <FormTitle>{t("changePassword.title")}</FormTitle>
          <Input
            required
            isAuth={true}
            placeholder={t("changePassword.currentPassword")}
            type="password"
            name="current_password"
            error={errors}
            onChange={onChange}
          />
          <Input
            required
            isAuth={true}
            placeholder={t("changePassword.newPassword")}
            type="password"
            name="new_password"
            error={errors}
            onChange={onChange}
          />
          <ul className={styles.texts}>
            <li className={styles.text}>
              <ChangePasswordText text={t("changePassword.rule1")} />
            </li>
            <li className={styles.text}>
              <ChangePasswordText text={t("changePassword.rule2")} />
            </li>
            <li className={styles.text}>
              <ChangePasswordText text={t("changePassword.rule3")} />
            </li>
            <li className={styles.text}>
              <ChangePasswordText text={t("changePassword.rule4")} />
            </li>
          </ul>
          <Input
            required
            isAuth={true}
            placeholder={t("changePassword.repeatPassword")}
            type="password"
            name="repeat_password"
            error={errors}
            submitError={submitError}
            onChange={onChange}
          />
          <Button
            modifier="style_dark"
            type="submit"
            className={styles.button}
            disabled={
              !isValid || values.new_password !== values.repeat_password
            }
          >
            {t("changePassword.button")}
          </Button>
        </Form>
      </Container>
    </Main>
  );
};

export default ChangePassword;
