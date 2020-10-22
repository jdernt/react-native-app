import React, { Component, useState } from 'react'
import {
	View,
  Text,
  Image,
  Button,
} from 'react-native';
import { styles } from '../styles';
import slide1 from '../../img/photo-1.jpg';
import slide2 from '../../img/photo-2.jpg';
import slide3 from '../../img/photo-3.jpg';

const localImg = [
  slide3,
  slide2,
  slide1
];

const serverImg = [
  slide1,
  slide2,
  slide3
];

const SliderList = (props) => {
  let [count, setCount] = useState(0);

  const nextImg = () => {
    if (count++ === props.img.length-1) {
      setCount(0);
    } else {
      setCount(count++);
    }
  }

  const prevImg = () => {
    if (count-- === 0) {
      setCount(props.img.length-1);
    } else {
      setCount(count--);
    }
  }

  return (
    <View style={styles.slider__list}>
      <Button title="prev" onPress={prevImg} />
      <Button title="switch" onPress={props.func} />
      <Button title="next" onPress={nextImg} />
      <SliderItem img={props.img[count]}/>
    </View>
  )
}

const SliderItem = (props) => {
  return (
    <View style={styles.slider__item}>
      <Image source={props.img} style={styles.slider__img} />
    </View>
  )
}

function SliderPage() {
  const [isLocal, setState] = useState(true);

  const switchFunc = () => {
    setState(!isLocal)
  }

  return (
    <View>
        { isLocal 
          ? <SliderList func={switchFunc} img={localImg} />
          : <SliderList func={switchFunc} img={serverImg} />
        }
    </View>
  )
}

export default SliderPage;