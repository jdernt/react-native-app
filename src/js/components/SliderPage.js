import React, { Component, useState } from 'react'
import {
  View,
  Text,
  Image,
  Button,
} from 'react-native';
import { connect } from "react-redux";
import { changeState } from "../redux/actions";
import { styles } from '../styles';

let serverImg;

const getImg = async () => {
  const response = await fetch('https://imagesapi.osora.ru/', {
    method: 'GET'
  });

  const result = await response.json();
  serverImg = result;
}

getImg();

const mapStateToProps = (state) => ({
  src: state.src,
});

const mapDispatchToProps = (dispatch) => ({
  changeState(urls) {
    dispatch(changeState(urls));
  },
});

const SliderList = (props) => {
  let [count, setCount] = useState(0);

  const nextImg = () => {
    (count++ === props.img.length-1) ? setCount(0) : setCount(count++);
  }

  const prevImg = () => {
    (count-- === 0) ? setCount(props.img.length-1) : setCount(count--);
  }

  return (
    <View style={styles.slider__list}>
      <Button title="prev" onPress={prevImg} />
      <Button title="switch" onPress={props.func} />
      <Button title="next" onPress={nextImg} />
      <SliderItem img={props.img[0]} />
    </View>
  )
}

const SliderItem = ({ img }) => {
  return (
    <View style={styles.slider__item}>
      <Image source={img} style={styles.slider__img} />
    </View>
  )
}

const SliderPage = (props) => {
  return (
    <View>
      <SliderList func={() => { 
        // props.changeState(serverImg)
        console.log(props.src)
      }} img={props.src} />
    </View>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(SliderPage);