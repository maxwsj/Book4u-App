import axios from 'axios';
import Config from './Config';

class UserService {
   async exchangeBookWithBook(userToken, userBook, userExchangeOption) {
      const response = await axios({
         url:
            Config.API_URL +
            `api/exchange/exchangeBookWithBook/${userBook}/${userExchangeOption}`,
         method: 'POST',
         timeout: Config.TIMEOUT_REQUEST,
         headers: {
            token: userToken,
            Authorization: `Bearer ${userToken}`,
            'Content-Type': 'application/json',
         },
      });
   }
   async exchangeBookWithCredit(userToken, userExchangeOption) {
      const response = await axios({
         url:
            Config.API_URL +
            `api/exchange/exchangeCreditsWithBook/${userToken}/${userExchangeOption}`,
         method: 'POST',
         timeout: Config.TIMEOUT_REQUEST,
         headers: {
            token: userToken,
            Authorization: `Bearer ${userToken}`,
            'Content-Type': 'application/json',
         },
      });
   }
   async confirmExchange(userToken, bookId, exchangeResponse) {
      const response = await axios({
         url:
            Config.API_URL +
            `api/exchange/confirmExchangeBook/${bookId}/${exchangeResponse}`,
         method: 'PUT',
         timeout: Config.TIMEOUT_REQUEST,
         headers: {
            token: userToken,
            Authorization: `Bearer ${userToken}`,
            'Content-Type': 'application/json',
         },
      });
   }

   async confirmCreditExchange(userToken, tradeId, exchangeResponse) {
      const response = await axios({
         url:
            Config.API_URL +
            `api/exchange/confirmCreditExchange/${tradeId}/${exchangeResponse}`,
         method: 'PUT',
         timeout: Config.TIMEOUT_REQUEST,
         headers: {
            token: userToken,
            Authorization: `Bearer ${userToken}`,
            'Content-Type': 'application/json',
         },
      })
         .then((response) => {
            console.log('NO ERROR');
            console.log(`RESPOSTA LOGADA: ${response.request}`);
         })
         .catch((error) => {
            console.log('ERROR');

            if (error.response) {
               // The request was made and the server responded with a status code
               // that falls out of the range of 2xx
               console.log(error.response.data);
               console.log(error.response.status);
               console.log(error.response.headers);
            } else if (error.request) {
               // The request was made but no response was received
               // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
               // http.ClientRequest in node.js
               console.log(error.request);
            } else {
               // Something happened in setting up the request that triggered an Error
               console.log('Error', error.message);
            }
            return Promise.reject(error);
         });
   }
}

let userService = new UserService();
export default userService;

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
