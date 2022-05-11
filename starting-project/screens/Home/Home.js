import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';

import InputIcon from '../../componnets/UI/InputIcon';
import { Colors } from '../../constants/styles';

import { Divider } from 'react-native-paper';
import BookOverviewSection from './BooksOverviewSection/BookOverviewSection';

const Home = () => {
   return (
      <ScrollView>
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
                  iconBtnStyle={styles.iconBtnStyle}
                  // onIconBtnPress={iconBtnHandler}
               />
               <Text style={styles.sectionTitle}>Livros mais trocados</Text>
               <BookOverviewSection />
               <Divider style={styles.dividerStyles} />
               <Text style={styles.sectionTitle}>Anuncios recentes</Text>
               <BookOverviewSection />
               <Divider style={styles.dividerStyles} />
               <Text style={styles.sectionTitle}>Populares</Text>
               <BookOverviewSection />
               <Divider style={styles.dividerStyles} />
            </View>
         </View>
      </ScrollView>
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
      marginTop: 12,
      height: 2,
   },
   sectionTitle: {
      fontFamily: 'poppins-regular',
      color: Colors.silver400,
      marginTop: 30,
   },
   iconBtnStyle: {
      marginRight: -15,
   },
});
