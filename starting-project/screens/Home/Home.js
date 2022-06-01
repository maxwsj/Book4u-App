import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { useState, useEffect, useContext } from 'react';

import BooksSection from '../../componnets/BooksSection/BooksSection';

import InputIcon from '../../componnets/UI/InputIcon';
import { Colors } from '../../constants/styles';

// import { Divider } from 'react-native-paper';
import { Divider, Modal, Portal, Provider } from 'react-native-paper';

import { BOOK_DATA } from '../../data/dummy-data';
import { AuthContext } from '../../store/auth-context';

const Home = () => {
   const authCtx = useContext(AuthContext);

   const [bookData, setBookData] = useState({});
   useEffect(() => {
      setBookData(BOOK_DATA);
   }, [bookData]);

   const [visible, setVisible] = useState(false);

   const filterHandler = () => setVisible(true);
   const hideModal = () => setVisible(false);
   const containerStyle = { backgroundColor: 'white', padding: 20 };

   return (
      <ScrollView>
         <View style={styles.homeContainer}>
            <View style={styles.homeWrapper}>
               <InputIcon
                  // onUpdateValue={updateInputValueHandler.bind(this, 'password')}
                  // value={enteredPassword}
                  // isInvalid={passwordIsInvalid}
                  bgStyle={styles.inputBgStyle}
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
                  onIconBtnPress={filterHandler}
               />
               <Text style={styles.sectionTitle}>Livros mais trocados</Text>
               <BooksSection items={bookData} />
               <Divider style={styles.dividerStyles} />
               <Text style={styles.sectionTitle}>Anuncios recentes</Text>
               <BooksSection items={bookData} />
               <Divider style={styles.dividerStyles} />
               <Text style={styles.sectionTitle}>Populares</Text>
               <BooksSection items={bookData} />
               <Divider style={styles.dividerStyles} />
            </View>
         </View>
         <Provider>
            <Portal>
               <Modal
                  visible={visible}
                  onDismiss={hideModal}
                  contentContainerStyle={containerStyle}
               >
                  <Text>
                     Example Modal. Click outside this area to dismiss.
                  </Text>
               </Modal>
            </Portal>
         </Provider>
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
   inputBgStyle: {
      backgroundColor: Colors.snow,
   },
});
