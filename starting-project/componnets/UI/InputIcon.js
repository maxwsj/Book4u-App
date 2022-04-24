import { StyleSheet, View, TextInput } from 'react-native';
import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';

import { Colors } from '../../constants/styles';

const Input = ({ inputConfig, iconConfig }) => {
   return (
      <View style={styles.searchSection}>
         <Ionicons style={styles.searchIcon} {...iconConfig} />
         <TextInput style={styles.input} {...inputConfig} />
      </View>
   );
};

export default Input;

const styles = StyleSheet.create({
   searchSection: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: Colors.white,
      borderBottomColor: Colors.silver100,
      borderBottomWidth: 2,
   },
   searchIcon: {
      padding: 10,
   },
   input: {
      flex: 1,
      paddingTop: 10,
      paddingRight: 10,
      paddingBottom: 10,
      paddingLeft: 0,
      backgroundColor: Colors.white,
      fontSize: 16,
      color: Colors.silver400,
   },
});
