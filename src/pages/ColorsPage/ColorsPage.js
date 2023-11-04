import React, { useEffect } from 'react';
import Section from '../../components/common/Section/Section';
import ColorsList from '../../components/ColorsList/ColorsList';
import FormAddColor from '../../components/FormAddColor/FormAddColor';
import shortid from 'shortid';
import Input from '../../components/common/Input/Input';
import Container from '../../components/common/Container/Container';
import { CSSTransition } from 'react-transition-group';
import fadeFindColors from '../../fadeFindColors.module.css';
import * as colorsAction from '../../redux/colors/colors-actions';
import { colorsParse } from '../../redux/colors/colors-operations';
import { getFilter, getColors } from '../../redux/colors/colors-selectors';
import { useDispatch, useSelector } from 'react-redux';
import Logo from '../../images/hft.svg';

export default function AdminPage() {
  const colors = useSelector(getColors);
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(colorsParse());
  }, [dispatch]);

  const inputFindId = shortid.generate();

  const handleFindChange = event => {
    const filterValue = event.currentTarget;
    dispatch(colorsAction.colorFilter(filterValue.value));
  };

  return (
    <>
      <Section
        title="Add new color"
        image={Logo}
        appear={true}
        styles="phonebook"
      >
        <FormAddColor />
      </Section>

      <Section title="Colors">
        <CSSTransition
          in={colors.length > 1}
          timeout={250}
          classNames={fadeFindColors}
          unmountOnExit
        >
          <Container>
            <Input
              label="Find colors by name"
              type="text"
              name="filter"
              value={filter}
              id={inputFindId}
              placeholder="Find..."
              onChange={handleFindChange}
            />
          </Container>
        </CSSTransition>

        {colors.length === 0 ? (
          <span style={{ display: 'block', textAlign: 'center' }}>
            No colors
          </span>
        ) : (
          <ColorsList colors={colors} />
        )}
      </Section>
    </>
  );
}
