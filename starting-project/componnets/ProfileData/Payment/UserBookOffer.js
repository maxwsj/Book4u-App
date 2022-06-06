import { StyleSheet, Text, View, Image } from 'react-native';
import { Colors } from '../../../constants/styles';

const UserBookOffer = ({ offerBookData }) => {
   return (
      <View style={styles.bookContainer}>
         <View style={styles.imageContainer}>
            <Image
               style={styles.bookImage}
               source={{
                  uri: offerBookData.bookImages.frontSideImage,
               }}
            />
         </View>
         <View style={styles.bookInfoContainer}>
            <Text style={styles.bookTitle}>{offerBookData.name}</Text>
            <Text style={styles.bookAuthor}>{offerBookData.author}</Text>
            <Text style={styles.bookPrice}>{`R$${offerBookData.price}`}</Text>
         </View>
      </View>
   );
};

export default UserBookOffer;

const styles = StyleSheet.create({
   imageContainer: {
      width: 150,
      height: 200,
      marginVertical: 14,
   },
   bookContainer: {
      flexDirection: 'row',
   },
   bookInfoContainer: {
      marginTop: 20,
      width: 175,
      marginHorizontal: 14,
   },
   bookImage: {
      width: '100%',
      height: '100%',
      borderRadius: 5,
   },
   bookTitle: {
      color: Colors.silver400,
      fontFamily: 'lato-regular',
      fontSize: 14,
   },
   bookAuthor: {
      color: Colors.silver400,
      fontFamily: 'lato-light',
      fontSize: 12,
      marginTop: 8,
   },
   bookPrice: {
      color: Colors.secondary,
      fontFamily: 'lato-regular',
      fontSize: 18,
      marginTop: 14,
   },
});
