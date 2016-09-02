export const SHOW_ALL = 'SHOW_ALL';
export const SHOW_COMPLETED = 'SHOW_COMPLETED';
export const SHOW_NOT_COMPLETED = 'SHOW_NOT_COMPLETED';

export const showAll = () => ({
  type: SHOW_ALL
});

export const showCompleted = () => ({
  type: SHOW_COMPLETED
});

export const showNotCompleted = () => ({
  type: SHOW_NOT_COMPLETED
});

// export const filterByChar = ch => ({
//   type: FILTER_BY_CHAR,
//   ch
// });
