import { StyleSheet, View, Dimensions } from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import { Colors } from '../../constants/styles';
const { width, height } = Dimensions.get('window');

const UserModal = ({ onShow, onHideModal, formData }) => {
   return (
      <Modal
         isVisible={onShow}
         backdropTransitionOutTiming={0}
         onBackdropPress={onHideModal}
         deviceWidth={width}
         deviceHeight={height}
         style={styles.containerStyle}
      >
         <View style={styles.formContainer}>{formData}</View>
      </Modal>
   );
};

export default UserModal;

const styles = StyleSheet.create({
   containerStyle: {
      width: width,
      backgroundColor: Colors.snow,
      borderTopRightRadius: width * 0.15,
      borderTopLeftRadius: width * 0.15,
      marginHorizontal: 0,
      marginBottom: 0,
      marginTop: width,
   },
   formContainer: {
      marginHorizontal: 30,
      flex: 1,
   },
});
