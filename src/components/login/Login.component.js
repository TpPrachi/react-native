import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Alert, 
  Image, ImageBackground, ScrollView } from 'react-native';
import { OutlinedTextField } from 'react-native-material-textfield';
import { TextInput } from 'react-native-paper';
import styles from './Login.component.style';


export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { email: 'jm1@example.com', password: 'jay@123' };
  }

  render() {
    return (
    <ImageBackground source={require('../../../assets/recipibackground.jpeg')} style={{
      width: '100%',
      height: '100%',
      flex: 1,
    }} resizeMode="cover">
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.container}>
          <View style={styles.centerContainer}>
            <Image
              source={require('../../../assets/cooking.jpeg')}
              style={styles.imageContainer}
              resizeMode="cover"
            />
          </View>
          <View style={styles.outLinedTextField}>
            <OutlinedTextField
              label='Email'
              keyboardType='email-address'
              returnKeyType={"next"}
              tintColor='#000000'
              value={this.state.text}
              defaultValue={this.state.email}
              onChangeText={(email) => this.setState({ email })}
            />
          </View>
          <View style={styles.outLinedTextField}>
            <OutlinedTextField
              label='Password'
              secureTextEntry={true}
              tintColor='#000000'
              value={this.state.text}
              defaultValue={this.state.password}
              onChangeText={(password) => this.setState({ password })}
            />
          </View>
          <View style={styles.centerContainer}>
            <TouchableOpacity style={styles.touchableButton} onPress={() => this._doLogin()}>
              <Text style={{ color: 'white' }}>LOG IN</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
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
