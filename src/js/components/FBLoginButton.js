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

export default class FBLoginButton extends Component {
  state = {userInfo: {}};

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
          // console.log('result:', user);
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
          console.log('Login with FB cancelled');
        } else {
          AccessToken.getCurrentAccessToken().then(() => {
            // const accessToken = data.accessToken.toString();
            // this.getInfoFromToken(accessToken);
            this.props.hideModal() 
            console.log('login with FB success')
          })
          
        }
      },
      error => {
        console.log('Login fail with error: ' + error);
      },
    );
  };

  state = {userInfo: {}};

  render() {
    return (
      <View>
        <Button onPress={this.loginWithFacebook} title='Login With Facebook' />
      </View>
    );
  }
}