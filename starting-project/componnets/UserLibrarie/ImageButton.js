import { StyleSheet, Text, View, Pressable, Dimensions } from 'react-native';
import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Colors } from '../../constants/styles';

const { width, height } = Dimensions.get('window');

const ImageButton = () => {
   return (
      <Pressable style={({ pressed }) => [pressed && styles.pressed]}>
         <View style={styles.imageButton}>
            <View style={styles.buttonWrapper}>
               <Ionicons
                  name='push-outline'
                  color={Colors.silver200}
                  size={40}
               />
            </View>
            <Text style={styles.text}>
               Clique aqui para carregar suas imagens
            </Text>
         </View>
      </Pressable>
   );
};

export default ImageButton;

const styles = StyleSheet.create({
   imageButton: {
      marginTop: 15,
      width: width * 0.6,
      height: width * 0.8,
      elevation: 2,
      backgroundColor: Colors.white,
      borderRadius: 6,
      justifyContent: 'center',
      alignItems: 'center',
   },
   pressed: {
      opacity: 0.6,
   },
   buttonWrapper: {
      justifyContent: 'center',
      alignItems: 'center',
   },
   text: {
      textAlign: 'center',
      marginTop: 15,
      fontFamily: 'lato-regular',
      color: Colors.silver400,
   },
});
