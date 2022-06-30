import { StyleSheet, View, Dimensions, Image } from 'react-native';
import React from 'react';
import { Colors } from '../../constants/styles';
const { width, height } = Dimensions.get('window');

const ImagePreview = ({ imageUrl }) => {
   return (
      <View style={styles.imageContainer}>
         <Image
            source={{
               uri: imageUrl,
            }}
            style={styles.image}
         />
      </View>
   );
};

export default ImagePreview;

const styles = StyleSheet.create({
   imageContainer: {
      marginTop: 15,
      marginBottom: 5,
      marginHorizontal: 24,
      width: width * 0.65 - 40,
      height: width * 0.8,
      elevation: 6,
      borderRadius: 5,
      backgroundColor: Colors.snow,
   },

   image: {
      width: '100%',
      height: '100%',
   },
});
