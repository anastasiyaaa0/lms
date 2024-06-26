import css from './RegistrationForm.module.css';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const formSchema = Yup.object().shape({
  username: Yup.string()
    .matches(/^[\p{L}\s]+$/u, "Ім'я може містити лише літери та пробіли")
    .min(3, "Дуже коротке ім'я")
    .max(50, "Дуже довге ім'я")
    .required("Поле є обов'язковим"),
  email: Yup.string()
    .email('Будь ласка, введіть валідну адресу')
    .required("Поле є обов'язковим"),
  password: Yup.string().required("Поле є обов'язковим"),
  duplicatedPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Паролі не співпадають')
    .required("Поле є обов'язковим"),
});

const initialValues = {
  username: '',
  email: '',
  password: '',
  duplicatedPassword: '',
};

export default function RegistrationForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    // dispatch(
    //   register({
    //     name: values.username,
    //     email: values.email,
    //     password: values.password,
    //   })
    // );

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={formSchema}
    >
      <Form className={css.form}>
        <h2 className={css.formHeader}>SignUp</h2>
        <p className={css.text}>Створіть новий акаунт</p>
        <div className={css.formInputContainer}>
          <Field
            type="text"
            name="username"
            placeholder="Ім'я та прізвище"
            className={css.formInput}
          />
          <ErrorMessage
            name="username"
            component="span"
            className={css.formInputError}
          />
        </div>

        <div className={css.formInputContainer}>
          <Field
            type="email"
            name="email"
            placeholder="Електронна пошта"
            className={css.formInput}
          />
          <ErrorMessage
            name="email"
            component="span"
            className={css.formInputError}
          />
        </div>

        <div className={css.formInputContainer}>
          <Field
            type="password"
            name="password"
            placeholder="Пароль"
            className={css.formInput}
          />
          <ErrorMessage
            name="password"
            component="span"
            className={css.formInputError}
          />
        </div>

        <div className={css.formInputContainer}>
          <Field
            type="password"
            name="duplicatedPassword"
            placeholder="Повторіть пароль"
            className={css.formInput}
          />
          <ErrorMessage
            name="duplicatedPassword"
            component="span"
            className={css.formInputError}
          />
        </div>

        <button type="submit" className={css.formSubmitBtn}>
          Реєстрація
        </button>
      </Form>
    </Formik>
  );
}
