import css from './LoginForm.module.css';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/operations';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const formSchema = Yup.object().shape({
  email: Yup.string()
    .email('Будь ласка, введіть валідну адресу')
    .required("Поле є обов'язковим"),
  password: Yup.string().required("Поле є обов'язковим"),
});

const initialValues = {
  email: '',
  password: '',
};

export default function LoginForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    // dispatch(
    //   login({
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
        <h2 className={css.formHeader}>LogIn</h2>
        <p className={css.text}>Увійдіть в акаунт</p>

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

        <button type="submit" className={css.formSubmitBtn}>
          Увійти
        </button>
      </Form>
    </Formik>
  );
}
