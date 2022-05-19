import {
   StyleSheet,
   Text,
   View,
   Dimensions,
   ScrollView,
   TextInput,
} from 'react-native';
import { useState } from 'react';

import ImageButton from '../../../componnets/UserLibrarie/ImageButton';
import UserBookTable from '../../../componnets/UserLibrarie/UserBookTable';
import { Colors } from '../../../constants/styles';
import Button from '../../../componnets/UI/Button';

const { width, height } = Dimensions.get('window');

const UserLibrarie = () => {
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
      //    price: formData.price,
      //    synopsis: formData.synopsis,
      //    title: formData.title,
      //    author: formData.author,
      //    language: formData.language,
      //    publisher: formData.publisher,
      //    format: formData.format,
      //    model: formData.model,
      //    condition: formData.condition,
      // });
      onClose();
   }

   return (
      <ScrollView>
         <View style={styles.container}>
            <ImageButton />
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

export default UserLibrarie;

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
});
