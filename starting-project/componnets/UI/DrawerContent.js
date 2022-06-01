import { StyleSheet, View, Pressable } from 'react-native';
import { useContext } from 'react';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Avatar, Title, Caption, Paragraph, Drawer } from 'react-native-paper';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Colors } from '../../constants/styles';

import { AuthContext } from '../../store/auth-context';

const DrawerContent = ({ props, navigation }) => {
   const authCtx = useContext(AuthContext);

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
                              source={require('../../assets/userImg/userProfileDefault.png')}
                              size={50}
                              style={styles.profileBackgroundColor}
                           />
                        </Pressable>
                     </View>
                     <View style={{ flexDirection: 'column', marginLeft: 15 }}>
                        <Title style={styles.title}>User name</Title>
                        <Caption style={styles.caption}>user@email.com</Caption>
                     </View>
                  </View>
                  <View style={styles.row}>
                     <View style={styles.section}>
                        <Paragraph style={[styles.paragraph, styles.caption]}>
                           80
                        </Paragraph>
                        <Caption style={styles.caption}>Following</Caption>
                     </View>
                     <View style={styles.section}>
                        <Paragraph style={[styles.paragraph, styles.caption]}>
                           100
                        </Paragraph>
                        <Caption style={styles.caption}>Followers</Caption>
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
                     label='Biblioteca'
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
                     onPress={() => {}}
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
               onPress={authCtx.logout}
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
   },
   //    drawerSpacing: {
   //       marginTop: 20,
   //    },
   pressed: {
      opacity: 0.7,
   },
});
