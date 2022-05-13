import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Divider } from 'react-native-paper';
import { Colors } from '../../../constants/styles';

const ProfileData = () => {
   return (
      <View>
         <Text>ProfileData</Text>
         <Divider style={styles.dividerPaper} />
      </View>
   );
};

export default ProfileData;

const styles = StyleSheet.create({
   dividerPaper: {
      width: 2,
      height: '100%',
      backgroundColor: Colors.silver200,
   },
});
