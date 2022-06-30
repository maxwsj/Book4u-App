import { StyleSheet } from 'react-native';
import { useEffect, useState, useContext } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import { Colors } from '../../../constants/styles';
import bookService from '../../../util/http-book';
import { AuthContext } from '../../../store/auth-context';

DropDownPicker.setListMode('SCROLLVIEW');

const DropdownCat = ({
   onSelect,
   dropDownContainerStyle,
   dropdownWrapperStyle,
   dropdownPlaceholderStyle,
   dropdownLabelStyle,
   textStyle,
}) => {
   const authCtx = useContext(AuthContext);
   const [bookGens, setBookGens] = useState([]);
   useEffect(() => {
      async function getBookGen() {
         const genData = await bookService.fetchBookGens(authCtx.token);
         const genLabels = genData.map((gen) => {
            return {
               label: gen.name,
               value: gen.name,
            };
         });
         setBookGens(genLabels);
      }
      getBookGen();
   }, []);

   const [open, setOpen] = useState(false);
   const [value, setValue] = useState(null);

   function selectedItemHandler(item) {
      setValue(item.value);
   }
   useEffect(() => {
      onSelect(value);
   }, [value]);

   return (
      <DropDownPicker
         placeholder='Selecione uma categoria'
         open={open}
         value={value}
         items={bookGens}
         setOpen={setOpen}
         setValue={setValue}
         placeholderStyle={[styles.placeholderStyle, dropdownPlaceholderStyle]}
         labelStyle={[styles.labelStyle, dropdownLabelStyle]}
         style={[styles.wrapperStyle, dropdownWrapperStyle]}
         dropDownContainerStyle={[
            styles.dropDownContainerStyle,
            dropDownContainerStyle,
         ]}
         onSelectItem={selectedItemHandler}
         textStyle={[textStyle]}
      />
   );
};

export default DropdownCat;

const styles = StyleSheet.create({
   placeholderStyle: {
      color: Colors.dimgray,
      fontFamily: 'lato-regular',
   },
   labelStyle: {
      color: Colors.dimgray,
      fontFamily: 'lato-regular',
   },
   wrapperStyle: {
      backgroundColor: Colors.snow,
      borderColor: Colors.silver100,
   },
   dropDownContainerStyle: {
      backgroundColor: Colors.snow,
      borderColor: Colors.silver100,
   },
});
