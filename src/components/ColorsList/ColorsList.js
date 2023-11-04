import React from 'react';
import { useSelector } from 'react-redux';
import { getVisibleColors } from '../../redux/colors/colors-selectors';
import PropTypes from 'prop-types';
import s from './ColorsList.module.css';
import './fade.css';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import FormEditColor from '../FormEditColor';

export default function ColorsList() {
  const colors = useSelector(getVisibleColors);

  return (
    <>
      <TransitionGroup component="ul" className={s.list}>
        {colors.map(({ name, number, _id }) => {
          return (
            <CSSTransition
              key={_id}
              timeout={250}
              classNames="e-fade"
              appear={true}
            >
              <li id={_id} className={s.item}>
                <div className={s.colorsText}>
                  <FormEditColor name={name} number={number} id={_id} />
                </div>
              </li>
            </CSSTransition>
          );
        })}
      </TransitionGroup>
    </>
  );
}

ColorsList.propTypes = {
  colors: PropTypes.array.isRequired,
  onDeleteColor: PropTypes.func,
};
