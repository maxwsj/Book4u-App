import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Divider } from 'react-native-paper';
import { Colors } from '../../constants/styles';
import DropdownCat from '../UI/Filter/DropdownCat';
import InvalidInputTxt from '../UI/InvalidInputTxt';

const UserBookTable = ({
   detailTitle,
   title,
   setDivider,
   detailStyles,
   onUpdateValue,
   inputConfig,
   setDropdown,
   onSelect,
   isInvalid,
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
                     style={
                        isInvalid === false
                           ? styles.inputStyles
                           : styles.invalidInput
                     }
                     placeholder={title}
                     onChangeText={onUpdateValue}
                     {...inputConfig}
                  />
                  {setDropdown && (
                     <DropdownCat
                        dropDownContainerStyle={styles.dropDownContainerStyle}
                        dropdownWrapperStyle={styles.dropdownWrapperStyle}
                        textStyle={styles.textStyle}
                        dropdownLabelStyle={styles.dropdownLabelStyle}
                        onSelect={onSelect}
                     />
                  )}
               </View>
               {isInvalid && (
                  <InvalidInputTxt inputStyle={styles.inputStyle}>
                     *Dados Incorretos
                  </InvalidInputTxt>
               )}
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
   dropDownContainerStyle: {
      backgroundColor: Colors.silver50,
   },
   dropdownWrapperStyle: {
      backgroundColor: Colors.silver50,
      borderWidth: 0,
      bottom: 13,
   },
   textStyle: {
      color: Colors.silver300,
      textAlign: 'center',
   },
   dropdownLabelStyle: {
      color: Colors.silver300,
   },
   inputStyle: {
      marginLeft: 55,
   },
   invalidInput: {
      backgroundColor: Colors.papayaWhip,
      fontFamily: 'lato-bold',
      color: Colors.silver400,
      fontSize: 14,
      textAlign: 'center',
   },
});
