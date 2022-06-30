import { StyleSheet, View, FlatList } from 'react-native';
import BookVerticalItem from '../../../componnets/UserLibrarie/BookVerticalItem';
import { useSelector } from 'react-redux';
import { useContext } from 'react';
import userService from '../../../util/http-user';
import { AuthContext } from '../../../store/auth-context';

const DeleteBook = ({ navigation }) => {
   const authCtx = useContext(AuthContext);
   const userLibrarie = useSelector((state) => state.user.userLibrarie);

   function renderBookItem(itemData) {
      async function pressHandler() {
         userService
            .removeBookFromLibrarie(authCtx.token, itemData.item.id)
            .then(() => navigation.navigate('Home'));
      }

      const book = itemData.item;

      const bookItemProps = {
         id: book.id,
         title: book.name,
         imageUrl: book.bookImages.frontSideImage,
         onPress: pressHandler,
      };

      return <BookVerticalItem {...bookItemProps} />;
   }

   return (
      <View>
         <FlatList
            data={userLibrarie}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            decelerationRate={'fast'}
            renderItem={renderBookItem}
         />
      </View>
   );
};

export default DeleteBook;

const styles = StyleSheet.create({});
