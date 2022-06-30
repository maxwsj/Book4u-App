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
export function fetchRecentBookData(userToken, days) {
   return async (dispatch) => {
      async function fetchData() {
         const response = await axios({
            url:
               Config.API_URL +
               `api/book/list-recent-books/${days}/${userToken}`,
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
         const recentBookData = await fetchData();
         const recentBooks = recentBookData.map((book) => {
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
         dispatch(bookActions.getRecentBookData(recentBooks));
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
         const genBookData = bookData.map((book) => {
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
         dispatch(bookActions.getBookGenData(genBookData));
      } catch (error) {}
   };
}

export function getSearchedBook(userToken, searchedBook) {
   return async (dispatch) => {
      async function fetchData() {
         const response = await axios({
            url: Config.API_URL + `api/book/get-books-named/${searchedBook}`,
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
         const searchedBook = bookData.map((book) => {
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
         dispatch(bookActions.getSearchedBookData(searchedBook));
      } catch (error) {}
   };
}

export function getSearchedAuthor(userToken, searchedAuthor) {
   return async (dispatch) => {
      async function fetchData() {
         const response = await axios({
            url:
               Config.API_URL + `api/book/get-book-by-author/${searchedAuthor}`,
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
         dispatch(bookActions.getSearchedAuthorBookData(books));
      } catch (error) {}
   };
}

export function fetchBookGenRegistered(userToken) {
   return async (dispatch) => {
      async function fetchData() {
         const response = await axios({
            url: Config.API_URL + `api/category/list-all/existent`,
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
         const genData = await fetchData();
         const genLabels = genData.map((gen) => {
            return {
               label: gen.name,
               value: gen.name,
            };
         });
         dispatch(bookActions.getRegisteredBookGen(genLabels));
      } catch (error) {}
   };
}
