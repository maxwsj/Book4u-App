import { StyleSheet, Text, View, ImageBackground } from 'react-native';

import { Colors } from '../../constants/styles';
import bgAppImg from '../../assets/img/bg-login-img.png';
import BookLogo from '../../assets/img/book2-logo.svg';

const SignInBgImage = () => {
   return (
      <ImageBackground source={bgAppImg} style={styles.image}>
         <View style={styles.imageContainer}>
            <BookLogo width={60} height={40} />
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
   },
});
