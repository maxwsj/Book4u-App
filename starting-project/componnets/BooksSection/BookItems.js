import {
   StyleSheet,
   View,
   Pressable,
   Image,
   Text,
   Dimensions,
} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { Colors } from '../../constants/styles';

const { width } = Dimensions.get('window');

const BookItems = ({ id, title, imageUrl, onPress }) => {
   const navigation = useNavigation();

   function selectMealItemHandler() {
      navigation.navigate('MealDetail', {
         mealId: id,
      });
   }

   return (
      <Pressable
         onPress={onPress}
         style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      >
         <View style={styles.container}>
            <View style={styles.imageContainer}>
               <Image
                  style={styles.bookImage}
                  source={{
                     uri: imageUrl,
                  }}
               />
            </View>
            <View style={styles.textWrapper}>
               <Text style={styles.textItem}>{title}</Text>
            </View>
         </View>
      </Pressable>
   );
};

export default BookItems;

const styles = StyleSheet.create({
   container: {
      marginTop: 15,
   },
   imageContainer: {
      width: width * 0.4 - 25,
      height: width / 2,
      marginHorizontal: 10,
      elevation: 6,
      borderRadius: 5,
      backgroundColor: Colors.snow,
   },
   bookImage: {
      width: '100%',
      height: '100%',
      borderRadius: 5,
   },
   pressed: {
      opacity: 0.7,
   },
   textWrapper: {
      justifyContent: 'center',
      alignItems: 'center',
      width: width * 0.38,
      marginTop: 5,
   },
   textItem: {
      textAlign: 'center',
      fontFamily: 'poppins-regular',
      fontSize: 12,
      color: Colors.silver400,
   },
});
