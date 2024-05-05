import { ChangeEvent, FC, useState } from 'react';
import {
  Input,
  Button,
  PasswordInput
} from '@zlden/react-developer-burger-ui-components';
import styles from '../common.module.css';
import { Link } from 'react-router-dom';
import { LoginUIProps } from './type';

type FormValues = {
  email: string;
  password: string;
};

// Custom hook for managing form state
const useForm = (initialValues: FormValues) => {
  const [values, setValues] = useState<FormValues>(initialValues);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value
    }));
  };

  return [values, handleChange] as const;
};

// UI component for the login page
export const LoginUI: FC<LoginUIProps> = ({ errorText, handleSubmit }) => {
  const initialValues: FormValues = { email: '', password: '' };
  const [values, handleChange] = useForm(initialValues);
  const { email, password } = values;

  return (
    <main className={styles.container}>
      <div className={`pt-6 ${styles.wrapCenter}`}>
        <h3 className='pb-6 text text_type_main-medium'>Вход</h3>
        <form
          className={`pb-15 ${styles.form}`}
          name='login'
          onSubmit={handleSubmit}
        >
          <>
            {/* Input field for email */}
            <div className='pb-6'>
              <Input
                type='email'
                placeholder='E-mail'
                onChange={handleChange}
                value={email}
                name='email'
                error={false}
                errorText=''
                size='default'
                autoComplete='email'
              />
            </div>
            {/* Password input field */}
            <div className='pb-6'>
              <PasswordInput
                onChange={handleChange}
                value={password}
                name='password'
                autoComplete='current-password'
              />
            </div>
            {/* Login button */}
            <div className={`pb-6 ${styles.button}`}>
              <Button type='primary' size='medium' htmlType='submit'>
                Войти
              </Button>
            </div>
            {/* Display error message if exists */}
            {errorText && (
              <p className={`${styles.error} text text_type_main-default pb-6`}>
                {errorText}
              </p>
            )}
          </>
        </form>
        {/* Link to register page */}
        <div className={`pb-4 ${styles.question} text text_type_main-default`}>
          Вы - новый пользователь?
          <Link to='/register' className={`pl-2 ${styles.link}`}>
            Зарегистрироваться
          </Link>
        </div>
        {/* Link to forgot password page */}
        <div className={`${styles.question} text text_type_main-default pb-6`}>
          Забыли пароль?
          <Link to={'/forgot-password'} className={`pl-2 ${styles.link}`}>
            Восстановить пароль
          </Link>
        </div>
      </div>
    </main>
  );
};
