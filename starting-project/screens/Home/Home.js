import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native';
import { useState, useEffect, useContext, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AuthContext } from '../../store/auth-context';
import {
   fetchUserData,
   fetchUserLibrarie,
} from '../../store/redux-store/user/user-actions';
import { bookActions } from '../../store/redux-store/book/book-slice';

import BooksSection from '../../componnets/BooksSection/BooksSection';
import BookSelectInformation from '../../componnets/BooksSection/BookSelectInformation';
import FilterModal from '../../componnets/UI/Filter/FilterModal';
import FilterForm from '../../componnets/UI/Filter/FilterForm';
import InputIcon from '../../componnets/UI/InputIcon';
import IconBtn from '../../componnets/UI/IconBtn';

import { Colors } from '../../constants/styles';
import { Divider } from 'react-native-paper';

const { width, height } = Dimensions.get('window');

const Home = () => {
   const authCtx = useContext(AuthContext);
   console.log(authCtx.token);
   const dispatch = useDispatch();
   const book = useSelector((state) => state.book.bookData);
   const enteredValue = useRef();

   useEffect(() => {
      dispatch(fetchUserData(authCtx.token));
      dispatch(fetchUserLibrarie(authCtx.token));
      dispatch(bookActions.clearFilteredBook());
   }, [dispatch]);

   const [visible, setVisible] = useState(false);
   const [genIsSelected, setGenIsSelected] = useState(false);
   const [beenSearch, setBeenSearch] = useState(true);

   const filterHandler = () => setVisible(true);
   const hideModal = () => setVisible(false);

   function filterCloseHandler() {
      hideModal();
   }

   function selectedGenHandler() {
      setGenIsSelected(true);
   }

   async function submitUserValue(text) {
      setTimeout(() => {
         console.log('FilteredBooks' + text);
      }, 3000);
   }

   function getSubmitValueHandler({
      nativeEvent: { text, eventCount, target },
   }) {
      submitUserValue(text);
      enteredValue.current.clear();
   }

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
                     returnKeyType: 'search',
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
                  onSubmit={getSubmitValueHandler}
                  refValue={enteredValue}
               />
               <Text style={styles.sectionTitle}>Todos os livros</Text>
               <BooksSection items={book} />
               {beenSearch && (
                  <>
                     <Divider style={styles.dividerStyles} />
                     <Text style={styles.sectionTitle}>Livro Pesquisado</Text>
                     <BooksSection items={book} />
                  </>
               )}
               <Divider style={styles.dividerStyles} />
               <Text style={styles.sectionTitle}>Anuncios recentes</Text>
               <BooksSection items={book} />
               <Divider style={styles.dividerStyles} />
               <View
                  style={{
                     flexDirection: 'row',
                     alignItems: 'center',
                     justifyContent: 'space-between',
                  }}
               >
                  <Text style={styles.sectionTitle}>
                     Categorias Selecionadas
                  </Text>
                  <IconBtn
                     iconBtnConfig={{
                        name: 'filter-outline',
                        size: 20,
                        color: Colors.secondary,
                     }}
                     iconContainer={styles.btnFilterContainer}
                     onPress={filterHandler}
                  />
               </View>
               {genIsSelected && <BooksSection items={book} />}
               {!genIsSelected && (
                  <BookSelectInformation
                     text={'Selecione um Genêro de livro para exibi-lo aqui.'}
                  />
               )}
               <Divider style={styles.dividerStyles} />
            </View>
         </View>
         <FilterModal
            onShow={visible}
            onHideModal={hideModal}
            formData={
               <FilterForm
                  onClose={filterCloseHandler}
                  onSelect={selectedGenHandler}
               />
            }
            modalHeight={styles.modalWidth}
         />
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
   modalWidth: {
      marginTop: width * 1.2,
   },
   btnFilterContainer: {
      marginTop: 18,
   },
});
