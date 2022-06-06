import axios from 'axios';
import Config from '../../../util/Config';
import { bookActions } from './book-slice';

export function fetchBookData(userToken) {
   return async (dispatch) => {
      async function fetchData() {
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
         const data = response.data;
         return data;
      }
      try {
         const bookData = await fetchData();
         for (const book of bookData) {
            dispatch(
               bookActions.getBookData({
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
                     cellphone: book.owner.personalData.cellphone,
                     city: book.owner.personalData.city,
                     complement: book.owner.personalData.complement,
                     district: book.owner.personalData.district,
                     houseNumber: book.owner.personalData.houseNumber,
                     state: book.owner.personalData.state,
                     streetName: book.owner.personalData.streetName,
                     telephone: book.owner.personalData.telephone,
                     zipCode: book.owner.personalData.zipCode,
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
               })
            );
         }
      } catch (error) {}
   };
}
export function filteredBookData(bookData) {
   return (dispatch) => {
      for (const book of bookData) {
         dispatch(
            bookActions.getFilteredBookData({
               id: book.id,
               name: book.name,
               language: book.language,
               author: book.author,
               ownerId: book.owner.id,
               ownerCredits: book.owner.credits,
               ownerFirstName: book.owner.firstName,
               ownerLastName: book.owner.lastName,
               ownerPicture: book.owner.picture,
               ownerCellphone: book.owner.cellphone,
               ownerCity: book.owner.city,
               ownerComplement: book.owner.complement,
               ownerDistrict: book.owner.district,
               ownerHouseNumber: book.owner.houseNumber,
               ownerState: book.owner.state,
               ownerStreetName: book.owner.streetName,
               ownerTelephone: book.owner.telephone,
               ownerZipCode: book.owner.zipCode,
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
