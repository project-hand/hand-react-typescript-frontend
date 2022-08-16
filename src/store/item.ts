import { atom, selector, selectorFamily, type RecoilState } from 'recoil';
import { axios } from '@/lib';
import { ItemStateProps } from '@/types/item';

const defaultState: ItemStateProps = {
  usingItem: [],
  sidebarItem: [
    {
      index: 1,
      item: 'CAL',
    },
    {
      index: 2,
      item: 'MEMO',
    },
    {
      index: 3,
      item: 'TODO',
    },
    {
      index: 4,
      item: 'WEATHER'
    }
  ]
};

export const itemAtom = atom<ItemStateProps>({
  key: 'Item',
  default: defaultState,
});

// export const userFieldQuery = selectorFamily({
//   key: 'UserFieldQuery',
//   get:
//     (field: keyof UserState) =>
//       ({ get }) => {
//         if (userState === null) return undefined;
//         return get(userState)![field];
//       },
//   set:
//     (field: keyof UserState) =>
//       ({ set }, newValue) =>
//         set(userState, (prevState) => {
//           return { ...prevState, [field]: newValue };
//         }),
// });
