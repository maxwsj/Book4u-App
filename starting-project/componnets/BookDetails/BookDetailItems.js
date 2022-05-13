import { StyleSheet, Text, View, Pressable, Dimensions } from 'react-native';
import { useEffect, useState } from 'react';
import { Title, Avatar, Divider } from 'react-native-paper';
import { Colors } from '../../constants/styles';
import Button from '../UI/Button';
import BookDetailTable from './BookDetailTable';
import BookInfoContainer from './BookInfoContainer';
import BookTradeContainer from './BookTradeContainer';

const { width } = Dimensions.get('window');

const BookDetailItems = ({ bookData }) => {
   const bookDetailData = { ...bookData };

   return (
      <View style={styles.container}>
         <View style={styles.sectionInfo}>
            <View>
               <Text style={styles.price}>R${bookDetailData[0].price}</Text>
               <Title style={styles.title}>{bookDetailData[0].name}</Title>
               <Text style={styles.author}>
                  {bookDetailData[0].author.name}
               </Text>
            </View>
            <View style={styles.userProfile}>
               <Pressable onPress={() => console.log('profile')}>
                  <Avatar.Image
                     size={50}
                     style={styles.profileBackgroundColor}
                  />
               </Pressable>
               <Text style={styles.userProfileText}>Fernando de Morais</Text>
            </View>
         </View>
         <BookInfoContainer
            dividerStyle={styles.divider}
            bookData={bookDetailData}
         />
         <View style={styles.bookSynopsis}>
            <Text style={styles.titleSynopsis}>Sinopse</Text>
            <Text style={styles.textSynopsis}>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
               lobortis diam mollis tellus vehicula hendrerit tellus vehicula
               hendrerit. Proin maximus, elit eu consectetur elit eu consectetur
               elit eu consectetur elit eu consectetur.
            </Text>
         </View>
         <View style={styles.tradeWrapper}>
            <View style={styles.tradeItems}>
               <BookTradeContainer dividerStyle={styles.divider} />
            </View>
            <View style={styles.tradeItems}>
               <Button
                  stylesBtn={styles.btnStyle}
                  onPress={() => console.log('trocar')}
               >
                  Trocar
               </Button>
            </View>
         </View>
         <View style={styles.detailsContainer}>
            <Text style={styles.detailsTitle}>Detalhes do livro</Text>
            <View style={styles.detailWrapper}>
               <BookDetailTable
                  detailTitle={'Título do Livro'}
                  title={'How Innovation Works'}
                  setDivider={true}
                  detailStyles={styles.topDetail}
               />
               <BookDetailTable
                  detailTitle={'Autor'}
                  title={'Matt Ridley'}
                  setDivider={true}
               />
               <BookDetailTable
                  detailTitle={'Idioma'}
                  title={'Matt Ridley'}
                  setDivider={true}
               />
               <BookDetailTable
                  detailTitle={'Editora'}
                  title={'Arqueiro'}
                  setDivider={true}
               />
               <BookDetailTable
                  detailTitle={'Formato'}
                  title={'Papel'}
                  setDivider={true}
               />
               <BookDetailTable
                  detailTitle={'Modelo'}
                  title={'9999830'}
                  setDivider={true}
               />
               <BookDetailTable
                  detailTitle={'Condição'}
                  title={'Novo'}
                  detailStyles={styles.bottomDetail}
               />
            </View>
         </View>
      </View>
   );
};

export default BookDetailItems;

const styles = StyleSheet.create({
   container: {
      marginTop: 40,
      backgroundColor: Colors.white,
   },
   sectionInfo: {
      justifyContent: 'space-around',
      alignItems: 'center',
      flexDirection: 'row',
      marginTop: 30,
   },
   userProfile: {
      justifyContent: 'center',
      alignItems: 'center',
   },
   userProfileText: {
      fontFamily: 'lato-bold',
      color: Colors.silver400,
      textAlign: 'center',
      fontSize: 12,
      width: 60,
   },
   profileBackgroundColor: {
      backgroundColor: Colors.silver100,
      borderColor: Colors.silver300,
   },
   price: {
      fontFamily: 'lato-regular',
      color: Colors.darkBlue,
   },
   title: {
      fontFamily: 'lato-regular',
      color: Colors.silver400,
      width: width * 0.6,
   },
   titleSynopsis: {
      fontFamily: 'lato-regular',
      color: Colors.silver400,
      fontSize: 16,
   },
   textSynopsis: {
      fontFamily: 'lato-regular',
      color: Colors.silver300,
      marginTop: 15,
      textAlign: 'justify',
   },
   author: {
      fontFamily: 'lato-regular',
      color: Colors.silver300,
   },
   divider: {
      borderRightWidth: 1,
      paddingRight: 24,
      borderRightColor: Colors.silver300,
   },
   dividerPaper: {
      height: 1,
      marginHorizontal: 15,
      marginVertical: 24,
      backgroundColor: Colors.silver200,
   },
   bookSynopsis: {
      marginTop: 30,
      marginHorizontal: 30,
   },
   detailsContainer: {
      marginTop: 30,
      marginHorizontal: 30,
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
   bottomDetail: {
      marginBottom: 24,
   },
   topDetail: {
      marginTop: 30,
   },
   tradeWrapper: {
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      marginTop: 30,
      marginHorizontal: 30,
   },
   tradeItems: {},
   btnStyle: {
      justifyContent: 'center',
      height: 60,
      backgroundColor: Colors.darkBlue,
   },
});
