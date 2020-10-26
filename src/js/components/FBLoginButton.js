import React, {Component} from 'react';
import {
  View, 
  Text, 
  Button
} from 'react-native';
import {
  AccessToken,
  GraphRequest,
  GraphRequestManager,
  LoginManager,
} from 'react-native-fbsdk';

export default class App extends Component {
  state = {userInfo: {}};

  logoutWithFacebook = () => {
    LoginManager.logOut();
    this.setState({userInfo: {}});
  };

  getInfoFromToken = token => {
    const PROFILE_REQUEST_PARAMS = {
      fields: {
        string: 'id,name,first_name,last_name',
      },
    };
    const profileRequest = new GraphRequest(
      '/me',
      {token, parameters: PROFILE_REQUEST_PARAMS},
      (error, user) => {
        if (error) {
          console.log('login info has error: ' + error);
        } else {
          this.setState({userInfo: user});
          console.log('result:', user);
        }
      },
    );
    new GraphRequestManager().addRequest(profileRequest).start();
  };

  loginWithFacebook = () => {
    // Attempt a login using the Facebook login dialog asking for default permissions.
    LoginManager.logInWithPermissions(['public_profile']).then(
      login => {
        if (login.isCancelled) {
          console.log('Login cancelled');
        } else {
          AccessToken.getCurrentAccessToken().then(data => {
            const accessToken = data.accessToken.toString();
            this.getInfoFromToken(accessToken);
            this.props.hideModal()
          });
        }
      },
      error => {
        console.log('Login fail with error: ' + error);
      },
    );
  };

  state = {userInfo: {}};

  render() {
    const isLogin = this.state.userInfo.name;
    const buttonText = isLogin ? 'Logout With Facebook' : 'Login With Facebook';
    const onPressButton = isLogin
      ? this.logoutWithFacebook
      : this.loginWithFacebook;
    return (
      <View>
        <Button onPress={onPressButton} title={buttonText} />
      </View>
    );
  }
}