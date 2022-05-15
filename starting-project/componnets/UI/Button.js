import { Pressable, StyleSheet, Text, View } from 'react-native';

import { Colors } from '../../constants/styles';

function Button({ children, onPress, stylesBtn }) {
   return (
      <Pressable
         style={({ pressed }) => [
            styles.button,
            stylesBtn,
            pressed && styles.pressed,
         ]}
         onPress={onPress}
      >
         <View>
            <Text style={styles.buttonText}>{children}</Text>
         </View>
      </Pressable>
   );
}

export default Button;

const styles = StyleSheet.create({
   button: {
      borderRadius: 6,
      paddingVertical: 10,
      paddingHorizontal: 12,
      backgroundColor: Colors.primary,
      elevation: 2,
      shadowColor: 'black',
      shadowOffset: { width: 1, height: 1 },
      shadowOpacity: 0.25,
      shadowRadius: 4,
   },
   pressed: {
      opacity: 0.7,
   },
   buttonText: {
      textAlign: 'center',
      color: Colors.snow,
      fontSize: 16,
      fontFamily: 'poppins-bold',
   },
});
