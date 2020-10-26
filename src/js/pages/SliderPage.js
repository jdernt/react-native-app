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

class SliderPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: [],
      isLoading: true,
      count: 0,
      img: this.props.state.src
    };
  }

  prevImg = () => {
    if (this.state.count-1 < 0) {
      this.setState({count: this.state.img.length-1})
    } else {
      this.setState({count: this.state.count-1})
    }
    console.log('previous image');
  }

  nextImg = () => {
    if (this.state.count+1 > this.state.img.length-1) {
      this.setState({count: 0})
    } else {
      this.setState({count: this.state.count+1})
    }
    console.log('next image')
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
      }, () => { console.log('images uploaded')});
  }

  render() {
    const { data, isLoading, count, img } = this.state;
    const onPressFunc = () => {
      (this.props.state.isLocal) ? this.props.changeState(data) : this.props.returnState();
      console.log('switch slider status')
    }

    return (      
      <View>
        {isLoading
          ? <ActivityIndicator/>
          : (<View style={styles.slider__list}>
              <Button title="prev" onPress={() => {this.prevImg()}} />
              <Button title="switch" onPress={() => { onPressFunc() }} />
              <Button title="next" onPress={() => {this.nextImg()}} />
              <View style={styles.slider__item}>
                <Image
                  source={ this.props.state.isLocal ? img[count] : {uri: data[count]} }
                  style={styles.slider__img}
                />
              </View>
            </View>)
        }
      </View>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SliderPage);
