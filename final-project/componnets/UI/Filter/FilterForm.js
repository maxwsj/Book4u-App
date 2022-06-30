import { StyleSheet, View } from 'react-native';
import { useState, useContext } from 'react';
import { Colors } from '../../../constants/styles';
import Button from '../../UI/Button';
import IconBtn from '../IconBtn';
import DropDownRegisteredGen from './DropDownRegisteredGen';

import { AuthContext } from '../../../store/auth-context';
import { fetchGenBookData } from '../../../store/redux-store/book/book-actions';
import { useDispatch } from 'react-redux';

const FilterForm = ({ onSelect, onClose }) => {
   const authCtx = useContext(AuthContext);
   const dispatch = useDispatch();
   const [selectedItem, setSelectedItem] = useState('');

   function submitHandler() {
      dispatch(fetchGenBookData(authCtx.token, selectedItem));
      onSelect();
      onClose();
   }

   function getSelectedGenres(selectedItem) {
      setSelectedItem(selectedItem);
   }

   return (
      <View style={styles.filterContainer}>
         <View style={{ alignItems: 'flex-end' }}>
            <IconBtn
               onPress={onClose}
               iconBtnConfig={{
                  name: 'close-outline',
                  size: 24,
                  color: Colors.silver200,
               }}
            />
         </View>
         <DropDownRegisteredGen onSelect={getSelectedGenres} />
         <View style={styles.buttonWrapper}>
            <Button onPress={submitHandler}>Confirmar</Button>
         </View>
      </View>
   );
};

export default FilterForm;

const styles = StyleSheet.create({
   filterContainer: {
      marginBottom: 20,
   },
   inputBgColor: {
      backgroundColor: Colors.snow,
   },
   buttonWrapper: {
      top: 210,
   },
   inputContainer: {
      marginTop: 15,
   },
});
