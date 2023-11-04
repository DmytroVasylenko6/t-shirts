import React, { useState, useCallback } from 'react';
import Input from '../common/Input/Input';
import Button from '../common/Button/Button';
import { colorDelete, colorUpdate } from '../../redux/colors/colors-operations';
import { useDispatch } from 'react-redux';
import s from './FormEditColor.module.scss';

export default function FormEditColor({ name, number, id }) {
  const [colorName, setColorName] = useState(name);
  const [colorNumber, setColorNumber] = useState(number);
  const [isEditMode, setIsEditMode] = useState(false);
  const [message, setMessage] = useState('');

  const dispatch = useDispatch();

  const handleInputChange = ({ target: { name, value } }) => {
    setMessage('');
    if (!isEditMode) return;
    console.log('handleInputChange  isEditMode:', isEditMode);

    if (name === 'name') {
      setColorName(value);
      return;
    }

    if (name === 'number') {
      setColorNumber(value);
      return;
    }
  };

  const onDeleteColor = useCallback(
    (id, name) => {
      const result = window.confirm(`Do you want to delete color "${name}"?`);
      if (result) {
        dispatch(colorDelete(id));
      }
    },
    [dispatch],
  );

  const onUpdateColor = useCallback(
    (id, name, number) => {
      const pattern = /^\d{5}$/;
      console.log(pattern.test(number));
      if (!pattern.test(number)) {
        console.log('asdasd');
        setMessage('Please enter 5 number!');
        return;
      }
      const result = window.confirm(`Do you want to update color "${name}"?`);
      if (result) {
        dispatch(colorUpdate({ id, name, number }));
        setIsEditMode(false);
      }
    },
    [dispatch],
  );

  const handleCancel = () => {
    setColorName(name);
    setColorNumber(number);
    setIsEditMode(false);
  };

  return (
    <>
      <div>
        <Input
          label="Color name"
          type="text"
          name="name"
          value={colorName}
          placeholder="Enter username..."
          onChange={handleInputChange}
          readOnly={!isEditMode}
        />
        <div>
          <Input
            label="Color number"
            type="text"
            name="number"
            value={colorNumber}
            placeholder="Enter number..."
            onChange={handleInputChange}
            readOnly={!isEditMode}
            // pattern="^\?[0-9]{5}$"
          />
          {message && <span>{message}</span>}
        </div>
        <div>
          {isEditMode ? (
            <>
              <Button
                text={'Save'}
                listener={() => onUpdateColor(id, colorName, colorNumber)}
                color="red"
              />
              <Button
                text={'Cancel'}
                listener={() => handleCancel()}
                color="red"
              />
            </>
          ) : (
            <>
              <Button
                text={'Edit'}
                listener={() => setIsEditMode(true)}
                color="red"
              />
              <Button
                text={'Delete'}
                listener={() => onDeleteColor(id, name)}
                color="red"
              />
            </>
          )}
        </div>
      </div>
    </>
  );
}
