import { React } from 'react';
import LoginForm from '../../components/LoginForm';
import Background from '../../images/wallpaperflare.com_wallpaper.jpg';
import s from './LoginPage.module.scss';

const LoginPage = () => {
  return (
    <div
      className={s.Login}
      style={{
        backgroundImage: `linear-gradient(0.51turn, #1d12127c, #3d00191c), url(${Background})`,
      }}
    >
      <LoginForm />
    </div>
  );
};

export default LoginPage;
