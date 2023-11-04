import PropTypes from 'prop-types';
import s from './PageContainer.module.scss';

function PageContainer({ children }) {
  return <div className={s.pageContainer}>{children}</div>;
}

PageContainer.propTypes = {
  children: PropTypes.object,
};

export default PageContainer;
