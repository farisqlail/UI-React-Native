import React from 'react';
import {
  View, 
  ScrollView
} from 'react-native';
import SampleComponent from './SampleComponent';
import StylingReactNativeComponent from './StylingReactNativeComponent';
import FlexBox from './FlexBox';

const App = () => {
  return (
    <View>
      <ScrollView>
        {/* <SampleComponent />
        <StylingReactNativeComponent /> */}
        <FlexBox />
      </ScrollView>
    </View>
  );
};


export default App;