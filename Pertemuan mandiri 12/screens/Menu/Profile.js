import React from 'react';
import {
  StyleSheet, 
  View, 
  Text, 
  ScrollView,
  Image
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  inputView: {
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    marginTop: 25,
    justifyContent: "center",
    padding: 15,
    marginRight: 40,
    marginLeft: 40,
    borderBottomColor: '#199187',
    textAlign: 'center',
    borderBottomWidth: 1,
  }
});

const ProfileScreen = ({ navigation }) => (
  <View style={styles.container}>
    <ScrollView>
      <View style={{  marginTop: 50}}>
        <Text style={{ marginBottom: 2, fontSize: 28, fontWeight: 'bold', textAlign: 'center', color: '#199187'}}>Akun Profile</Text>
      </View>
      <Image style={{height: 70, width: 70, marginTop: 32, marginLeft: 146 }} source={require('../../images/Icon-user.png')}/>
  
      <View>
        <Text style={styles.inputView}>
          I Wayan Arby Arinatha
        </Text>
      </View>
      <View>
        <Text style={styles.inputView}>
          arbyarinatha21@gmail.com
        </Text>
      </View>

      <View style={{alignItems: 'center'}}>
        <MaterialCommunityIcons/>
            <Text style={{
              fontWeight:"bold",
              color: '#ed211a',
              paddingTop: 97,
              fontSize: 18
              }}  
              onPress={() => navigation.navigate('Login')}> Logout
             </Text>
       </View>
      </ScrollView>
  </View>
);

export default ProfileScreen;