import { atom, selector, selectorFamily, type RecoilState } from 'recoil';
import { axios } from '@/lib';
import { UserStateProps } from '@/types/user';

export const userState = atom<UserStateProps | null>({
  key: 'User',
  default: null,
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