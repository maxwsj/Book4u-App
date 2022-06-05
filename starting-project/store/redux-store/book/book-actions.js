import axios from 'axios';
import Config from '../../../util/Config';
import { bookActions } from './book-slice';

export function fetchBookData(userToken) {
   return async (dispatch) => {
      async function fetchData() {
         const response = await axios({
            url: Config.API_URL + `api/book/list/${userToken}`,
            method: 'GET',
            timeout: Config.TIMEOUT_REQUEST,
            headers: {
               token: userToken,
               Authorization: `Bearer ${userToken}`,
               'Content-Type': 'application/json',
            },
         });
         const data = response.data;
         console.log(data);
         return data;
      }
      try {
         const bookData = await fetchData();
         for (const book of bookData) {
            dispatch(
               bookActions.getBookData({
                  id: book.id,
                  name: book.name,
                  language: book.language.name,
                  author: book.author.name,
                  owner: {
                     credits: book.owner.credits,
                     firstName: book.owner.firstName,
                     id: book.owner.id,
                     lastName: book.owner.lastName,
                     picture: book.owner.picture,
                  },
                  publisher: book.publisher.name,
                  pagesQuantity: book.pagesQuantity,
                  price: book.price,
                  synopsis: book.synopsis,
                  condition: book.condition,
                  bookImages: {
                     frontSideImage: book.bookImages.frontSideImage,
                     backSideImage: book.bookImages.backSideImage,
                     leftSideImage: book.bookImages.leftSideImage,
                     rightSideImage: book.bookImages.rightSideImage,
                  },
               })
            );
         }
      } catch (error) {}
   };
}
export function filteredBookData(bookData) {
   return (dispatch) => {
      for (const book of bookData) {
         dispatch(
            bookActions.getFilteredBookData({
               id: book.id,
               name: book.name,
               language: book.language,
               author: book.author,
               ownerCredits: book.owner.credits,
               ownerFirstName: book.owner.firstName,
               ownerId: book.owner.id,
               ownerLastName: book.owner.lastName,
               ownerPicture: book.owner.picture,
               publisher: book.publisher,
               pagesQuantity: book.pagesQuantity,
               price: book.price,
               synopsis: book.synopsis,
               condition: book.condition,
               bookImages: {
                  frontSideImage: book.bookImages.frontSideImage,
                  backSideImage: book.bookImages.backSideImage,
                  leftSideImage: book.bookImages.leftSideImage,
                  rightSideImage: book.bookImages.rightSideImage,
               },
            })
         );
      }
   };
}
