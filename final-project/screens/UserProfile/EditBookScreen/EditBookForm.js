import {
   StyleSheet,
   Text,
   View,
   Dimensions,
   ScrollView,
   TextInput,
} from 'react-native';
import { launchImageLibraryAsync } from 'expo-image-picker';

import { useState, useContext } from 'react';

import ImageButton from '../../../componnets/UserLibrarie/ImageButton';
import UserBookTable from '../../../componnets/UserLibrarie/UserBookTable';
import { Colors } from '../../../constants/styles';
import Button from '../../../componnets/UI/Button';
import ImagePreview from '../../../componnets/UserLibrarie/ImagePreview';
import { AuthContext } from '../../../store/auth-context';
const { width, height } = Dimensions.get('window');

const EditBookForm = ({ route, navigation }) => {
   const { bookId } = route.params;
   const authCtx = useContext(AuthContext);
   const [isInvalid, setIsInvalid] = useState(false);

   const [formData, setFormData] = useState({
      title: '',
      price: '',
      synopsis: '',
      pageQuantity: '',
   });

   function updateInputValueHandler(inputIdentifier, enteredValue) {
      setFormData((curInputs) => {
         return {
            ...curInputs,
            [inputIdentifier]: enteredValue,
         };
      });
   }

   async function submitHandler() {
      let {
         title,
         price,
         synopsis,
         author,
         language,
         publisher,
         pageQuantity,
         condition,
      } = formData;

      title = title.trim();
      price = +price.trim().replace(',', '.');
      synopsis = synopsis.trim();
      author = author.trim();
      language = language.trim();
      publisher = publisher.trim();
      pageQuantity = +pageQuantity.trim();
      condition = condition.trim();

      const titleIsInvalid = title.length > 0;
      const synopsisIsInvalid = synopsis.length > 0;
      const authorIsInvalid = author.length > 0;
      const languageIsInvalid = language.length > 0;
      const publisherIsInvalid = publisher.length > 0;
      const isUnchecked = isNewBook || isSemiNewBook || isUsedBook;

      const pagesQuantityIsInvalid = pageQuantity > 0;
      const dropDownValueIsInvalid = !dropdownItem === null;
      const frontSideImageIsInvalid = !frontSideImage === null;
      const backSideIsInvalid = !backSide === null;
      const rightSideIsInvalid = !rightSide === null;
      const leftSideIsInvalid = !leftSide === null;

      if (
         !titleIsInvalid ||
         !synopsisIsInvalid ||
         !authorIsInvalid ||
         !languageIsInvalid ||
         !publisherIsInvalid ||
         !isUnchecked ||
         !pagesQuantityIsInvalid ||
         dropDownValueIsInvalid ||
         frontSideImageIsInvalid ||
         backSideIsInvalid ||
         rightSideIsInvalid ||
         leftSideIsInvalid
      ) {
         setIsInvalid(true);
      } else {
         const bookData = {
            name: title,
            pagesQuantity: pageQuantity,
            synopsis: synopsis,
            status: 'Disponível',
            condition: bookCondition,
            createdAt: '',
            price: price.toString(),
            author: {
               name: author,
            },
            language: {
               name: language,
            },
            publisher: {
               name: publisher,
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
         setIsInvalid(false);
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
   }

   const [frontSideImage, setFrontSideImage] = useState(null);
   const [rightSide, setRightSide] = useState(null);
   const [leftSide, setLeftSide] = useState(null);
   const [backSide, setBackSide] = useState(null);

   async function frontSideImageHandler() {
      const image = await launchImageLibraryAsync({
         allowsEditing: true,
         aspect: [4, 8],
         quality: 1,
      });
      const { uri } = image;

      if (!image.cancelled) {
         setFrontSideImage(image.uri);
      }
   }
   async function rightSideImageHandler() {
      const image = await launchImageLibraryAsync({
         allowsEditing: true,
         aspect: [4, 8],
         quality: 1,
      });
      const { uri } = image;

      if (!image.cancelled) {
         setRightSide(image.uri);
      }
   }
   async function leftSideImageHandler() {
      const image = await launchImageLibraryAsync({
         allowsEditing: true,
         aspect: [4, 8],
         quality: 1,
      });
      const { uri } = image;

      if (!image.cancelled) {
         setLeftSide(image.uri);
      }
   }
   async function backSideImageHandler() {
      const image = await launchImageLibraryAsync({
         allowsEditing: true,
         aspect: [4, 8],
         quality: 1,
      });
      const { uri } = image;

      if (!image.cancelled) {
         setBackSide(image.uri);
      }
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
                  keyboardType='numeric'
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
                  isInvalid={isInvalid}
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
                  isInvalid={isInvalid}
               />
            </View>
            <View style={styles.btnContainer}>
               <Button onPress={submitHandler}>Confirmar</Button>
            </View>
         </View>
      </ScrollView>
   );
};

export default EditBookForm;

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
});
