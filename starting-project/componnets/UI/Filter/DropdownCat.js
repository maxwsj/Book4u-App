import { StyleSheet } from 'react-native';
import { useEffect, useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import { Colors } from '../../../constants/styles';
import { BookGenres } from '../../../constants/bookGenres';
DropDownPicker.setListMode('SCROLLVIEW');

const DropdownCat = ({
   onSelect,
   dropDownContainerStyle,
   dropdownWrapperStyle,
   dropdownPlaceholderStyle,
   dropdownLabelStyle,
   textStyle,
}) => {
   const [open, setOpen] = useState(false);
   const [value, setValue] = useState(null);
   const [items, setItems] = useState(BookGenres);
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
         items={items}
         setOpen={setOpen}
         setValue={setValue}
         setItems={setItems}
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
