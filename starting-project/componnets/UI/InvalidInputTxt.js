import { StyleSheet, Text } from 'react-native';
import React from 'react';
import { Colors } from '../../constants/styles';

const InvalidInputTxt = ({ children }) => {
   return <Text style={styles.invalidText}>* Dados incorretos</Text>;
};

export default InvalidInputTxt;

const styles = StyleSheet.create({
   invalidText: {
      fontSize: 10,
      color: Colors.lavenderBlush,
      marginLeft: 30,
   },
});
