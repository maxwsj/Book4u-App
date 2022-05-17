import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import IconBtn from '../UI/IconBtn';
import { Colors } from '../../constants/styles';

const TextIcon = ({
   text,
   textConfig,
   leftIconConfig,
   onIconBtnPress,
   iconBtnConfig,
   iconBtnStyle,
}) => {
   return (
      <View style={styles.textContainer}>
         <Ionicons style={styles.leftIcon} {...leftIconConfig} />
         <Text style={[styles.text, textConfig]}>{text}</Text>
         <IconBtn
            onPress={onIconBtnPress}
            iconBtnConfig={iconBtnConfig}
            iconBtnStyle={iconBtnStyle}
         />
      </View>
   );
};

export default TextIcon;

const styles = StyleSheet.create({
   textContainer: {
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row',
      borderBottomWidth: 1,
      borderBottomColor: Colors.silver100,
      marginTop: 15,
   },
   text: {
      color: Colors.silver300,
   },
});
