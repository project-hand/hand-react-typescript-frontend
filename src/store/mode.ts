import { atom } from 'recoil';

export const SERV_MODE = {
  MAIN: 'MAIN',
  CAL: 'CAL',
  MEMO: 'MEMO',
  TODO: 'TODO',
  CUSTOM: 'CUSTOM'
} as const;

type SERV_MODE = typeof SERV_MODE[keyof typeof SERV_MODE];

export const modeState = atom<SERV_MODE | null>({
  key: 'Mode',
  default: SERV_MODE.MAIN,
});
