import { CHANGE_STATE } from './actionTypes';

export const changeState = (urls) => ({
  type: CHANGE_STATE,
  src: urls
});