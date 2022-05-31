import {
   StyleSheet,
   Text,
   View,
   Pressable,
   Dimensions,
   Image,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Colors } from '../../constants/styles';

const { width, height } = Dimensions.get('window');

const ImageButton = ({ setBtnTitle, onPress }) => {
   return (
      <Pressable
         style={({ pressed }) => [pressed && styles.pressed]}
         onPress={onPress}
      >
         <View style={styles.imageButton}>
            <View style={styles.buttonWrapper}>
               <Ionicons
                  name='push-outline'
                  color={Colors.silver200}
                  size={24}
               />
            </View>
            <View style={styles.textContainer}>
               <Text style={styles.text}>{setBtnTitle}</Text>
            </View>
         </View>
      </Pressable>
   );
};

export default ImageButton;

const styles = StyleSheet.create({
   imageButton: {
      marginTop: 15,
      elevation: 2,
      backgroundColor: Colors.white,
      borderRadius: 6,
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: 5,
   },
   pressed: {
      opacity: 0.6,
   },
   buttonWrapper: {
      marginTop: 12,
   },
   text: {
      textAlign: 'center',
      marginTop: 15,
      fontFamily: 'lato-regular',
      color: Colors.silver400,
      fontSize: 12,
   },
   textContainer: {
      marginBottom: 12,
      width: width / 5,
      height: width / 10,
   },
});
