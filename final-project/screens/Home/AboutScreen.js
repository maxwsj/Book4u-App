import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const AboutScreen = () => {
   return (
      <View style={styles.container}>
         <Text style={styles.title}>Termos de uso de dados</Text>
         <Text style={styles.text}>
            Ter uma política de privacidade e compartilhamento de dados é
            fundamental, sendo de grande importância, defender dados e colher
            seus benefícios de forma criteriosa e ética, tendo em vista a lei
            LGPD (Lei Geral de Proteção de Dados Pessoais), que visa dar às
            pessoas maior controle sobre sua informações, estabelecendo regras
            para organização, armazenamento e compartilhamento de dados.
            Utilizando tais políticas é visível que clientes, usuários e até
            mesmo desenvolvedores fiquem seguros com a aplicação que se está
            utilizando. O aplicativo Book4U trabalha de forma ética e visa a
            proteção dos dados daqueles que o utilizam, possuindo transportes de
            dados criptografados e camadas de segurança para acesso a dados
            sensíveis, evitando assim insegurança ou exposição de informações
            que afetaria o usuário.
         </Text>
      </View>
   );
};

export default AboutScreen;

const styles = StyleSheet.create({
   container: {
      marginHorizontal: 30,
      justifyContent: 'center',
      alignItems: 'center',
   },
   title: {
      fontFamily: 'lato-bold',
      fontSize: 18,
      marginBottom: 10,
      marginTop: 20,
   },
   text: {
      fontFamily: 'lato-regular',
      textAlign: 'justify',
      fontSize: 16,
      letterSpacing: 1,
      lineHeight: 25,
   },
});
