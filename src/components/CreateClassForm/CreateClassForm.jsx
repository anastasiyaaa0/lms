import css from '../CreateClassForm/CreateClassForm.module.css';
import ModalWindow from '../ModalWindow/ModalWindow';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId, useDispatch } from 'react';
import * as Yup from 'yup';

const formSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, 'Повинно містити мінімум 3 символи')
    .max(50, 'Повинно містити максимум 50 символів')
    .required('Поле повинно бути заповненим'),
  descriprion: Yup.string()
    .min(2, 'Повинно містити мінімум 3 символи')
    .max(50, 'Повинно містити максимум 50 символів')
    .required('Поле повинно бути заповненим'),
});

const initialValues = {
  title: '',
  descriprion: '',
};

export default function CreateClassForm({ modalOpen, handleClose }) {
  const titleFieldId = useId();
  const descriptionFieldId = useId();

  const handleSubmit = (values, actions) => {
    //   dispatch(
    //     register({
    //       // id: nanoid(),
    //       name: values.username,
    //       email: values.email,
    //       password: values.password,
    //     })
    //   );
    actions.resetForm();
    handleClose();
  };

  return (
    <ModalWindow modalOpen={modalOpen} handleClose={handleClose}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={formSchema}
      >
        <Form className={css.form}>
          <h2 className={css.formTitle}>Створити курс</h2>
          <div className={css.formInputContainer}>
            <label htmlFor={titleFieldId} className={css.formLabel}>
              Назва курсу
            </label>
            <Field
              type="text"
              name="title"
              id={titleFieldId}
              className={css.formInput}
            />
            <ErrorMessage
              name="title"
              component="span"
              className={css.formInputError}
            />
          </div>

          <div className={css.formInputContainer}>
            <label htmlFor={descriptionFieldId} className={css.formLabel}>
              Опис курсу
            </label>
            <Field
              type="text"
              name="descriprion"
              id={descriptionFieldId}
              className={css.formInput}
            />
            <ErrorMessage
              name="descriprion"
              component="span"
              className={css.formInputError}
            />
          </div>

          <button type="submit" className={css.formSubmitBtn}>
            Створити
          </button>
        </Form>
      </Formik>
    </ModalWindow>
  );
}
