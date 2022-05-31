import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { useEffect, useState } from 'react';
import { Divider, Avatar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

import { Colors } from '../../../constants/styles';
import { BOOK_DATA } from '../../../data/dummy-data';

import IconBtn from '../../../componnets/UI/IconBtn';
import FlatButton from '../../../componnets/UI/FlatButton';
import BooksSection from '../../../componnets/BooksSection/BooksSection';
import TextIcon from '../../../componnets/UI/TextIcon';
import UserAddressForm from '../../../componnets/ProfileData/UserAddressForm';
import CellphoneForm from '../../../componnets/ProfileData/CellphoneForm';
import TelephoneForm from '../../../componnets/ProfileData/TelephoneForm';

import userService from '../../../util/http-user';
import UserModal from '../../../componnets/ProfileData/UserModal';

const { width, height } = Dimensions.get('window');

const ProfileData = () => {
   const navigation = useNavigation();

   const [bookOption, setBookOption] = useState(true);
   const [whishOption, setWhishOption] = useState(false);
   const [contactOption, setContactOption] = useState(false);

   const [cellphoneIsVisible, setCellphoneIsVisible] = useState(false);
   const [telephoneIsVisible, setTelephoneIsVisible] = useState(false);
   const [addressIsVisible, setAddressIsVisible] = useState(false);

   const hideCellphoneModal = () => setCellphoneIsVisible(false);
   const hideTelephoneModal = () => setTelephoneIsVisible(false);
   const hideAddressModal = () => setAddressIsVisible(false);

   const [bookData, setBookData] = useState({});

   useEffect(() => {
      setBookData(BOOK_DATA);
   }, [bookData]);

   function addressHandler() {
      setAddressIsVisible(true);
   }

   function cellphoneHandler() {
      setCellphoneIsVisible(true);
   }

   function telephoneHandler() {
      setTelephoneIsVisible(true);
   }

   function cellPhoneFormCloseHandler() {
      hideCellphoneModal();
   }
   function telephoneFormCloseHandler() {
      hideTelephoneModal();
   }
   function addressFormCloseHandler() {
      hideAddressModal();
   }

   function bookOptionHandler() {
      setBookOption(true);
      setWhishOption(false);
      setContactOption(false);
   }
   function whishOptionHandler() {
      setBookOption(false);
      setWhishOption(true);
      setContactOption(false);
   }
   function contactOptionHandler() {
      setBookOption(false);
      setWhishOption(false);
      setContactOption(true);
   }

   function addNewBookHandler() {
      navigation.navigate('RegisterBook');
   }
   function editBookHandler() {
      navigation.navigate('EditBook');
   }
   function deleteBookHandler() {
      navigation.navigate('DeleteBook');
   }

   async function submitAddressHandler(userAddress) {
      // await userService.sendUserAddress(userAddress);

      fetch(
         'https://react-lessons-8cbae-default-rtdb.firebaseio.com/userAddress.json',
         {
            method: 'PUT',
            body: JSON.stringify(userAddress),
         }
      );
   }

   async function submitCellphoneHandler(userCellphone) {
      // await userService.sendUserAddress(userCellphone);

      fetch(
         'https://react-lessons-8cbae-default-rtdb.firebaseio.com/userCellphone.json',
         {
            method: 'PUT',
            body: JSON.stringify(userCellphone),
         }
      );
   }

   async function submitTelephoneHandler(userTelephone) {
      // await userService.sendUserAddress(userTelephone);
      fetch(
         'https://react-lessons-8cbae-default-rtdb.firebaseio.com/telephone.json',
         {
            method: 'PUT',
            body: JSON.stringify(userTelephone),
         }
      );
   }

   return (
      <>
         <View>
            <View style={styles.profileContainer}>
               <View style={styles.profileBackgroundImg}>
                  <View style={styles.profileWrapper}>
                     <Avatar.Image
                        size={120}
                        style={styles.profileBackgroundColor}
                     />
                     <Text style={[styles.text, styles.userText]}>Teste</Text>
                     <Text style={[styles.text, styles.userAddressText]}>
                        Salvador, Bahia
                     </Text>
                  </View>
               </View>
            </View>
            <View style={styles.profileOptionsContainer}>
               <View style={styles.profileOptionsWrapper}>
                  <View style={bookOption && styles.optionBorder}>
                     <FlatButton onPress={bookOptionHandler}>Livros</FlatButton>
                  </View>
                  <View style={whishOption && styles.optionBorder}>
                     <FlatButton onPress={whishOptionHandler}>
                        Lista de Desejos
                     </FlatButton>
                  </View>
                  <View style={contactOption && styles.optionBorder}>
                     <FlatButton onPress={contactOptionHandler}>
                        Contato
                     </FlatButton>
                  </View>
               </View>
               <Divider style={styles.divider} />
            </View>
            {bookOption && (
               <View style={styles.userLibrary}>
                  <View style={styles.userWishlist}>
                     <Text style={styles.userLibraryTitle}>
                        Minha biblioteca
                     </Text>
                     <IconBtn
                        icon='add-circle-outline'
                        size={24}
                        iconBtnStyle={styles.addWishlistIcon}
                        onPress={addNewBookHandler}
                     />
                     <IconBtn
                        icon='pencil-outline'
                        size={24}
                        iconBtnStyle={styles.addWishlistIcon}
                        onPress={editBookHandler}
                     />
                     <IconBtn
                        icon='trash-outline'
                        size={24}
                        iconBtnStyle={styles.addWishlistIcon}
                        onPress={deleteBookHandler}
                     />
                  </View>
                  <BooksSection items={bookData} />
               </View>
            )}
            {whishOption && (
               <View style={styles.userLibrary}>
                  <Text style={styles.userLibraryTitle}>
                     Minha lista de desejo
                  </Text>

                  <BooksSection items={bookData} />
               </View>
            )}
            {contactOption && (
               <View style={styles.userLibrary}>
                  <TextIcon
                     text={'(11) 4141-4433'}
                     textConfig={styles.textIconTextConfig}
                     leftIconConfig={{
                        name: 'call-outline',
                        size: 20,
                        color: Colors.silver200,
                     }}
                     iconBtnConfig={{
                        name: 'open-outline',
                        size: 20,
                        color: Colors.silver200,
                     }}
                     // iconBtnStyle={}
                     onIconBtnPress={telephoneHandler}
                  />
                  <TextIcon
                     text={'(11) 91033-2333'}
                     textConfig={styles.textIconTextConfig}
                     leftIconConfig={{
                        name: 'phone-portrait-outline',
                        size: 20,
                        color: Colors.silver200,
                     }}
                     iconBtnConfig={{
                        name: 'open-outline',
                        size: 20,
                        color: Colors.silver200,
                     }}
                     // iconBtnStyle={}
                     onIconBtnPress={cellphoneHandler}
                  />
                  <TextIcon
                     text={'Rua são vicente de almeida, Bahia'}
                     textConfig={styles.textIconTextConfig}
                     leftIconConfig={{
                        name: 'location-outline',
                        size: 20,
                        color: Colors.silver200,
                     }}
                     iconBtnConfig={{
                        name: 'open-outline',
                        size: 20,
                        color: Colors.silver200,
                     }}
                     // iconBtnStyle={}
                     onIconBtnPress={addressHandler}
                  />
               </View>
            )}
         </View>

         <UserModal
            onShow={addressIsVisible}
            onHideModal={hideAddressModal}
            formData={
               <UserAddressForm
                  onSubmit={submitAddressHandler}
                  onClose={addressFormCloseHandler}
               />
            }
         />
         <UserModal
            onShow={cellphoneIsVisible}
            onHideModal={hideCellphoneModal}
            formData={
               <CellphoneForm
                  onSubmit={submitCellphoneHandler}
                  onClose={cellPhoneFormCloseHandler}
               />
            }
         />
         <UserModal
            onShow={telephoneIsVisible}
            onHideModal={hideTelephoneModal}
            formData={
               <TelephoneForm
                  onSubmit={submitTelephoneHandler}
                  onClose={telephoneFormCloseHandler}
               />
            }
         />
      </>
   );
};

export default ProfileData;

const styles = StyleSheet.create({
   profileContainer: {
      position: 'relative',
   },
   profileWrapper: {
      alignItems: 'center',
      position: 'absolute',
      left: 0,
      right: 0,
      top: width / 4,
   },
   profileBackgroundImg: {
      backgroundColor: Colors.quartiary,
      width: '100%',
      height: width * 0.4,
   },
   profileBackgroundColor: {
      backgroundColor: Colors.silver100,
      borderColor: Colors.silver300,
   },
   text: {
      fontFamily: 'lato-light',
      color: Colors.silver300,
   },
   userText: {
      fontSize: 24,
   },
   userAddressText: {
      fontSize: 16,
      marginTop: 12,
   },
   profileOptionsContainer: {
      marginHorizontal: 30,
   },
   profileOptionsWrapper: {
      marginTop: width / 2,
      flexDirection: 'row',
      justifyContent: 'space-evenly',
   },
   profileOptionsText: {
      fontFamily: 'lato-regular',
      color: Colors.silver300,
   },
   divider: {
      height: 2,
      marginTop: 15,
   },
   userLibrary: {
      marginTop: 30,
      marginHorizontal: 30,
   },
   userLibraryTitle: {
      fontFamily: 'lato-bold',
      color: Colors.silver300,
   },
   optionBorder: {
      borderBottomWidth: 5,
      borderColor: Colors.secondary,
      borderRadius: 10,
   },
   textIconTextConfig: {
      fontFamily: 'lato-regular',
   },
   userWishlist: {
      flexDirection: 'row',
      alignItems: 'center',
   },
   addWishlistIcon: {
      color: Colors.secondary,
   },
});
