import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { Colors } from '../../constants/styles';

const PaymentButton = ({ image, text, onPress, onSelect }) => {
   return (
      <Pressable
         onPress={onPress}
         style={({ pressed }) => [pressed && styles.pressed]}
      >
         <View style={styles.buttonContainer}>
            <View style={styles.itemsWrapper}>
               <View style={[styles.button, onSelect && styles.isSelected]}>
                  <View style={styles.imageContainer}>
                     <Image style={styles.image} source={image} />
                  </View>
                  <View style={styles.textContainer}>
                     <Text
                        style={[
                           styles.buttonText,
                           onSelect && styles.textIsSelectd,
                        ]}
                     >
                        {text}
                     </Text>
                  </View>
               </View>
            </View>
         </View>
      </Pressable>
   );
};

export default PaymentButton;

const styles = StyleSheet.create({
   textContainer: {
      marginTop: 10,
      borderTopWidth: 1,
      borderTopColor: Colors.silver100,
   },
   buttonContainer: {
      justifyContent: 'center',
      alignItems: 'center',
   },
   button: {
      backgroundColor: Colors.silver50,
      padding: 12,
      borderRadius: 6,
      elevation: 6,
   },
   buttonText: {
      textAlign: 'center',
      paddingTop: 12,
   },
   imageContainer: {
      width: 150,
      height: 150,
   },
   image: {
      width: '100%',
      height: '100%',
   },
   itemsWrapper: {
      marginBottom: 60,
   },
   pressed: {
      opacity: 0.7,
      borderRadius: 6,
   },
   isSelected: {
      backgroundColor: Colors.secondary,
      padding: 12,
      borderRadius: 6,
      elevation: 6,
   },
   textIsSelectd: {
      color: Colors.snow,
      fontFamily: 'lato-bold',
   },
});
