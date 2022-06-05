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
         console.log(response);
         const { picture } = userProfilePicture;
         dispatch(
            userActions.getUserData({
               picture,
            })
         );
      } catch (error) {}
   };
}
