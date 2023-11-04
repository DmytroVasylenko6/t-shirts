import { createSelector } from 'reselect';

export const getColors = state => state.colors.items;
export const getFilter = state => state.colors.filter;

export const getVisibleColors = createSelector(
  [getColors, getFilter],
  (colors, filter) => {
    const normalizeFilter = filter.toLowerCase();
    return colors.filter(({ name }) =>
      name.toLowerCase().includes(normalizeFilter),
    );
  },
);
