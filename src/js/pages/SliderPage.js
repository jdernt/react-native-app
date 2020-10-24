import React, { Component } from 'react'
import {
  View,
  Image,
  Button,
  ActivityIndicator,
} from 'react-native';
import { connect } from "react-redux";
import { changeState, returnState } from "../redux/actions";
import { styles } from '../styles';

const mapStateToProps = (state) => ({
  state: state,
});

const mapDispatchToProps = (dispatch) => {
  return {
    changeState: (urls) => dispatch(changeState(urls)),
    returnState: () => dispatch(returnState()),
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
    if (this.state.count-1 < 0) {
      this.setState({count: this.props.img.length-1})
    } else {
      this.setState({count: this.state.count-1})
    }
    console.log(this.state);
  }

  nextImg = () => {
    if (this.state.count+1 > this.props.img.length-1) {
      this.setState({count: 0})
    } else {
      this.setState({count: this.state.count+1})
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
        <View style={styles.slider__item}>
          <Image
            source={
              this.props.state
              ? this.props.img[count]
              : {uri: this.props.img[count]}
            }
            style={styles.slider__img}
          />
        </View>
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
        {isLoading
          ? <ActivityIndicator/>
          : (<SliderList
              func={() => {
                (this.props.state.isLocal)
                ? this.props.changeState(data)
                : this.props.returnState();
                console.log(this.props.state)
              }}
              img={this.props.state.src} state={this.props.state.isLocal}
            />)
        }
      </View>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SliderPage);
