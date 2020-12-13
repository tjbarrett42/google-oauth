import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';



export class App extends Component {

    responseGoogle = (response) => {
        console.log(response);
        console.log(response.profileObj);
    }

  render() {
    return (
        <div>
            <GoogleLogin
                clientId = "443325242480-gd967jq93s5ogt1h3l0dq7asos6ge91s.apps.googleusercontent.com"
                buttonText = "Login"
                onSuccess = {this.responseGoogle}
                onFailure = {this.responseGoogle}
                cookiePolicy= {'single_host_origin'} />
        </div>
    )
  }
}

export default App

