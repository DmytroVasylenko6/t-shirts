import PropTypes from 'prop-types';
import s from './Section.module.scss';
import { CSSTransition } from 'react-transition-group';
import classNames from 'classnames';

export default function Section({ title, children, appear, styles, image }) {
  const style = [styles === 'phonebook' ? s.titlePhonebook : s.titleContacts];

  return (
    <section className={s.section}>
      <CSSTransition
        in={true}
        appear={appear}
        timeout={500}
        classNames={s}
        unmountOnExit
      >
        <div className={s.titleContainer}>
          {image && <img src={image} width="50" height="50" />}
        </div>
      </CSSTransition>
      {title && <h2 className={classNames(style.join(' '))}>{title}</h2>}
      {children}
    </section>
  );
}

Section.propTypes = {
  title: PropTypes.string,
};
