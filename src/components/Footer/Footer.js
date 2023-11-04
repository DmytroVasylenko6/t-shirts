import React from 'react';

import s from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={s.Footer}>
      <p className={s.Item}>Wroclaw</p>
      <p className={s.Item}>-2023-</p>
      <p className={s.Item}>Chaika Andrii</p>
    </footer>
  );
}
