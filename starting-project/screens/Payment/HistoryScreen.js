import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Colors } from '../../constants/styles';
import Button from '../../componnets/UI/Button';

const HistoryScreen = ({ navigation }) => {
   function detailHistoryHandler() {
      navigation.navigate('HistoryDetailItem');
   }
   return (
      <>
         <View style={styles.card}>
            <View>
               <Text style={styles.title}>Tipo de Troca</Text>
               <Text style={styles.text}>Pontos</Text>
               <Text style={styles.title}>Usuário</Text>
               <Text style={styles.text}>Aragon Swifte</Text>
               <Text style={styles.title}>Status</Text>
               <Text style={styles.text}>Aguardando Confirmação</Text>
            </View>
            <View>
               <Text style={styles.title}>Data</Text>
               <Text style={styles.text}>20 de Agosto de 2022</Text>
            </View>
         </View>
         <View style={styles.buttonContainer}>
            <Button
               onPress={detailHistoryHandler}
               stylesBtn={styles.buttonStyle}
            >
               Detalhes
            </Button>
         </View>
      </>
   );
};

export default HistoryScreen;

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
      borderRadius: 6,
      elevation: 6,
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      padding: 20,
      marginTop: 30,
   },
   text: {
      fontFamily: 'lato-regular',
      color: Colors.silver400,
      fontSize: 14,
   },
   buttonContainer: {
      marginTop: 8,
      marginHorizontal: 30,
   },
   buttonStyle: {
      backgroundColor: Colors.darkCyan,
   },
});
