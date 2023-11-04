import { createAction } from '@reduxjs/toolkit';

export const parseColorRequest = createAction('colors/parseColorRequest');
export const parseColorSuccess = createAction('colors/parseColorSuccess');
export const parseColorError = createAction('colors/parseColorError');

export const addColorRequest = createAction('colors/addColorRequest');
export const addColorSuccess = createAction('colors/addColorSuccess');
export const addColorError = createAction('colors/addColorError');

export const updateColorRequest = createAction('colors/updateColorRequest');
export const updateColorSuccess = createAction('colors/updateColorSuccess');
export const updateColorError = createAction('colors/updateColorError');

export const deleteColorRequest = createAction('colors/deleteColorRequest');
export const deleteColorSuccess = createAction('colors/deleteColorSuccess');
export const deleteColorError = createAction('colors/deleteColorError');

export const colorFilter = createAction('colors/filter');
