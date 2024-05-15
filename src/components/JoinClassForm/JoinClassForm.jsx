import css from '../JoinClassForm/JoinClassForm.module.css';
import ModalWindow from '../ModalWindow/ModalWindow';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId, useDispatch } from 'react';
import * as Yup from 'yup';

const formSchema = Yup.object().shape({
  code: Yup.string().required('Поле повинно бути заповненим'),
});

const initialValues = {
  code: '',
};

export default function JoinClassForm({ modalOpen, handleClose }) {
  const codeId = useId();

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
          <h2 className={css.formTitle}>Приєднатися до курсу</h2>
          <div className={css.formInputContainer}>
            <label htmlFor={codeId} className={css.formLabel}>
              Код курсу
            </label>
            <Field
              type="text"
              name="code"
              id={codeId}
              className={css.formInput}
            />
            <ErrorMessage
              name="code"
              component="span"
              className={css.formInputError}
            />
          </div>

          <button type="submit" className={css.formSubmitBtn}>
            Приєднатися
          </button>
        </Form>
      </Formik>
    </ModalWindow>
  );
}
