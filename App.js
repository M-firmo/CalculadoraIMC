import React from 'react';
import { StyleSheet, View, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Platform, Text } from 'react-native';
import Title from './scr/components/Title';
import FormIMC from './scr/components/FormIMC';

export default function App() {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <Title />
          <FormIMC />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#4c9f3f',
  },
  inner: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#edffd2',
    borderRadius: 50,
  },
});
