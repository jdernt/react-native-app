import { CHANGE_STATE, RETURN_STATE } from './actionTypes';

export const changeState = (urls) => ({
  type: CHANGE_STATE,
  src: urls
});

export const returnState = () => ({
  type: RETURN_STATE,
})