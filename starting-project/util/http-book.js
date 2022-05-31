import axios from 'axios';
import Config from './Config';

class BookService {
   async registerBook(bookData, userId) {
      const response = await axios({
         url: Config.API_URL + `/api/book/${userId}`,
         method: 'POST',
         timeout: Config.TIMEOUT_REQUEST,
         data: bookData,
         headers: Config.HEADER_REQUEST,
      });
      const bookResponse = response;
      console.log(bookResponse);
      return bookResponse;
   }
}

let bookService = new BookService();
export default bookService;
