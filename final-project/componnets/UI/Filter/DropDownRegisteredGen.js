import { StyleSheet } from 'react-native';
import { useEffect, useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import { Colors } from '../../../constants/styles';
import { useSelector } from 'react-redux';

DropDownPicker.setListMode('SCROLLVIEW');

const DropDownRegisteredGen = ({
   onSelect,
   dropDownContainerStyle,
   dropdownWrapperStyle,
   dropdownPlaceholderStyle,
   dropdownLabelStyle,
   textStyle,
}) => {
   const registeredGenData = useSelector((state) => state.book.genList);

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
         items={registeredGenData}
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

export default DropDownRegisteredGen;

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
