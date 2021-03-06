import { StyleSheet, Text, View, Pressable, Dimensions } from 'react-native';
import { Title, Avatar } from 'react-native-paper';
import { Colors } from '../../../constants/styles';

import BookDetailTable from '../../BookDetails/BookDetailTable';
import BookInfoContainer from '../../BookDetails/BookInfoContainer';
import BookSynopsisContainer from '../../BookDetails/BookSynopsisContainer';
import BookTradeContainer from '../../BookDetails/BookTradeContainer';
import Button from '../../UI/Button';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
const DEFAULT_USER_IMG = require('../../../assets/userImg/userProfileDefault.png');

const { width } = Dimensions.get('window');

const UserBookDetailItem = ({ bookData, isExternalUser }) => {
   const navigation = useNavigation();
   const userData = useSelector((state) => state.externalUser.userData);

   function tradeButtonHandler() {
      navigation.navigate('PaymentMethodScreen', {
         externalBookId: bookData.id,
      });
   }

   const userImg =
      userData.picture === '' ? DEFAULT_USER_IMG : { uri: userData.picture };

   return (
      <View style={styles.container}>
         <View style={styles.sectionInfo}>
            <View>
               <Text style={styles.price}>Pontos: {bookData.price}</Text>
               <Title style={styles.title}>{bookData.name}</Title>
               <Text style={styles.author}>{bookData.author}</Text>
            </View>
            <View style={styles.userProfile}>
               <Avatar.Image
                  size={50}
                  style={styles.profileBackgroundColor}
                  source={userImg}
               />
               <Text style={styles.userProfileText}>
                  {`${userData.firstName} ${userData.lastName}`}
               </Text>
            </View>
         </View>
         <BookInfoContainer dividerStyle={styles.divider} bookData={bookData} />
         <BookSynopsisContainer synopsisText={bookData.synopsis} />
         {isExternalUser && (
            <View style={styles.tradeWrapper}>
               <View style={styles.tradeItems}>
                  <BookTradeContainer />
               </View>
               <View style={styles.tradeItems}>
                  <Button
                     stylesBtn={styles.btnStyle}
                     onPress={tradeButtonHandler}
                  >
                     Trocar
                  </Button>
               </View>
            </View>
         )}
         <View style={styles.detailsContainer}>
            <Text style={styles.detailsTitle}>Detalhes do livro</Text>
            <View style={styles.detailWrapper}>
               <BookDetailTable
                  detailTitle={'T??tulo do Livro'}
                  title={bookData.name}
                  setDivider={true}
                  detailStyles={styles.topDetail}
               />
               <BookDetailTable
                  detailTitle={'Autor'}
                  title={bookData.author}
                  setDivider={true}
               />
               <BookDetailTable
                  detailTitle={'Idioma'}
                  title={bookData.language}
                  setDivider={true}
               />
               <BookDetailTable
                  detailTitle={'Editora'}
                  title={bookData.publisher}
                  setDivider={true}
               />
               <BookDetailTable
                  detailTitle={'Condi????o'}
                  title={bookData.condition}
                  detailStyles={styles.bottomDetail}
               />
            </View>
         </View>
      </View>
   );
};

export default UserBookDetailItem;

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
      color: Colors.secondary,
   },
   title: {
      fontFamily: 'lato-regular',
      color: Colors.silver400,
      width: width * 0.6,
   },
   author: {
      fontFamily: 'lato-regular',
      color: Colors.silver300,
   },

   dividerPaper: {
      height: 1,
      marginHorizontal: 15,
      marginVertical: 24,
      backgroundColor: Colors.silver200,
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
      backgroundColor: Colors.secondary,
   },
});
