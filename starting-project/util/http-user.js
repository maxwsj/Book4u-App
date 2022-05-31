import axios from 'axios';
import Config from './Config';

class UserService {
   async getUserById(userId) {
      const response = await axios({
         url: Config.API_URL + `api/user/getUserById/${userId}`,
         method: 'GET',
         timeout: Config.TIMEOUT_REQUEST,
         headers: Config.HEADER_REQUEST,
      });
      console.log(response.data);
      return response.data;
   }
   async sendUserAddress(userAddress) {
      const response = await axios({
         url: Config.API_URL + `api/personal-data/`,
         method: 'POST',
         data: userAddress,
         timeout: Config.TIMEOUT_REQUEST,
         headers: Config.HEADER_REQUEST,
      });
      console.log(response);
   }
}

let userService = new UserService();
export default userService;

// .then((response) => {
//       console.log('NO ERROR');
//       console.log(`RESPOSTA LOGADA: ${response.request}`);
//    })
//    .catch((error) => {
//       console.log('ERROR');

//       if (error.response) {
//          // The request was made and the server responded with a status code
//          // that falls out of the range of 2xx
//          console.log(error.response.data);
//          console.log(error.response.status);
//          console.log(error.response.headers);
//       } else if (error.request) {
//          // The request was made but no response was received
//          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
//          // http.ClientRequest in node.js
//          console.log(error.request);
//       } else {
//          // Something happened in setting up the request that triggered an Error
//          console.log('Error', error.message);
//       }
//       return Promise.reject(error);
//    });
