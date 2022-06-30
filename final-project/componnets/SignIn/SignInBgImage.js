import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';

import { Colors } from '../../constants/styles';
import bgAppImg from '../../assets/img/book_app_bg_img.png';
import BookLogo from '../UI/BookLogo';
// import BookLogo from '../../assets/img/book2-logo.svg';

const SignInBgImage = () => {
   return (
      <ImageBackground source={bgAppImg} style={styles.image}>
         <View style={styles.imageContainer}>
            <BookLogo />
            <Text style={styles.title}>BOOK4U</Text>
         </View>
      </ImageBackground>
   );
};

export default SignInBgImage;

const styles = StyleSheet.create({
   imageContainer: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      justifyContent: 'center',
      alignItems: 'center',
   },

   image: {
      width: '100%',
      height: '100%',
   },
   title: {
      color: Colors.snow,
      letterSpacing: 5,
      fontSize: 24,
      fontFamily: 'lato-regular',
      textShadowOffset: { width: 1, height: 2 },
      textShadowRadius: 14,
      textShadowColor: 'rgba(0, 0, 0, 0.75)',
   },
   bookImgContainer: {
      width: 43,
      height: 43,
   },
});
