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
         return data;
      }
      try {
         const bookData = await fetchData();
         const books = bookData.map((book) => {
            return {
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
                  cellphone: book.owner.personalData.cellphone,
                  city: book.owner.personalData.city,
                  complement: book.owner.personalData.complement,
                  district: book.owner.personalData.district,
                  houseNumber: book.owner.personalData.houseNumber,
                  state: book.owner.personalData.state,
                  streetName: book.owner.personalData.streetName,
                  telephone: book.owner.personalData.telephone,
                  zipCode: book.owner.personalData.zipCode,
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
            };
         });

         dispatch(bookActions.getBookData(books));
      } catch (error) {}
   };
}

export function filteredBookData(bookData) {
   return (dispatch) => {
      dispatch(bookActions.getFilteredBookData(bookData[0]));
   };
}

export function fetchGenBookData(userToken, selectedItem) {
   return async (dispatch) => {
      async function fetchData() {
         const response = await axios({
            url:
               Config.API_URL +
               `api/book/get-books-in/${selectedItem}/${userToken}`,
            method: 'GET',
            timeout: Config.TIMEOUT_REQUEST,
            headers: {
               token: userToken,
               Authorization: `Bearer ${userToken}`,
               'Content-Type': 'application/json',
            },
         });
         const data = response.data;
         return data;
      }
      try {
         const bookData = await fetchData();
         dispatch(bookActions.getBookGenData(bookData));
      } catch (error) {}
   };
}
