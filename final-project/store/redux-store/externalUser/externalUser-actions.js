import axios from 'axios';
import Config from '../../../util/Config';
import { externalUserActions } from './externalUser-slice';

export function setExternalUserData(userData) {
   const {
      cellphone,
      city,
      complement,
      credits,
      district,
      firstName,
      houseNumber,
      id,
      lastName,
      state,
      streetName,
      telephone,
      zipCode,
      picture,
   } = userData;
   return (dispatch) => {
      dispatch(
         externalUserActions.getExternalUserData({
            cellphone,
            city,
            complement,
            credits,
            district,
            firstName,
            houseNumber,
            id,
            lastName,
            state,
            streetName,
            telephone,
            zipCode,
            picture,
         })
      );
   };
}
export function setExternalUserLibrarie(librarieData) {
   return (dispatch) => {
      dispatch(externalUserActions.getUserLibrarie(librarieData));
   };
}
