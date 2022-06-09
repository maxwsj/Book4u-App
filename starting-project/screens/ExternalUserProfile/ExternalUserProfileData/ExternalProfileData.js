import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { useState } from 'react';
import { Divider, Avatar } from 'react-native-paper';

import { Colors } from '../../../constants/styles';

import FlatButton from '../../../componnets/UI/FlatButton';
import UserBookSection from '../../../componnets/ProfileData/UserLibrarie/UserBookSection';
import TextIcon from '../../../componnets/UI/TextIcon';

import { useSelector, useDispatch } from 'react-redux';

const { width, height } = Dimensions.get('window');
const DEFAULT_STATE = 'Estado não cadastrado';
const DEFAULT_CITY = 'Cidade não cadastrada';
const DEFAULT_ADDRESS = 'Cidade não cadastrada';
const DEFAULT_USER_IMG = require('../../../assets/userImg/userProfileDefault.png');

const ExternalProfileData = ({ navigation }) => {
   const dispatch = useDispatch();
   const userData = useSelector((state) => state.externalUser.userData);
   const userLibrarie = useSelector((state) => state.externalUser.userLibrarie);
   const userImg =
      userData.ownerPicture === ''
         ? DEFAULT_USER_IMG
         : { uri: userData.ownerPicture };

   const [bookOption, setBookOption] = useState(true);
   const [whishOption, setWhishOption] = useState(false);
   const [contactOption, setContactOption] = useState(false);

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

   return (
      <>
         <View>
            <View style={styles.profileContainer}>
               <View style={styles.profileBackgroundImg}>
                  <View style={styles.profileWrapper}>
                     <Avatar.Image
                        size={120}
                        style={styles.profileBackgroundColor}
                        source={userImg}
                     />

                     <Text style={[styles.text, styles.userText]}>
                        {`${userData.ownerFirstName} ${userData.ownerLastName}`}
                     </Text>
                     <Text style={[styles.text, styles.userState]}>
                        {userData.ownerState === null
                           ? DEFAULT_STATE
                           : userData.ownerState}
                     </Text>
                     <Text style={[styles.text, styles.userCity]}>
                        {userData.ownerCity === null
                           ? DEFAULT_CITY
                           : userData.ownerCity}
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
                     <Text style={styles.userLibraryTitle}>Biblioteca</Text>
                  </View>
                  <UserBookSection items={userLibrarie} isExternal={true} />
               </View>
            )}
            {whishOption && (
               <View style={styles.userLibrary}>
                  <Text style={styles.userLibraryTitle}>Lista de desejos</Text>

                  {/* <UserBookSection items={bookData} /> */}
               </View>
            )}
            {contactOption && (
               <View style={styles.userLibrary}>
                  <TextIcon
                     text={userData.ownerTelephone}
                     textConfig={styles.textIconTextConfig}
                     leftIconConfig={{
                        name: 'call-outline',
                        size: 20,
                        color: Colors.silver200,
                     }}
                  />
                  <TextIcon
                     text={userData.ownerCellphone}
                     textConfig={styles.textIconTextConfig}
                     leftIconConfig={{
                        name: 'phone-portrait-outline',
                        size: 20,
                        color: Colors.silver200,
                     }}
                  />
                  <TextIcon
                     text={
                        userData.ownerState === null
                           ? DEFAULT_ADDRESS
                           : userData.ownerState
                     }
                     leftIconConfig={{
                        name: 'location-outline',
                        size: 20,
                        color: Colors.silver200,
                     }}
                     textConfig={styles.textIconTextConfig}
                  />
               </View>
            )}
         </View>
      </>
   );
};

export default ExternalProfileData;

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
