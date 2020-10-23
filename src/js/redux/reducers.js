import { CHANGE_STATE, RETURN_STATE } from './actionTypes';

const initialState = {
  isLocal: true,
  src: [require('../../img/photo-3.jpg'), require('../../img/photo-2.jpg'), require('../../img/photo-1.jpg')]
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CHANGE_STATE: {
      return {
        ...state,
        isLocal: false,
        src: action.src,
      };
    }
    default:
      return initialState;
  }
  // if (action.type === CHANGE_STATE) {
  //   return {
  //     ...state,
  //     isLocal: false,
  //     src: action.src,
  //   };
  // } else {
  //   return initialState;
  // }
}