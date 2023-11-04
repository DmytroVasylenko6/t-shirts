import { React } from 'react';
import Section from '../../components/common/Section/Section';
import LoginForm from '../../components/LoginForm';

const LoginPage = () => {
  return (
    <div className="App">
      <Section title="Login">
        <LoginForm />
      </Section>
    </div>
  );
};

export default LoginPage;
