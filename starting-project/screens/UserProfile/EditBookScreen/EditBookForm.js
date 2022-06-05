import {
   StyleSheet,
   Text,
   View,
   Dimensions,
   ScrollView,
   TextInput,
} from 'react-native';
import { launchImageLibraryAsync } from 'expo-image-picker';

import { useState, useEffect } from 'react';

import ImageButton from '../../../componnets/UserLibrarie/ImageButton';
import UserBookTable from '../../../componnets/UserLibrarie/UserBookTable';
import { Colors } from '../../../constants/styles';
import Button from '../../../componnets/UI/Button';
import ImagePreview from '../../../componnets/UserLibrarie/ImagePreview';

const { width, height } = Dimensions.get('window');

const EditBookForm = ({ route, navigation }) => {
   const [formData, setFormData] = useState({
      price: '',
      synopsis: '',
      title: '',
      author: '',
      language: '',
      publisher: '',
      format: '',
      model: '',
      condition: '',
   });

   // useEffect(() => {
   //    if (

   //    ) {
   //       setFormData({
   //          price: '',
   //          synopsis: '',
   //          title: '',
   //          author: '',
   //          language: '',
   //          publisher: '',
   //          format: '',
   //          model: '',
   //          condition: '',
   //       });
   //    }
   // }, [formData]);

   function updateInputValueHandler(inputIdentifier, enteredValue) {
      setFormData((curInputs) => {
         return {
            ...curInputs,
            [inputIdentifier]: enteredValue,
         };
      });
   }

   function submitHandler() {
      // onSubmit({
      // price: formData.price,
      // synopsis: formData.synopsis,
      // title: formData.title,
      // author: formData.author,
      // language: formData.language,
      // publisher: formData.publisher,
      // format: formData.format,
      // model: formData.model,
      // condition: formData.condition,
      // });
      const bookData = {
         price: formData.price,
         synopsis: formData.synopsis,
         title: formData.title,
         author: formData.author,
         language: formData.language,
         publisher: formData.publisher,
         format: formData.format,
         model: formData.model,
         condition: formData.condition,
         bookImages: {
            frontSideImage: frontSideImage,
            rightSideImage: rightSide,
            leftSideImage: leftSide,
            backSideImage: backSide,
         },
      };
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
               <Text style={styles.bookPriceText}>R$</Text>
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
               />
               <UserBookTable
                  detailTitle={'Autor'}
                  title={'Insira um Autor'}
                  setDivider={true}
                  onUpdateValue={updateInputValueHandler.bind(this, 'author')}
                  value={formData.author}
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
                  detailTitle={'Formato'}
                  title={'Insira um formato'}
                  setDivider={true}
                  onUpdateValue={updateInputValueHandler.bind(this, 'format')}
                  value={formData.format}
               />
               <UserBookTable
                  detailTitle={'Modelo'}
                  title={'Insira o modelo'}
                  setDivider={true}
                  onUpdateValue={updateInputValueHandler.bind(this, 'model')}
                  value={formData.model}
               />
               <UserBookTable
                  detailTitle={'Condição'}
                  title={'Insira a condição'}
                  detailStyles={styles.bottomDetail}
                  onUpdateValue={updateInputValueHandler.bind(
                     this,
                     'condition'
                  )}
                  value={formData.condition}
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
