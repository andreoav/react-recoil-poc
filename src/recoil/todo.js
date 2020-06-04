import { atom, selector } from 'recoil';

export const todosState = atom({
  key: 'todosState',
  default: [],
});

export const sortedTodosState = selector({
  key: 'sortedTodosState',
  get: ({ get }) => {
    return [...get(todosState)].sort((a, b) => {
      return a.description.localeCompare(b.description);
    });
  },
});
