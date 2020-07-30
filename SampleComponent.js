import React, { Component } from 'react';
import {
  Text, 
  View, 
  Image, 
  TextInput,
  StyleSheet
} from 'react-native';

const SampleComponent = () => {
    return (
      <View>
      <View style={{width: 80, height: 80, backgroundColor: 'green'}} />
      <Text>Hello World</Text>
      <Text><Sambung/> belajar react native</Text>
      <Photo />
      <TextInput style={{borderWidth: 1}} />
      <Profile />
    </View>
    );
  };
  
  const Sambung = () => {
    return <Text>Saya</Text>
  };
  
  
  const Photo = () => {
    return <Image source={{uri: 'https://placeimg.com/100/100/animals'}} style={{width: 100, height: 100}}/>
  };
  
  class Profile extends Component {
    render() {
      return (
        <View>
          <Image source={{uri: 'https://placeimg.com/100/100/nature'}} style={{width: 100, height: 100, borderRadius: 50}} />
          <Text>Ini Foto Profile</Text>
        </View>
      );
    }
  }

  export default SampleComponent;