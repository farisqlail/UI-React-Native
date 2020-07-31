import React, {useState,useEffect} from 'react';
import {
  View, 
  ScrollView
} from 'react-native';
import SampleComponent from './pages/SampleComponent';
import StylingComponent from './pages/StylingComponent';
import FlexBox from './pages/FlexBox';
import Position from './pages/Position';

const App = () => {
  const [isShow, setIsShow] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsShow(false);
    }, 2000);
  }, []);
  return (
    <View>
      <ScrollView>
        {/* <SampleComponent />
        <StylingComponent /> */}
        {isShow && <FlexBox />}
        {/* <Position /> */}
      </ScrollView>
    </View>
  );
};


export default App;