import React, { useState, useCallback } from 'react';
import Input from '../common/Input/Input';
import Button from '../common/Button/Button';
import s from './LoginForm.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import fadeNotification from '../../fadeNotification.module.css';
import Notification from '../Notification';
import { authSelectors, authOperations, authActions } from '../../redux/auth';

export default function LoginForm() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [alert, setAlert] = useState(null);

  const dispatch = useDispatch();
  const error = useSelector(authSelectors.getErrorMessage);
  const errorStatus = useSelector(authSelectors.getErrorStatus);

  if (errorStatus) {
    setTimeout(() => {
      dispatch(authActions.errorStatus(false));
    }, 3000);
  }

  const onLogin = useCallback(state => dispatch(authOperations.logIn(state)), [
    dispatch,
  ]);

  const handleInputChange = ({ target: { name, value } }) => {
    if (name === 'name') {
      setName(value);
      return;
    }

    if (name === 'password') {
      setPassword(value);
      return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (name === '' && password === '') {
      visibleMessage('Please enter name and password!');
      return;
    }

    if (name === '') {
      visibleMessage('Please enter name!');
      return;
    }
    if (password === '') {
      visibleMessage('Please enter password!');
      return;
    }

    onLogin({ name, password });

    setName('');
    setPassword('');
  };

  const visibleMessage = stringMessage => {
    setMessage(stringMessage);
    setAlert(true);
    setTimeout(() => {
      setAlert(false);
    }, 3000);
    setTimeout(() => {
      setMessage('');
    }, 4000);
  };

  return (
    <>
      <CSSTransition
        in={alert || errorStatus}
        timeout={1000}
        classNames={fadeNotification}
        unmountOnExit
      >
        <Notification text={message === '' ? error : message} color="red" />
      </CSSTransition>
      <form onSubmit={handleSubmit} className={s.form}>
        <Input
          label="Username"
          type="text"
          name="name"
          value={name}
          placeholder="Enter username..."
          onChange={handleInputChange}
        />

        <Input
          label="Password"
          type="password"
          name="password"
          value={password}
          placeholder="Enter password..."
          onChange={handleInputChange}
        />

        <Button text={'Log in'} type={'submit'} color={'blue'} />
      </form>
    </>
  );
}
