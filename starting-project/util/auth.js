import axios from 'axios';
import Config from './Config';

class UsuarioService {
   async createUser(userData) {
      const response = await axios({
         url: Config.API_URL + 'api/user',
         method: 'POST',
         timeout: Config.TIMEOUT_REQUEST,
         data: userData,
         headers: Config.HEADER_REQUEST,
      });
      const registerNumber = response.data.createdUser.registerNumber;

      return registerNumber;
      // .then((response) => {
      //    console.log('NO ERROR');
      //    console.log(`RESPOSTA LOGADA: ${response.request}`);
      // })
      // .catch((error) => {
      //    console.log('ERROR');

      //    if (error.response) {
      //       // The request was made and the server responded with a status code
      //       // that falls out of the range of 2xx
      //       console.log(error.response.data);
      //       console.log(error.response.status);
      //       console.log(error.response.headers);
      //    } else if (error.request) {
      //       // The request was made but no response was received
      //       // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      //       // http.ClientRequest in node.js
      //       console.log(error.request);
      //    } else {
      //       // Something happened in setting up the request that triggered an Error
      //       console.log('Error', error.message);
      //    }
      //    return Promise.reject(error);
      // });
   }
}

let usuarioService = new UsuarioService();
export default usuarioService;
