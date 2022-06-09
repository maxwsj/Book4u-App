import axios from 'axios';
import Config from '../../../util/Config';
import { externalUserActions } from './externalUser-slice';

export function setExternalUserData(userData) {
   const {
      ownerId,
      ownerCredits,
      ownerFirstName,
      ownerLastName,
      ownerPicture,
      ownerCellphone,
      ownerCity,
      ownerComplement,
      ownerDistrict,
      ownerHouseNumber,
      ownerState,
      ownerStreetName,
      ownerTelephone,
      ownerZipCode,
   } = userData;
   return (dispatch) => {
      dispatch(
         externalUserActions.getExternalUserData({
            ownerId,
            ownerCredits,
            ownerFirstName,
            ownerLastName,
            ownerPicture,
            ownerCellphone,
            ownerCity,
            ownerComplement,
            ownerDistrict,
            ownerHouseNumber,
            ownerState,
            ownerStreetName,
            ownerTelephone,
            ownerZipCode,
         })
      );
   };
}
export function setExternalUserLibrarie(librarieData) {
   return (dispatch) => {
      for (const book of librarieData) {
         dispatch(
            externalUserActions.getUserLibrarie({
               id: book.id,
               name: book.name,
               language: book.language,
               author: book.author,
               owner: {
                  credits: book.owner.credits,
                  firstName: book.owner.firstName,
                  id: book.owner.id,
                  lastName: book.owner.lastName,
                  picture: book.owner.picture,
                  cellphone: book.owner.cellphone,
                  city: book.owner.city,
                  complement: book.owner.complement,
                  district: book.owner.district,
                  houseNumber: book.owner.houseNumber,
                  state: book.owner.state,
                  streetName: book.owner.streetName,
                  telephone: book.owner.telephone,
                  zipCode: book.owner.zipCode,
               },
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
