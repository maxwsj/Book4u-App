import { StyleSheet, Text, View } from 'react-native';
import { useState, useCallback } from 'react';
import { Colors } from '../../constants/styles';

const TextToggle = ({ text, textStyle }) => {
   const [textShown, setTextShown] = useState(false); //To show ur remaining Text
   const [lengthMore, setLengthMore] = useState(false); //to show the "Read more & Less Line"
   const toggleNumberOfLines = () => {
      //To toggle the show text or hide it
      setTextShown(!textShown);
   };

   const onTextLayout = useCallback((e) => {
      setLengthMore(e.nativeEvent.lines.length > 4); //to check the text is more than 4 lines or not
   }, []);

   return (
      <View style={styles.mainContainer}>
         <Text
            onTextLayout={onTextLayout}
            numberOfLines={textShown ? undefined : 4}
            style={[styles.textToggle, textStyle]}
            textStyle
         >
            {text}
         </Text>

         {lengthMore ? (
            <Text onPress={toggleNumberOfLines} style={styles.textToggleBtn}>
               {textShown ? 'Ver menos...' : 'Ver mais...'}
            </Text>
         ) : null}
      </View>
   );
};

export default TextToggle;

const styles = StyleSheet.create({
   textToggle: {
      lineHeight: 21,
   },
   textToggleBtn: {
      lineHeight: 21,
      marginTop: 5,
      color: Colors.tertiary,
      fontFamily: 'lato-bold',
   },
});
