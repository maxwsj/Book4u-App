import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Button from '../UI/Button';
import { Colors } from '../../constants/styles';

const HistoryItem = ({ onPress, date, ownerName, historyId }) => {
   function historyItemHandler() {
      onPress(historyId);
   }
   return (
      <>
         <View style={styles.card}>
            <View>
               <Text style={styles.title}>Tipo de Troca</Text>
               <Text style={styles.text}>Pontos</Text>
               <Text style={styles.title}>Usuário</Text>
               <Text style={styles.text}>{ownerName}</Text>
               <Text style={styles.title}>Status</Text>
               <Text style={styles.text}>Aguardando Confirmação</Text>
            </View>
            <View>
               <Text style={styles.title}>Data</Text>
               <Text style={styles.text}>{date}</Text>
            </View>
         </View>
         <View style={styles.buttonContainer}>
            <Button onPress={historyItemHandler} stylesBtn={styles.buttonStyle}>
               Detalhes
            </Button>
         </View>
      </>
   );
};

export default HistoryItem;

const styles = StyleSheet.create({
   title: {
      fontSize: 16,
      fontFamily: 'lato-bold',
      color: Colors.dimgray,
      marginVertical: 8,
   },
   card: {
      marginHorizontal: 30,
      backgroundColor: Colors.silver50,
      elevation: 6,
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      padding: 20,
      marginTop: 30,
      borderTopEndRadius: 5,
      borderTopLeftRadius: 5,
   },
   text: {
      fontFamily: 'lato-regular',
      color: Colors.silver400,
      fontSize: 14,
   },
   buttonContainer: {
      marginHorizontal: 30,
      bottom: 5,
   },
   buttonStyle: {
      backgroundColor: Colors.darkCyan,
   },
});
