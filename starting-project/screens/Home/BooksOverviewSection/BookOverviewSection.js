import { useLayoutEffect, useEffect } from 'react';
import BooksSection from '../../../componnets/BooksSection/BooksSection';
import { BOOK_DATA } from '../../../data/dummy-data';

// RESPONSÁVEL POR EXIBIR OS DADOS DE LIVROS REFERENTES A UMA SEÇÃO
function BookOverviewSection({ route, navigation }) {
   // const catId = route.params.categoryId;

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

   return <BooksSection items={BOOK_DATA} />;
}

export default BookOverviewSection;
