import React, { Component } from 'react'
import {
  View,
  Text,
  Image,
  Button,
  ActivityIndicator,
} from 'react-native';
import { connect } from "react-redux";
import { changeState } from "../redux/actions";
import { styles } from '../styles';

const mapStateToProps = (state) => ({
  state: state,
});

const mapDispatchToProps = (dispatch) => {
  return {
    changeState: (urls) => dispatch(changeState(urls)),
    returnState: () => dispatch({type: 'INIT'}),
  }
};

class SliderList extends Component {
  constructor(props){
    super(props);
    this.state = {
      count: 0,
    };
  }

  prevImg = () => {
    if (this.state.count-- === 0) {
      this.setState({count: this.props.img.length-1})
    } else {
      this.setState({count: this.state.count--})
    }
    console.log(this.state);
  }

  nextImg = () => {
    if (this.state.count++ >= this.props.img.length-1) {
      this.setState({count: 0})
    } else {
      this.setState({count: this.state.count++})
    }
    console.log(this.state)
  }

  render() {
    const { count } = this.state;
    return (
      <View style={styles.slider__list}>
        <Button title="prev" onPress={() => {this.prevImg()}} />
        <Button title="switch" onPress={this.props.func} />
        <Button title="next" onPress={() => {this.nextImg()}} />
        <SliderItem img={this.props.img[count]} state={this.props.state} />
      </View>
    )
  }
}

class SliderItem extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <View style={styles.slider__item}>
        { this.props.state 
          ? <Image source={this.props.img} style={styles.slider__img} />
          : <Image source={{uri: this.props.img}} style={styles.slider__img} />
        }
      </View>
    )
  }
}

class SliderPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: [],
      isLoading: true
    };
  }

  componentDidMount() {
    fetch('https://imagesapi.osora.ru/')
      .then((response) => response.json())
      .then((json) => {
        this.setState({ data: json });
      })
      .catch((error) => console.error(error))
      .finally(() => {
        this.setState({ isLoading: false });
      });
  }

  render() {
    const { data, isLoading } = this.state;

    return (
      <View>
        {isLoading ? <ActivityIndicator/> : (
          <SliderList func={() => {
            (this.props.state.isLocal) ? this.props.changeState(data) : this.props.returnState();
            console.log(this.props.state)
          }} img={this.props.state.src} state={this.props.state.isLocal}/>
        )}
      </View>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SliderPage);
