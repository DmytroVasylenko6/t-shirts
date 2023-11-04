import React, { useState, useCallback } from 'react';
import shortid from 'shortid';
import Input from '../common/Input/Input';
import Button from '../common/Button/Button';
import s from './Form.module.css';
import { CSSTransition } from 'react-transition-group';
import fadeNotification from '../../fadeNotification.module.css';
import Notification from '../Notification';
import { useSelector, useDispatch } from 'react-redux';
import { colorAdd } from '../../redux/colors/colors-operations';
import { getVisibleColors } from '../../redux/colors/colors-selectors';

export default function Form() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [message, setMessage] = useState('');
  const [alert, setAlert] = useState(null);

  const colors = useSelector(getVisibleColors);
  const dispatch = useDispatch();

  const addColor = useCallback(newColor => dispatch(colorAdd(newColor)), [
    dispatch,
  ]);

  const inputNameId = shortid.generate();
  const inputNumberId = shortid.generate();

  const handleInputChange = event => {
    const { name, value } = event.currentTarget;
    if (name === 'name') {
      setName(value);
      return;
    }

    if (name === 'number') {
      setNumber(value);
      return;
    }
  };

  const handleAddColor = e => {
    e.preventDefault();
    handleSubmitForm(name, number);
  };

  const handleSubmitForm = (name, number) => {
    if (name === '') {
      visibleMessage('Please enter color name!');
      return;
    }
    if (number === '') {
      visibleMessage('Please enter color phone number!');
      return;
    }

    const hasColor = colors.some(color => color.name === name);

    if (hasColor) {
      visibleMessage(`${name} is already in colors!`);
    } else {
      addColor({ name, number });
    }

    reset();
  };

  const visibleMessage = stringMessage => {
    setMessage(stringMessage);
    setAlert(true);
    setTimeout(() => {
      setAlert(false);
    }, 3000);
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <>
      <CSSTransition
        in={alert}
        timeout={1000}
        classNames={fadeNotification}
        unmountOnExit
      >
        <Notification text={message} color="red" />
      </CSSTransition>
      <form onSubmit={handleAddColor} className={s.form}>
        <Input
          label="Name"
          type="text"
          name="name"
          value={name}
          id={inputNameId}
          placeholder="Enter name..."
          onChange={handleInputChange}
        />

        <Input
          label="Number"
          type="number"
          name="number"
          value={number}
          id={inputNumberId}
          placeholder="00000"
          onChange={handleInputChange}
          pattern="^\?[0-9]{5}$"
        />

        <Button text={'Add color'} type={'submit'} color={'blue'} />
      </form>
    </>
  );
}
