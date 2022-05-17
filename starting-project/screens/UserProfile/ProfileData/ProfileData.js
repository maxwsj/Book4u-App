import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { useEffect, useState } from 'react';
import { Divider, Avatar } from 'react-native-paper';
import Modal from 'react-native-modal';

import { Colors } from '../../../constants/styles';
import { BOOK_DATA } from '../../../data/dummy-data';

import FlatButton from '../../../componnets/UI/FlatButton';
import BooksSection from '../../../componnets/BooksSection/BooksSection';
import TextIcon from '../../../componnets/UI/TextIcon';
import UserAddressForm from '../../../componnets/ProfileData/UserAddressForm';

const { width, height } = Dimensions.get('window');

const ProfileData = () => {
   const [bookOption, setBookOption] = useState(true);
   const [whishOption, setWhishOption] = useState(false);
   const [contactOption, setContactOption] = useState(false);

   const [isVisible, setisVisible] = useState(false);
   const hideModal = () => setisVisible(false);

   function addressHandler() {
      setisVisible(true);
   }

   function formCloseHandler() {
      hideModal();
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

   useEffect(() => {}, [bookOption]);

   const [bookData, setBookData] = useState({});
   useEffect(() => {
      setBookData(BOOK_DATA);
   }, [bookData]);

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
                     <Text style={[styles.text, styles.userText]}>
                        Aragon Swifte
                     </Text>
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
                  <Text style={styles.userLibraryTitle}>Minha biblioteca</Text>
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
                     onIconBtnPress={addressHandler}
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
                     onIconBtnPress={addressHandler}
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
         <Modal
            isVisible={isVisible}
            backdropTransitionOutTiming={0}
            onBackdropPress={hideModal}
            deviceWidth={width}
            deviceHeight={height}
            style={styles.containerStyle}
            // contentContainerStyle={styles.containerStyle}
         >
            <View style={styles.addressContainer}>
               <UserAddressForm onClose={formCloseHandler} />
            </View>
         </Modal>
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
      backgroundColor: Colors.darkCyan,
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
   containerStyle: {
      width: width,
      backgroundColor: Colors.snow,
      borderTopRightRadius: width * 0.15,
      borderTopLeftRadius: width * 0.15,
      marginHorizontal: 0,
      marginBottom: 0,
      marginTop: width,
   },
   addressContainer: {
      marginHorizontal: 30,
   },
});
