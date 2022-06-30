import { StyleSheet, FlatList } from 'react-native';
import React from 'react';
import BookDetailsImage from './BookDetailsImage';

const BookDetailList = ({ bookImages }) => {
   function renderBookItem({ item, index }) {
      return <BookDetailsImage imageUrl={item} />;
   }

   return (
      <>
         <FlatList
            data={bookImages}
            keyExtractor={(item) => item}
            horizontal
            pagingEnabled
            snapToAlignment='start'
            showsHorizontalScrollIndicator={false}
            decelerationRate={'fast'}
            renderItem={renderBookItem}
            nestedScrollEnabled={true}
         />
      </>
   );
};

export default BookDetailList;

const styles = StyleSheet.create({});
