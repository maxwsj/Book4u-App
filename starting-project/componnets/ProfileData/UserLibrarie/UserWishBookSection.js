import { View, FlatList, Dimensions } from 'react-native';
import BookItems from '../../BooksSection/BookItems';

const { width } = Dimensions.get('window');

const UserWishBookSection = ({ items, isExternal }) => {
   function renderBookItem(itemData) {
      const book = itemData.item;

      const bookItemProps = {
         id: book.id,
         title: book.name,
         imageUrl: book.bookImages.frontSideImage,
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

export default UserWishBookSection;
