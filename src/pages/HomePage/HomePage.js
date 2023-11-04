import { React } from 'react';
import Section from '../../components/common/Section/Section';
import s from './Homepage.module.css';

const HomePage = () => {
  return (
    <div className="App">
      <Section title="PHONEBOOK">
        <p className={s.description}>
          You need to register to continue using this application.
        </p>
      </Section>
    </div>
  );
};

export default HomePage;
