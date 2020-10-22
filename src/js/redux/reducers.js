import { CHANGE_STATE } from './actionTypes';

import slide1 from '../../img/photo-1.jpg';
import slide2 from '../../img/photo-2.jpg';
import slide3 from '../../img/photo-3.jpg';

const initialState = {
  src: ['../../img/photo-3.jpg', '../../img/photo-2.jpg', '../../img/photo-1.jpg']
};

export default function (state = initialState, action) {
  if (action.type === CHANGE_STATE) {
    return {
      ...state,
      src: action.src
    }
  } else {
    return state;
  }
}