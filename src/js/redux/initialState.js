import React from 'react';
import { createStore } from "redux";
import rootReducer from "./reducers";

// import slide1 from '../../img/photo-1.jpg';
// import slide2 from '../../img/photo-2.jpg';
// import slide3 from '../../img/photo-3.jpg';

// const initialState = {
//   src: [slide1, slide2, slide3]
// };

export default createStore(rootReducer);