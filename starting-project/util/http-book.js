import axios from 'axios';
import Config from './Config';

class BookService {
   async registerBook(bookData, userToken) {
      console.log(`TOKE RECEBIDA COM SUCESSO:${userToken}`);
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
}

let bookService = new BookService();
export default bookService;
