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
export function sendUserCellphone(userToken, userCellphone) {
   return async (dispatch) => {
      async function sendData() {
         const response = await axios({
            url: Config.API_URL + `api/personal-data/${userToken}`,
            method: 'POST',
            data: userCellphone,
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
         dispatch(userActions.getUserCellphone(userCellphone));
      } catch (error) {}
   };
}

export function sendUserTelephone(userToken, userTelephone) {
   return async (dispatch) => {
      async function sendData() {
         const response = await axios({
            url: Config.API_URL + `api/personal-data/${userToken}`,
            method: 'POST',
            data: userTelephone,
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
         dispatch(userActions.getUserTelephone(userTelephone));
      } catch (error) {}
   };
}

export function sendUserAddress(userToken, userAddress) {
   return async (dispatch) => {
      async function sendData() {
         const response = await axios({
            url: Config.API_URL + `api/personal-data/${userToken}`,
            method: 'POST',
            data: userAddress,
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
         dispatch(userActions.getUserAddress(userAddress));
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
            userActions.getUserProfilePicture({
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
export function fetchExchangeNotification(userToken) {
   return async (dispatch) => {
      async function fetchData() {
         const response = await axios({
            url:
               Config.API_URL +
               `api/exchange/exchangeRequestNotification/${userToken}`,
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
         const notification = await fetchData();

         dispatch(userActions.getEnxchangeNotification(notification));
      } catch (error) {}
   };
}
export function fetchExchangeCreditNotification(userToken) {
   return async (dispatch) => {
      async function fetchData() {
         const response = await axios({
            url:
               Config.API_URL +
               `api/exchange/creditExchangeRequestNotification/${userToken}`,
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
         const notification = await fetchData();

         dispatch(userActions.getCreditNotification(notification));
      } catch (error) {}
   };
}
export function fetchNotificationInfo(userToken) {
   return async (dispatch) => {
      async function fetchData() {
         const response = await axios({
            url: Config.API_URL + `api/exchange/exchangeInfo/${userToken}`,
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
         const notificationInfo = await fetchData();

         dispatch(userActions.getNotificationInfo(notificationInfo));
      } catch (error) {}
   };
}
export function fetchRequestById(userToken, requestId) {
   return async (dispatch) => {
      async function fetchData() {
         const response = await axios({
            url: Config.API_URL + `api/exchange/getRequestById/${requestId}`,
            method: 'GET',
            timeout: Config.TIMEOUT_REQUEST,
            headers: {
               Authorization: `Bearer ${userToken}`,
               'Content-Type': 'application/json',
            },
         });
         const data = response.data;
         return data;
      }
      try {
         const request = await fetchData();
         dispatch(userActions.getUserRequestDetails(request));
      } catch (error) {}
   };
}

export function fetchUserHistory(userToken) {
   return async (dispatch) => {
      async function fetchData() {
         const response = await axios({
            url: Config.API_URL + `api/history/${userToken}`,
            method: 'GET',
            timeout: Config.TIMEOUT_REQUEST,
            headers: {
               token: userToken,
               Authorization: `Bearer ${userToken}`,
               'Content-Type': 'application/json',
            },
         });
         const data = response.data.book;
         return data;
      }
      try {
         const history = await fetchData();
         dispatch(userActions.getUserHistory(history));
      } catch (error) {}
   };
}

export function getFilteredHistoryData(filteredHistory) {
   return async (dispatch) => {
      dispatch(userActions.getFilteredHistory(filteredHistory));
   };
}

export function fetchUserCredits(userToken) {
   return async (dispatch) => {
      async function fetchData() {
         const response = await axios({
            url: Config.API_URL + `api/user/getUserCredits/${userToken}`,
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
         const credits = await fetchData();
         dispatch(userActions.getUserCredits(+credits));
      } catch (error) {}
   };
}
