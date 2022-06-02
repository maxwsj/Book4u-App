import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Divider } from 'react-native-paper';
import { Colors } from '../../constants/styles';

const UserBookTable = ({
   detailTitle,
   title,
   setDivider,
   detailStyles,
   onUpdateValue,
}) => {
   return (
      <>
         <View style={[styles.detailItems, detailStyles]}>
            <View style={styles.detailTitleWrapper}>
               <Text style={styles.detailItemTitle}>{detailTitle}</Text>
            </View>
            <Divider style={styles.dividerVertical} />
            <View style={styles.detailTextWrapper}>
               <View>
                  <TextInput
                     style={styles.inputStyles}
                     placeholder={title}
                     onChangeText={onUpdateValue}
                  />
               </View>
            </View>
         </View>
         {setDivider && <Divider style={styles.dividerPaper} />}
      </>
   );
};

export default UserBookTable;

const styles = StyleSheet.create({
   detailItems: {
      justifyContent: 'space-evenly',
      alignItems: 'center',
      flexDirection: 'row',
      marginTop: 14,
   },

   detailTitleWrapper: {
      width: 65,
   },

   detailTextWrapper: {
      width: 200,
   },

   detailItemTitle: {
      fontFamily: 'lato-bold',
      color: Colors.silver400,
      fontSize: 14,
      textAlign: 'center',
   },

   detailText: {
      fontFamily: 'lato-regular',
      color: Colors.silver300,
      fontSize: 14,
      textAlign: 'center',
   },

   dividerPaper: {
      height: 1,
      marginHorizontal: 15,
      marginVertical: 24,
      backgroundColor: Colors.silver200,
   },

   dividerVertical: {
      width: 1,
      height: 30,
      backgroundColor: Colors.silver400,
   },

   inputStyles: {
      backgroundColor: Colors.silver50,
      fontFamily: 'lato-bold',
      color: Colors.silver400,
      fontSize: 14,
      textAlign: 'center',
   },
   inputContainer: {
      borderBottomWidth: 0,
   },
});
