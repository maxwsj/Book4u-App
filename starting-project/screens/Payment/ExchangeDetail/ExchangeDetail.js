import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const ExchangeDetail = ({ route }) => {
   const { externalBookId, userBookId, userOption } = route.params;
   console.log(`EXTERNAL ID:${externalBookId}`);
   console.log(`SELECTED ID:${userBookId}`);
   console.log(`userOption: ${userOption}`);
   return (
      <View>
         <Text>ExchangeDetail</Text>
      </View>
   );
};

export default ExchangeDetail;

const styles = StyleSheet.create({});
