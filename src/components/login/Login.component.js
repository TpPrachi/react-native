import React, { Component } from 'react';
import { TextInput, View, Text, TouchableOpacity, Alert } from 'react-native';
import styles from './Login.component.style';


export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { email: 'jm1@example.com', password: 'jay@123' };
  }


  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.logo}>Recipe App</Text>
      <View style={styles.inputView} >
        <TextInput  
          style={styles.inputText}
          placeholder="Email"
          defaultValue={this.state.email}
          onChangeText={(email) => this.setState({ email })}
          value={this.state.text}/>
      </View>
      <View style={styles.inputView} >
        <TextInput  
          secureTextEntry
          style={styles.inputText}
          placeholder="Password"
          defaultValue={this.state.password}
          onChangeText={(password) => this.setState({ password })}
          value={this.state.text}/>
      </View>
      <TouchableOpacity style={styles.loginBtn} onPress={() => this._doLogin()}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
      // <View style={styles.inputContainer}>
        // <TextInput
        //   style={styles.input}
        //   placeholder="Email"
        //   defaultValue={this.state.email}
        //   onChangeText={(email) => this.setState({ email })}
        //   value={this.state.text}
        // />
        // <TextInput
        //   style={styles.input}
        //   placeholder="Password"
        //   defaultValue={this.state.password}
        //   onChangeText={(password) => this.setState({ password })}
        //   value={this.state.text}
        // />
        // <TouchableOpacity
        //   style={styles.loginScreenButton}
        //   onPress={() => this._doLogin()}
        //   underlayColor='#fff'>
        //   <Text style={styles.loginText}>Login</Text>
        // </TouchableOpacity>

      // </View>
    );
  }

  _doLogin() {
    fetch('http://35.160.197.175:3006/api/v1/user/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
          console.log(JSON.stringify(responseJson))
          this.props.navigation.navigate('RecipeList', { token: responseJson.token })
      })
      .catch((error) => {
        console.error(error);
        Alert.alert('Error:', error.message)
      });
  }
}
