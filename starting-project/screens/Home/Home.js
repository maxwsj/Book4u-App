import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import InputIcon from '../../componnets/UI/InputIcon';
import { Colors } from '../../constants/styles';

import { Divider } from 'react-native-paper';

const Home = () => {
   return (
      <View style={styles.homeContainer}>
         <View style={styles.homeWrapper}>
            <InputIcon
               // onUpdateValue={updateInputValueHandler.bind(this, 'password')}
               // value={enteredPassword}
               // isInvalid={passwordIsInvalid}
               inputConfig={{
                  placeholder: 'Livros, autores, gêneros',
               }}
               iconConfig={{
                  name: 'search-outline',
                  size: 20,
                  color: Colors.silver200,
               }}
               // children='* Dados incorretos'
               setIcon={true}
               iconBtnConfig={{
                  name: 'filter-outline',
                  size: 20,
                  color: Colors.silver200,
               }}
               // onIconBtnPress={iconBtnHandler}
            />
            <Text style={styles.sectionTitle}>Livros mais trocados</Text>
            <Divider style={styles.dividerStyles} />
            <Text style={styles.sectionTitle}>Anuncios recentes</Text>
            <Divider style={styles.dividerStyles} />
            <Text style={styles.sectionTitle}>Populares</Text>
            <Divider style={styles.dividerStyles} />
         </View>
      </View>
   );
};

export default Home;

const styles = StyleSheet.create({
   homeContainer: {
      marginHorizontal: 30,
   },
   homeWrapper: {
      marginTop: 30,
   },
   dividerStyles: {
      height: 2,
   },
   sectionTitle: {
      fontFamily: 'poppins-regular',
      color: Colors.silver400,
   },
});
