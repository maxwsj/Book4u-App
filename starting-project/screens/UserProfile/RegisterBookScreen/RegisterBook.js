import { StyleSheet, Text, View, ScrollView, TextInput } from 'react-native';
import { launchImageLibraryAsync } from 'expo-image-picker';
import { Divider, Checkbox } from 'react-native-paper';
import { CommonActions } from '@react-navigation/native';
import { useState, useContext, useEffect } from 'react';
import { useSelector } from 'react-redux';

import ImageButton from '../../../componnets/UserLibrarie/ImageButton';
import UserBookTable from '../../../componnets/UserLibrarie/UserBookTable';
import { Colors } from '../../../constants/styles';
import Button from '../../../componnets/UI/Button';
import ImagePreview from '../../../componnets/UserLibrarie/ImagePreview';
import bookService from '../../../util/http-book';
import { AuthContext } from '../../../store/auth-context';

const RegisterBook = ({ route, navigation }) => {
   const authCtx = useContext(AuthContext);

   const [isNewBook, setIsNewBook] = useState(false);
   const [dropdownItem, setDropdownItem] = useState('');
   const [isSemiNewBook, setIsSemiNewBook] = useState(false);
   const [isUsedBook, setIsUsedBook] = useState(false);
   const [bookCondition, setBookCondition] = useState('');
   const [frontSideImage, setFrontSideImage] = useState(null);
   const [rightSide, setRightSide] = useState(null);
   const [leftSide, setLeftSide] = useState(null);
   const [backSide, setBackSide] = useState(null);
   const [formData, setFormData] = useState({
      title: '',
      price: '',
      synopsis: '',
      author: '',
      language: '',
      publisher: '',
      pageQuantity: '',
      condition: '',
   });

   function updateInputValueHandler(inputIdentifier, enteredValue) {
      setFormData((curInputs) => {
         return {
            ...curInputs,
            [inputIdentifier]: enteredValue,
         };
      });
   }

   function newBookCheckBoxHandler() {
      setIsNewBook(!isNewBook);
      setIsSemiNewBook(false);
      setIsUsedBook(false);
   }
   function semiNewBookCheckBoxHandler() {
      setIsSemiNewBook(!isSemiNewBook);
      setIsNewBook(false);
      setIsUsedBook(false);
   }
   function usedBookCheckBoxHandler() {
      setIsUsedBook(!isUsedBook);
      setIsNewBook(false);
      setIsSemiNewBook(false);
   }

   useEffect(() => {
      if (isUsedBook) {
         setBookCondition('Usado');
      }

      if (isNewBook) {
         setBookCondition('Novo');
      }

      if (isSemiNewBook) {
         setBookCondition('Semi-novo');
      }
   }, [isUsedBook, isNewBook, isSemiNewBook]);

   async function frontSideImageHandler() {
      const image = await launchImageLibraryAsync({
         allowsEditing: true,
         aspect: [4, 6],
         quality: 1,
      });

      if (!image.cancelled) {
         setFrontSideImage(image.uri);
      }
   }
   async function rightSideImageHandler() {
      const image = await launchImageLibraryAsync({
         allowsEditing: true,
         aspect: [4, 6],
         quality: 1,
      });

      if (!image.cancelled) {
         setRightSide(image.uri);
      }
   }

   async function submitHandler() {
      const priceConversion = +formData.price.replace(',', '.');
      const fixedPrice = priceConversion.toFixed();

      const bookData = {
         name: formData.title,
         pagesQuantity: +formData.pageQuantity,
         synopsis: formData.synopsis,
         status: 'Disponível',
         condition: bookCondition,
         createdAt: '',
         price: fixedPrice.toString(),
         author: {
            name: formData.author,
         },
         language: {
            name: formData.language,
         },
         publisher: {
            name: formData.publisher,
         },
         category: [
            {
               name: dropdownItem,
            },
         ],
         bookImages: {
            frontSideImage: frontSideImage,
            rightSideImage: rightSide,
            leftSideImage: leftSide,
            backSideImage: backSide,
         },
      };
      bookService.registerBook(bookData, authCtx.token);
      navigation.dispatch(
         CommonActions.reset({
            index: 1,
            routes: [
               { name: 'RegisterBook' },
               {
                  name: 'ProfileData',
               },
            ],
         })
      );
   }
   async function leftSideImageHandler() {
      const image = await launchImageLibraryAsync({
         allowsEditing: true,
         aspect: [4, 6],
         quality: 1,
      });

      if (!image.cancelled) {
         setLeftSide(image.uri);
      }
   }
   async function backSideImageHandler() {
      const image = await launchImageLibraryAsync({
         allowsEditing: true,
         aspect: [4, 6],
         quality: 1,
      });

      if (!image.cancelled) {
         setBackSide(image.uri);
      }
   }

   function selectedItem(selectedItem) {
      setDropdownItem(selectedItem);
   }

   return (
      <ScrollView>
         <ScrollView
            horizontal
            pagingEnabled
            snapToAlignment='start'
            showsHorizontalScrollIndicator={false}
            decelerationRate={'fast'}
            nestedScrollEnabled={true}
            contentContainerStyle={styles.imagePreviewItems}
            style={styles.imagePreviewContainer}
         >
            {/* CRIAR UM OBJETO DESSA IMAGENS ONDE EU POSSA LOOPAR COM MAP E PASSAR O VALOR */}
            <ImagePreview imageUrl={frontSideImage} />
            <ImagePreview imageUrl={backSide} />
            <ImagePreview imageUrl={leftSide} />
            <ImagePreview imageUrl={rightSide} />
         </ScrollView>
         <View style={styles.imageButtonsContainer}>
            <ImageButton setBtnTitle='Capa' onPress={frontSideImageHandler} />
            <ImageButton
               setBtnTitle='Contracapa'
               onPress={backSideImageHandler}
            />
            <ImageButton setBtnTitle='Lombada' onPress={leftSideImageHandler} />
            <ImageButton
               setBtnTitle='Folha de rosto'
               onPress={rightSideImageHandler}
            />
         </View>

         <View style={styles.detailsContainer}>
            <View style={styles.bookPriceContainer}>
               <Text style={styles.bookPriceText}>Pontos: </Text>
               <TextInput
                  style={styles.bookPriceInput}
                  keyboardType='number-pad'
                  placeholder='Digite um Valor'
                  onChangeText={updateInputValueHandler.bind(this, 'price')}
                  value={formData.price}
               />
            </View>
            <View style={styles.synopsisContainer}>
               <Text style={styles.synopsisTitle}>Sinopse</Text>
               <TextInput
                  multiline={true}
                  style={styles.synopsisInput}
                  placeholder='INSIRA UMA SINOPSE AQUI...............'
                  onChangeText={updateInputValueHandler.bind(this, 'synopsis')}
                  value={formData.synopsis}
               />
            </View>
            <Text style={styles.detailsTitle}>Detalhes do livro</Text>
            <View style={styles.detailWrapper}>
               <UserBookTable
                  detailTitle={'Título do Livro'}
                  title={'Insira um Título'}
                  setDivider={true}
                  detailStyles={styles.topDetail}
                  onUpdateValue={updateInputValueHandler.bind(this, 'title')}
                  value={formData.title}
               />
               <UserBookTable
                  detailTitle={'Autor'}
                  title={'Insira um Autor'}
                  setDivider={true}
                  onUpdateValue={updateInputValueHandler.bind(this, 'author')}
                  value={formData.author}
               />
               <UserBookTable
                  detailTitle={'Categoria'}
                  setDivider={true}
                  value={formData.category}
                  setDropdown={true}
                  onSelect={selectedItem}
               />
               <UserBookTable
                  detailTitle={'Idioma'}
                  title={'Insira um idioma'}
                  setDivider={true}
                  onUpdateValue={updateInputValueHandler.bind(this, 'language')}
                  value={formData.language}
               />
               <UserBookTable
                  detailTitle={'Editora'}
                  title={'Insira uma Editora'}
                  setDivider={true}
                  onUpdateValue={updateInputValueHandler.bind(
                     this,
                     'publisher'
                  )}
                  value={formData.publisher}
               />
               <UserBookTable
                  detailTitle={'Número de páginas'}
                  title={'Número de Páginas'}
                  setDivider={true}
                  onUpdateValue={updateInputValueHandler.bind(
                     this,
                     'pageQuantity'
                  )}
                  value={formData.pageQuantity}
                  inputConfig={{
                     keyboardType: 'numeric',
                  }}
               />

               <View style={[styles.detailItems, styles.bottomDetail]}>
                  <View style={styles.detailTitleWrapper}>
                     <Text style={styles.detailItemTitle}>Condição</Text>
                  </View>
                  <Divider style={styles.dividerCheckbox} />
                  <View style={styles.detailTextWrapper}>
                     <View>
                        <Checkbox.Item
                           labelStyle={styles.checkBoxLabelStyle}
                           position='leading'
                           label='Novo'
                           status={isNewBook ? 'checked' : 'unchecked'}
                           onPress={newBookCheckBoxHandler}
                           color='#FF722D'
                        />
                     </View>
                     <View>
                        <Checkbox.Item
                           labelStyle={styles.checkBoxLabelStyle}
                           position='leading'
                           label='Semi-novo'
                           status={isSemiNewBook ? 'checked' : 'unchecked'}
                           onPress={semiNewBookCheckBoxHandler}
                           color='#FF722D'
                        />
                     </View>
                     <View>
                        <Checkbox.Item
                           labelStyle={styles.checkBoxLabelStyle}
                           position='leading'
                           label='Usado'
                           status={isUsedBook ? 'checked' : 'unchecked'}
                           onPress={usedBookCheckBoxHandler}
                           color='#FF722D'
                        />
                     </View>
                  </View>
               </View>
            </View>
            <View style={styles.btnContainer}>
               <Button onPress={submitHandler}>Confirmar</Button>
            </View>
         </View>
      </ScrollView>
   );
};

export default RegisterBook;

const styles = StyleSheet.create({
   container: {
      justifyContent: 'center',
      alignItems: 'center',
   },
   detailsContainer: {
      marginTop: 30,
      marginHorizontal: 30,
      marginBottom: 30,
   },
   detailWrapper: {
      backgroundColor: Colors.silver50,
      borderRadius: 5,
      elevation: 4,
   },
   detailsTitle: {
      fontFamily: 'lato-regular',
      color: Colors.silver400,
      fontSize: 16,
      marginBottom: 14,
   },
   topDetail: {
      marginTop: 30,
   },
   bottomDetail: {
      marginBottom: 24,
   },
   synopsisContainer: {
      marginVertical: 30,
   },
   synopsisTitle: {
      fontFamily: 'lato-regular',
      color: Colors.silver400,
      fontSize: 16,
      marginBottom: 14,
   },
   synopsisInput: {
      flex: 1,
      paddingTop: 10,
      paddingRight: 10,
      paddingBottom: 3,
      paddingLeft: 5,
      backgroundColor: Colors.silver50,
      fontSize: 14,
      color: Colors.silver400,
      fontFamily: 'lato-regular',
      elevation: 3,
      borderRadius: 4,
   },
   bookPriceContainer: {
      flexDirection: 'row',
      alignItems: 'center',
   },
   bookPriceInput: {
      flex: 1,
      paddingRight: 10,
      marginLeft: 10,
      fontSize: 16,
      color: Colors.secondary,
      fontFamily: 'lato-regular',
      borderRadius: 4,
   },
   bookPriceText: {
      fontSize: 18,
      fontFamily: 'lato-regular',
      color: Colors.secondary,
   },
   btnContainer: {
      marginVertical: 30,
   },
   imageButtonsContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
   },
   imagePreviewItems: {
      flexGrow: 1,
      justifyContent: 'center',
      alignItems: 'center',
   },
   imagePreviewContainer: {},
   detailItems: {
      justifyContent: 'space-evenly',
      alignItems: 'center',
      flexDirection: 'row',
      marginTop: 14,
   },

   detailTitleWrapper: {
      width: 65,
   },

   detailTextWrapper: {
      width: 200,
   },

   detailItemTitle: {
      fontFamily: 'lato-bold',
      color: Colors.silver400,
      fontSize: 14,
      textAlign: 'center',
   },

   detailText: {
      fontFamily: 'lato-regular',
      color: Colors.silver300,
      fontSize: 14,
      textAlign: 'center',
   },

   dividerPaper: {
      height: 1,
      marginHorizontal: 15,
      marginVertical: 24,
      backgroundColor: Colors.silver200,
   },

   dividerVertical: {
      width: 1,
      height: 30,
      backgroundColor: Colors.silver400,
   },
   dividerCheckbox: {
      width: 1,
      height: '60%',
      backgroundColor: Colors.silver400,
   },

   inputContainer: {
      borderBottomWidth: 0,
   },

   checkBoxLabelStyle: {
      fontFamily: 'lato-bold',
      color: Colors.silver200,
      fontSize: 14,
      textAlign: 'center',
   },
});
