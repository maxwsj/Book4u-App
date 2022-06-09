import { StyleSheet, Pressable, View } from 'react-native';
import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Badge } from 'react-native-paper';
import { Colors } from '../../../constants/styles';

const IconNotification = ({
   iconBtnConfig,
   onPress,
   icon,
   color,
   size,
   iconBtnStyle,
   iconContainer,
   notificationNum,
}) => {
   return (
      <>
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
            {notificationNum && (
               <View style={styles.badgeContainer}>
                  <Badge style={styles.badge}>5</Badge>
               </View>
            )}
         </Pressable>
      </>
   );
};

export default IconNotification;

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
   badgeContainer: {
      top: -10,
      right: 15,
   },
   badge: {
      right: -15,
      backgroundColor: Colors.secondary,
      color: Colors.quartiary,
      fontFamily: 'lato-bold',
      fontSize: 12,
   },
});
