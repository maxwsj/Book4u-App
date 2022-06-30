import { StyleSheet, View, Pressable } from 'react-native';
import { useContext } from 'react';

import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Avatar, Title, Caption, Paragraph, Drawer } from 'react-native-paper';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Colors } from '../../constants/styles';

import { AuthContext } from '../../store/auth-context';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../../store/redux-store/user/user-slice';

const DEFAULT_USER_IMG = require('../../assets/userImg/userProfileDefault.png');

const DrawerContent = ({ props, navigation }) => {
   const authCtx = useContext(AuthContext);
   const dispatch = useDispatch();

   const userData = useSelector((state) => state.user.userData);
   const userCredits = useSelector((state) => state.user.userCredits);
   const userImg =
      userData.picture === '' ? DEFAULT_USER_IMG : { uri: userData.picture };
   function profileHandler() {
      navigation.navigate('ProfileData');
   }
   function historyHandler() {
      navigation.navigate('HistoryScreen');
   }
   function librarieHandler() {
      navigation.navigate('RegisterBook');
   }
   function notificationHandler() {
      navigation.navigate('UserNotification');
   }
   function aboutHandler() {
      navigation.navigate('AboutScreen');
   }
   function userLogoutHandler() {
      authCtx.logout();
      dispatch(userActions.logout());
   }
   return (
      <View style={{ flex: 1 }}>
         <DrawerContentScrollView {...props}>
            <View style={styles.drawerContent}>
               <View style={styles.userInfoSection}>
                  <View style={{ flexDirection: 'row', marginTop: 15 }}>
                     <View>
                        <Pressable
                           style={({ pressed }) => [
                              styles.button,
                              pressed && styles.pressed,
                           ]}
                           onPress={profileHandler}
                        >
                           <Avatar.Image
                              source={userImg}
                              size={50}
                              style={styles.profileBackgroundColor}
                           />
                        </Pressable>
                     </View>
                     <View style={{ flexDirection: 'column', marginLeft: 15 }}>
                        <Title style={styles.title}>{userData.fullName}</Title>
                        <View
                           style={{
                              flexDirection: 'row',
                           }}
                        >
                           <Caption style={styles.caption}>Créditos:</Caption>
                           <Paragraph
                              style={[
                                 styles.paragraph,
                                 styles.caption,
                                 styles.credits,
                              ]}
                           >
                              {userCredits}
                           </Paragraph>
                        </View>
                     </View>
                  </View>
                  <View style={styles.row}>
                     <View style={styles.section}>
                        <Caption style={styles.caption}>Email: </Caption>
                        <Paragraph style={[styles.paragraph, styles.caption]}>
                           {userData.email}
                        </Paragraph>
                     </View>
                  </View>
               </View>
               <Drawer.Section style={styles.drawerSection}>
                  <DrawerItem
                     label='Início'
                     icon={(color, size) => (
                        <Ionicons name='home-outline' color={color} size={24} />
                     )}
                     onPress={() => navigation.navigate('Home')}
                  />
                  <DrawerItem
                     label='Perfil'
                     icon={(color, size) => (
                        <Ionicons
                           name='person-outline'
                           color={color}
                           size={24}
                        />
                     )}
                     onPress={profileHandler}
                  />
                  <DrawerItem
                     label='Histórico'
                     icon={(color, size) => (
                        <Ionicons name='cash-outline' color={color} size={24} />
                     )}
                     onPress={historyHandler}
                  />
                  <DrawerItem
                     label='Adicionar livro'
                     icon={(color, size) => (
                        <Ionicons name='book-outline' color={color} size={24} />
                     )}
                     onPress={librarieHandler}
                  />
               </Drawer.Section>
               <Drawer.Section
                  style={[styles.drawerSection, styles.drawerSpacing]}
               >
                  <DrawerItem
                     label='Notificações'
                     icon={(color, size) => (
                        <Ionicons
                           name='notifications-outline'
                           color={color}
                           size={24}
                        />
                     )}
                     onPress={notificationHandler}
                  />
                  <DrawerItem
                     label='Configurações'
                     icon={(color, size) => (
                        <Ionicons
                           name='settings-outline'
                           color={color}
                           size={24}
                        />
                     )}
                     onPress={() => {}}
                  />
                  <DrawerItem
                     label='Sobre'
                     icon={(color, size) => (
                        <Ionicons
                           name='information-circle-outline'
                           color={color}
                           size={24}
                        />
                     )}
                     onPress={aboutHandler}
                  />
               </Drawer.Section>
            </View>
         </DrawerContentScrollView>

         <Drawer.Section style={styles.bottomDrawerSection}>
            <DrawerItem
               label='Sair'
               icon={(color, size) => (
                  <Ionicons name='exit-outline' color={color} size={24} />
               )}
               onPress={userLogoutHandler}
            />
         </Drawer.Section>
      </View>
   );
};

export default DrawerContent;

const styles = StyleSheet.create({
   drawerContent: {
      flex: 1,
   },
   userInfoSection: {
      paddingLeft: 20,
   },
   title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
   },
   caption: {
      fontSize: 14,
      lineHeight: 14,
   },
   captionEmail: {
      fontSize: 14,
      lineHeight: 14,
   },
   row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
   },
   section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
   },
   paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
   },
   drawerSection: {
      marginTop: 20,
   },
   bottomDrawerSection: {
      marginBottom: 15,
      borderTopColor: Colors.primary,
      borderTopWidth: 1,
   },
   preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
   },
   profileBackgroundColor: {
      backgroundColor: Colors.snow,
      borderColor: Colors.silver300,
      elevation: 4,
   },
   //    drawerSpacing: {
   //       marginTop: 20,
   //    },
   pressed: {
      opacity: 0.7,
   },

   credits: {
      color: Colors.secondary,
      marginLeft: 12,
      fontSize: 14,
      elevation: 5,
   },
});
