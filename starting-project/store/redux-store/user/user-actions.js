import axios from 'axios';
import Config from '../../../util/Config';
import { userActions } from './user-slice';

export function sendUserPersonalData(userToken, userPersonalData) {
   return async (dispatch) => {
      async function sendData() {
         const response = await axios({
            url: Config.API_URL + `api/personal-data/${userToken}`,
            method: 'POST',
            data: userPersonalData,
            timeout: Config.TIMEOUT_REQUEST,
            headers: {
               token: userToken,
               Authorization: `Bearer ${userToken}`,
               'Content-Type': 'application/json',
            },
         });
         return response.status;
      }
      try {
         const response = await sendData();
         const { state, city, address, cellphone, complement, telephone } =
            userPersonalData;
         dispatch(
            userActions.getUserData({
               state,
               city,
               address,
               cellphone,
               complement,
               telephone,
            })
         );
      } catch (error) {}
   };
}

export function fetchUserData(userToken) {
   return async (dispatch) => {
      async function fetchData() {
         const response = await axios({
            url: Config.API_URL + `api/user/getUserByToken/${userToken}`,
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
         const userData = await fetchData();
         dispatch(
            userActions.getUserData({
               id: userData.id,
               firstName: userData.firstName,
               lastName: userData.lastName,
               fullName: `${userData.firstName} ${userData.lastName}`,
               state: userData.personalData.state,
               city: userData.personalData.city,
               address: userData.personalData.streetName,
               cellphone: userData.personalData.cellphone,
               complement: userData.personalData.complement,
               cpf: userData.personalData.cpf,
               email: userData.personalData.email,
               telephone: userData.personalData.telephone,
               picture: userData.picture,
            })
         );
      } catch (error) {}
   };
}

export function sendUserProfilePicture(userToken, userProfilePicture) {
   return async (dispatch) => {
      async function sendData() {
         const response = await axios({
            url: Config.API_URL + `api/user/${userToken}`,
            method: 'PUT',
            data: userProfilePicture,
            timeout: Config.TIMEOUT_REQUEST,
            headers: {
               token: userToken,
               Authorization: `Bearer ${userToken}`,
               'Content-Type': 'application/json',
            },
         });
         return response;
      }
      try {
         const response = await sendData();
         const { picture } = userProfilePicture;
         dispatch(
            userActions.getUserData({
               picture,
            })
         );
      } catch (error) {}
   };
}

export function filteredUserBook(bookData) {
   return (dispatch) => {
      for (const book of bookData) {
         dispatch(
            userActions.getFilteredBook({
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

export function fetchUserLibrarie(userToken) {
   return async (dispatch) => {
      async function fetchData() {
         const response = await axios({
            url: Config.API_URL + `api/book/userLibrary/${userToken}`,
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
         const librarieData = await fetchData();
         const librarie = librarieData.map((book) => {
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
         dispatch(userActions.getLibrarie(librarie));
      } catch (error) {}
   };
}
