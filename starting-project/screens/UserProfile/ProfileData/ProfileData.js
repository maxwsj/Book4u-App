import { StyleSheet, Text, View, Dimensions, Pressable } from 'react-native';
import { useEffect, useState, useContext } from 'react';
import { Divider, Avatar } from 'react-native-paper';
import { AuthContext } from '../../../store/auth-context';
import { launchImageLibraryAsync } from 'expo-image-picker';

import { Colors } from '../../../constants/styles';

import IconBtn from '../../../componnets/UI/IconBtn';
import FlatButton from '../../../componnets/UI/FlatButton';
import UserBookSection from '../../../componnets/ProfileData/UserLibrarie/UserBookSection';
import TextIcon from '../../../componnets/UI/TextIcon';
import UserAddressForm from '../../../componnets/ProfileData/UserAddressForm';
import CellphoneForm from '../../../componnets/ProfileData/CellphoneForm';
import TelephoneForm from '../../../componnets/ProfileData/TelephoneForm';
import UserModal from '../../../componnets/ProfileData/UserModal';

import userService from '../../../util/http-user';
import {
   fetchUserData,
   sendUserPersonalData,
   sendUserProfilePicture,
} from '../../../store/redux-store/user/user-actions';
import { useSelector, useDispatch } from 'react-redux';

const { width, height } = Dimensions.get('window');
const DEFAULT_STATE = 'Estado não cadastrado';
const DEFAULT_CITY = 'Cidade não cadastrada';
const DEFAULT_ADDRESS = 'Cidade não cadastrada';
const DEFAULT_USER_IMG = require('../../../assets/userImg/userProfileDefault.png');
const ProfileData = ({ navigation }) => {
   const authCtx = useContext(AuthContext);
   const dispatch = useDispatch();
   const userData = useSelector((state) => state.user.userData);
   const userImg =
      userData.picture === '' ? DEFAULT_USER_IMG : { uri: userData.picture };

   const [bookData, setBookData] = useState({});
   const [profileImage, setProfileImage] = useState(DEFAULT_USER_IMG);
   const [bookOption, setBookOption] = useState(true);
   const [whishOption, setWhishOption] = useState(false);
   const [contactOption, setContactOption] = useState(false);

   const [cellphoneIsVisible, setCellphoneIsVisible] = useState(false);
   const [telephoneIsVisible, setTelephoneIsVisible] = useState(false);
   const [addressIsVisible, setAddressIsVisible] = useState(false);

   const hideCellphoneModal = () => setCellphoneIsVisible(false);
   const hideTelephoneModal = () => setTelephoneIsVisible(false);
   const hideAddressModal = () => setAddressIsVisible(false);

   async function getUserLibrarie() {
      const userBookData = await userService.getUserLibrarie(authCtx.token);
      setBookData(userBookData);
   }

   useEffect(() => {
      getUserLibrarie();
   }, []);

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

   async function submitAddressHandler(userPersonalData) {
      dispatch(sendUserPersonalData(authCtx.token, userPersonalData));
      dispatch(fetchUserData(authCtx.token));
   }

   async function submitCellphoneHandler(userCellphone) {
      dispatch(sendUserPersonalData(authCtx.token, userCellphone));
      dispatch(fetchUserData(authCtx.token));
   }

   async function submitTelephoneHandler(userTelephone) {
      dispatch(sendUserPersonalData(authCtx.token, userTelephone));
      dispatch(fetchUserData(authCtx.token));
   }

   async function profilePictureHandler() {
      const image = await launchImageLibraryAsync({
         allowsEditing: true,
         aspect: [4, 6],
         quality: 1,
      });

      if (!image.cancelled) {
         const userPicture = { picture: image.uri };
         dispatch(sendUserProfilePicture(authCtx.token, userPicture));
      }
      dispatch(fetchUserData(authCtx.token));
   }

   return (
      <>
         <View>
            <View style={styles.profileContainer}>
               <View style={styles.profileBackgroundImg}>
                  <View style={styles.profileWrapper}>
                     <Pressable onPress={profilePictureHandler}>
                        <Avatar.Image
                           size={120}
                           style={styles.profileBackgroundColor}
                           source={userImg}
                        />
                     </Pressable>

                     <Text style={[styles.text, styles.userText]}>
                        {userData.fullName}
                     </Text>
                     <Text style={[styles.text, styles.userState]}>
                        {userData.state === null
                           ? DEFAULT_STATE
                           : userData.state}
                     </Text>
                     <Text style={[styles.text, styles.userCity]}>
                        {userData.city === null ? DEFAULT_CITY : userData.city}
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
                  <UserBookSection items={bookData} />
               </View>
            )}
            {whishOption && (
               <View style={styles.userLibrary}>
                  <Text style={styles.userLibraryTitle}>
                     Minha lista de desejo
                  </Text>

                  <UserBookSection items={bookData} />
               </View>
            )}
            {contactOption && (
               <View style={styles.userLibrary}>
                  <TextIcon
                     text={userData.telephone}
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
                     text={userData.cellphone}
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
                     text={
                        userData.address === null
                           ? DEFAULT_ADDRESS
                           : userData.address
                     }
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
            modalHeight={styles.modalWidth}
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
            modalHeight={styles.modalWidth}
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
      backgroundColor: Colors.snow,
      borderColor: Colors.silver300,
      elevation: 2,
      marginBottom: 12,
   },
   text: {
      fontFamily: 'lato-light',
      color: Colors.silver300,
   },
   userText: {
      fontSize: 24,
   },
   userState: {
      fontSize: 16,
      marginTop: 6,
   },
   userCity: {
      fontSize: 16,
      marginTop: 4,
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
   modalWidth: {
      marginTop: width * 1.2,
   },
});
