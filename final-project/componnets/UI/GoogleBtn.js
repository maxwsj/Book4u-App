import { StyleSheet, View } from 'react-native';
import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import FlatButton from '../UI/FlatButton';

const GoogleBtn = () => {
   return (
      <View style={styles.googleContainer}>
         <View>
            <Ionicons name='logo-google-playstore' size={24} color='black' />
         </View>
         <View style={styles.googleBottom}>
            <FlatButton>Inscrever-se com o Google</FlatButton>
         </View>
      </View>
   );
};

export default GoogleBtn;

const styles = StyleSheet.create({
   googleContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 20,
   },

   googleBottom: {
      marginBottom: 20,
   },
});
