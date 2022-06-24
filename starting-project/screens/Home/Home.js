import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native';
import { useState, useEffect, useContext, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AuthContext } from '../../store/auth-context';
import {
   fetchExchangeNotification,
   fetchUserData,
   fetchUserLibrarie,
   fetchUserHistory,
   fetchExchangeCreditNotification,
   fetchNotificationInfo,
   fetchUserCredits,
   fetchCreditNotificationInfo,
   fetchUserWishlist,
} from '../../store/redux-store/user/user-actions';
import {
   getSearchedAuthor,
   getSearchedBook,
   fetchBookGenRegistered,
} from '../../store/redux-store/book/book-actions';

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
   const filteredGenBooks = useSelector((state) => state.book.filteredGenBooks);
   const searchedBookData = useSelector((state) => state.book.searchedBook);
   const searchedAuthorData = useSelector((state) => state.book.searchedAuthor);
   const enteredValue = useRef();

   useEffect(() => {
      dispatch(fetchUserData(authCtx.token));
      dispatch(fetchUserLibrarie(authCtx.token));
      dispatch(bookActions.clearFilteredBook());
      dispatch(fetchNotificationInfo(authCtx.token));
      dispatch(fetchExchangeNotification(authCtx.token));
      dispatch(fetchExchangeCreditNotification(authCtx.token));
      dispatch(fetchUserHistory(authCtx.token));
      dispatch(fetchUserCredits(authCtx.token));
      dispatch(fetchCreditNotificationInfo(authCtx.token));
      dispatch(fetchUserWishlist(authCtx.token));
      dispatch(fetchBookGenRegistered(authCtx.token));
   }, [dispatch]);

   const [visible, setVisible] = useState(false);
   const [genIsSelected, setGenIsSelected] = useState(false);
   const [searchedBook, setSearchedBook] = useState(false);
   const [searchedAuthor, setSearchedAuthor] = useState(false);

   const filterHandler = () => setVisible(true);
   const hideModal = () => setVisible(false);

   function filterCloseHandler() {
      hideModal();
   }

   function selectedGenHandler() {
      setGenIsSelected(true);
   }

   async function getSearchedBookHandler({
      nativeEvent: { text, eventCount, target },
   }) {
      dispatch(getSearchedBook(authCtx.token, text));
      setSearchedBook(true);
      enteredValue.current.clear();
   }

   async function getSearchedAuthorHandler({
      nativeEvent: { text, eventCount, target },
   }) {
      dispatch(getSearchedAuthor(authCtx.token, text));
      setSearchedAuthor(true);
      enteredValue.current.clear();
   }

   return (
      <ScrollView>
         <View style={styles.homeContainer}>
            <View style={styles.homeWrapper}>
               <Text style={styles.sectionTitle}>Todos os livros</Text>
               <BooksSection items={book} />
               <Divider style={styles.dividerStyles} />
               <Text style={styles.sectionTitle}>Anuncios recentes</Text>
               <BooksSection items={book} />
               <InputIcon
                  bgStyle={styles.inputBgStyle}
                  inputConfig={{
                     placeholder: 'Digite o nome de um autor',
                     returnKeyType: 'search',
                  }}
                  iconConfig={{
                     name: 'search-outline',
                     size: 20,
                     color: Colors.silver200,
                  }}
                  onSubmit={getSearchedAuthorHandler}
                  refValue={enteredValue}
               />
               {searchedAuthor && (
                  <>
                     <Text style={styles.sectionTitle}>
                        Livros do Autor Pesquisado
                     </Text>
                     <BooksSection items={searchedAuthorData} />
                  </>
               )}
               {!searchedAuthor && (
                  <BookSelectInformation
                     text={'Insira um nome de autor para exibi-lo aqui.'}
                  />
               )}
               <InputIcon
                  bgStyle={styles.inputBgStyle}
                  inputConfig={{
                     placeholder: 'Digite o nome de um livro',
                     returnKeyType: 'search',
                  }}
                  iconConfig={{
                     name: 'search-outline',
                     size: 20,
                     color: Colors.silver200,
                  }}
                  onSubmit={getSearchedBookHandler}
                  refValue={enteredValue}
               />
               {searchedBook && (
                  <>
                     <Text style={styles.sectionTitle}>Livro Pesquisado</Text>
                     <BooksSection items={searchedBookData} />
                  </>
               )}
               {!searchedBook && (
                  <BookSelectInformation
                     text={'Insira um nome de livro para exibi-lo aqui.'}
                  />
               )}
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
               {genIsSelected && <BooksSection items={filteredGenBooks} />}
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
      marginTop: 5,
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
