import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import {CommonStyles} from 'styles';

export default function Loader() {
  return (
    <View style={CommonStyles.overLayerContainer}>
        <ActivityIndicator size="large" color="#00ffff" />
        <Text style={{textAlign: 'center', padding: 30}}>Please Wait</Text>
    </View>
  );
}
