import { createAction } from '@reduxjs/toolkit';

export const parseSizeRequest = createAction('sizes/parseSizeRequest');
export const parseSizeSuccess = createAction('sizes/parseSizeSuccess');
export const parseSizeError = createAction('sizes/parseSizeError');
