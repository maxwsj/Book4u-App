import { StyleSheet, Pressable, View } from 'react-native';
import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';

const IconBtn = ({ iconBtnConfig, onPress, icon, color, size, style }) => {
   return (
      <Pressable
         onPress={onPress}
         style={({ pressed }) => [pressed && styles.pressed]}
      >
         <View style={[styles.iconContainer]}>
            <Ionicons
               style={[styles.searchIcon, style]}
               name={icon}
               color={color}
               size={size}
               {...iconBtnConfig}
            />
         </View>
      </Pressable>
   );
};

export default IconBtn;

const styles = StyleSheet.create({
   iconContainer: {
      marginRight: 10,
   },
   searchIcon: {
      padding: 10,
   },
   pressed: {
      opacity: 0.7,
   },
});
