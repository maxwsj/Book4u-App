import axios from 'axios';
import Config from './Config';

class UserService {
   async getUserById(userId) {
      const response = await axios({
         url: Config.API_URL + `api/user/getUserByToken/${userId}`,
         method: 'GET',
         timeout: Config.TIMEOUT_REQUEST,
         headers: Config.HEADER_REQUEST,
      });
      return response.data;
   }
   async sendUserAddress(userAddress, userToken) {
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
   }
   async getUserLibrarie(userToken) {
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
      return response.data;
   }
}

let userService = new UserService();
export default userService;
