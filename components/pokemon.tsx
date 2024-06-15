import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export function Details({navigation, route}) {

    console.log(route?.params)
    function handleClick(){
        navigation.navigate('Home');
    }

  return (

    <TouchableOpacity onPress={handleClick}>
        <Text>{route.params.name}</Text>
    </TouchableOpacity>
  
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 28,
    lineHeight: 32,
    marginTop: -6,
  },
});
