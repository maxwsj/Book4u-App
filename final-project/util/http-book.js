import axios from 'axios';
import Config from './Config';

class BookService {
   async registerBook(bookData, userToken) {
      const response = await axios({
         url: Config.API_URL + `api/book/${userToken}`,
         method: 'POST',
         timeout: Config.TIMEOUT_REQUEST,
         data: bookData,
         headers: {
            token: userToken,
            Authorization: `Bearer ${userToken}`,
            'Content-Type': 'application/json',
         },
      });
   }

   async getBookData(userToken) {
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
      return response.data;
   }

   async fetchBookGens(userToken) {
      const response = await axios({
         url: Config.API_URL + `api/category/list-all`,
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

   async setReadNotification(userToken, tradeId) {
      const response = await axios({
         url: Config.API_URL + `api/exchange/readAllNotifications/${userToken}`,
         method: 'PUT',
         timeout: Config.TIMEOUT_REQUEST,
         data: { ids: [tradeId] },
         headers: {
            token: userToken,
            Authorization: `Bearer ${userToken}`,
            'Content-Type': 'application/json',
         },
      });
      const data = response.data;
      return data;
   }
}

let bookService = new BookService();
export default bookService;
