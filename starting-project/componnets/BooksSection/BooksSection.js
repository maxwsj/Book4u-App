import { StyleSheet, View, FlatList, Dimensions } from 'react-native';
import BookItems from './BookItems';
import { useNavigation } from '@react-navigation/native';

import { Colors } from '../../constants/styles';
import { useEffect } from 'react';

const { width } = Dimensions.get('window');

const BooksSection = ({ items }) => {
   const navigation = useNavigation();

   function renderBookItem(itemData) {
      function pressHandler() {
         navigation.navigate('BookDetail', {
            bookId: itemData.item.id,
         });
      }

      const book = itemData.item;

      const bookItemProps = {
         id: book.id,
         title: book.name,
         imageUrl: book.bookImages.frontSideImage,
         onPress: pressHandler,
      };

      return <BookItems {...bookItemProps} />;
   }

   return (
      <View>
         <FlatList
            data={items}
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            horizontal
            snapToAlignment='start'
            snapToOffsets={[...Array(items.length)].map(
               (x, i) => i * (width * 0.8 - 40) + (i - 1) * 40
            )}
            decelerationRate={'fast'}
            scrollEventThrottle={16}
            renderItem={renderBookItem}
         />
      </View>
   );
};

export default BooksSection;

const styles = StyleSheet.create({
   imageContainer: {
      width: width * 0.4 - 25,
      height: width / 2,
      marginHorizontal: 10,
   },
   bookImage: {
      width: '100%',
      height: '100%',
      borderRadius: 5,
   },
   pressed: {
      opacity: 0.7,
   },
   textItem: {
      textAlign: 'center',
      fontFamily: 'poppins-regular',
      fontSize: 12,
      color: Colors.silver400,
   },
});
