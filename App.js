import React, { Component } from 'react';
import {
  Text, 
  View, 
  Image, 
  TextInput,
  StyleSheet
} from 'react-native';
import laptop from './laptop.jpg';

const App = () => {
  return (
    <StylingReactNativeComponent />
  );
};

const StylingReactNativeComponent = () => {
  return (
    <View>
      {/* <Text style={styles.text}>Styling Component</Text>
      <View style={{
        width: 100,
        height: 100,
        backgroundColor: 'blue',
        borderWidth: 2,
        borderColor: 'red',
        marginTop: 30,
        marginLeft: 30,
      }} /> */}
      <View style={{padding: 12, 
        backgroundColor: '#f2f2f2', 
        width: 212, 
        borderRadius: 8,
        marginLeft: 30,
        marginTop: 30
        }}>
        <Image source={laptop} style={{
          width: 188, 
          height: 107, 
          borderRadius: 8
          }} />
          <Text style={{
            fontSize: 14, 
            fontWeight: 'bold', 
            marginTop: 16}}>New Mackbook 2020</Text>
          <Text style={{
            fontSize: 12,
            color: '#f2994a',
            fontWeight: 'bold',
            marginTop: 12
          }}>Rp.25.000.000</Text>
          <Text style={{
            fontSize: 12,
            fontWeight: '300',
            marginTop: 12
          }}>Jakarta Barat</Text>
          <View style={{
            backgroundColor: '#6fcf97',
            paddingVertical: 6,
            borderRadius: 25,
            marginTop: 20,
          }}>
            <Text style={{
              fontSize: 14, 
              fontWeight: '600', 
              color: 'white',
              textAlign: 'center',
            }}>Beli</Text>
          </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'green',
    marginLeft: 20,
  }
});

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

export default App;