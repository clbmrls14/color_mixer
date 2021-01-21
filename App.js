/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  NativeModules,
  Button,
  Text,
} from 'react-native';

export default function App() {
  const [color1, setColor1] = useState(0xFF0000);
  const [color2, setColor2] = useState(0x0000FF);
  const [mixedColor, setMixedColor] = useState("ffffff");

  const [hello, setHello] = useState("Hello?");

  const { HelloWorld } = NativeModules;

  const onPress = () => {
    setHello(HelloWorld.sayHello("red", "blue"));
    var mixedHex = HelloWorld.mixColors(color1, color2);
    setMixedColor(mixedHex);
  }

  return (
    <>
      <SafeAreaView styles={styles.container}>
        <Button 
          title="Click to invoke the native module!"
          color="#841584"
          onPress={onPress}
        />
        <Text>Result: {hello}</Text>
        <Text>#{mixedColor}</Text>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
