import React from "react";
import { StatusBar } from "react-native";
import { StyleSheet,Text,View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>111119010 蔡佳軒</Text>
      <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    color:"white",
    fontSize:22
  }
});