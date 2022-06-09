import { StyleSheet, Pressable, View } from 'react-native';
import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Badge } from 'react-native-paper';

const IconBtn = ({
   iconBtnConfig,
   onPress,
   icon,
   color,
   size,
   iconBtnStyle,
   iconContainer,
}) => {
   return (
      <Pressable
         onPress={onPress}
         style={({ pressed }) => [pressed && styles.pressed]}
      >
         <View style={[styles.iconContainer, iconContainer]}>
            <Ionicons
               style={[styles.searchIcon, iconBtnStyle]}
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
