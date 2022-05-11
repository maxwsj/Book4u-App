import { useLayoutEffect, useEffect, View, Text } from 'react-native';
import BooksSection from '../../../componnets/BooksSection/BooksSection';
import { BOOK_DATA } from '../../../data/dummy-data';

// RESPONSÁVEL POR EXIBIR OS DADOS DE LIVROS REFERENTES A UMA SEÇÃO
function BookDetail({ route, navigation }) {
   const { bookId } = route.params;

   // const displayedBook = Book.filter((mealItem) => {
   //    return mealItem.categoryIds.indexOf(catId) >= 0;
   // });

   // useLayoutEffect(() => {
   //    const categoryTitle = CATEGORIES.find(
   //       (category) => category.id === catId
   //    ).title;

   //    navigation.setOptions({
   //       title: categoryTitle,
   //    });
   // }, [catId, navigation]);

   return (
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
         <Text>{bookId}</Text>
      </View>
   );
}

export default BookDetail;
