import { StyleSheet, View, Text } from 'react-native';
import { Colors } from '../../constants/styles';
import Button from '../UI/Button';

const ExchangeInfoModal = ({ onClose }) => {
   function submitHandler() {
      onClose();
   }

   return (
      <View style={styles.formContainer}>
         <View style={styles.titleContainer}>
            <Text style={styles.title}>Como Funciona ?</Text>
            <View style={{ marginHorizontal: 5, marginTop: 15 }}>
               <Text style={[styles.text]}>
                  Você pode escolher dois métodos de pagamento, sendo eles:
                  livro ou crédito.
               </Text>
               <Text style={[styles.text]}>
                  <Text style={styles.bookSpan}>Livros:</Text> Cadastre um livro
                  em sua biblioteca pessoal e utilize-o como opção de troca.
               </Text>
               <Text style={[styles.text]}>
                  <Text style={styles.creditSpan}>Crédito:</Text> Ao realizar
                  trocas onde seus livros possuem um valor maior que o da opção
                  escolhida, a diferença de valor será adicionada em sua conta
                  por meio de créditos. Utilize esses créditos como forma de
                  pagamento.
               </Text>
            </View>
         </View>
         <View style={styles.buttonWrapper}>
            <Button onPress={submitHandler}>Entendido</Button>
         </View>
      </View>
   );
};

export default ExchangeInfoModal;

const styles = StyleSheet.create({
   formContainer: {
      marginBottom: 20,
   },
   buttonWrapper: {
      marginTop: 30,
   },
   titleContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 15,
   },
   title: {
      fontFamily: 'lato-bold',
      fontSize: 16,
   },
   text: {
      fontFamily: 'lato-regular',
      marginVertical: 5,
   },
   bookSpan: {
      fontFamily: 'lato-bold',
      color: Colors.darkCyan,
   },
   creditSpan: {
      fontFamily: 'lato-bold',
      color: Colors.secondary,
   },
});
