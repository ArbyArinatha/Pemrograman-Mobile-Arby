import React, { useReducer } from 'react';
import {
  StyleSheet, 
  View, 
  ScrollView, 
  Image, 
  Text, 
  TextInput, 
  TouchableOpacity,
  Alert
} from 'react-native';
import firebase from 'firebase';

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
    justifyContent: "center",
    padding: 15,
    marginRight: 40,
    marginLeft: 40,
    borderBottomColor: '#199187',
    borderBottomWidth: 1,
  },
  loginbutton: {
    backgroundColor: "black",
    borderRadius: 20,
    backgroundColor: "#199187",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
    marginRight: 40,
    marginLeft: 40,
  },
});

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const AuthLogin = async () => {
    const response = await fetch ("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBdMRvhJndeZZcf6SX36OK4Hlv1ZHrLQfo",  {
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            email: email,
            password: password,
            returnSecureToken: true
        })
    })
    const resData = await response.json()
    if (response.ok){
      await navigation.navigate('Tab')
  } else {
      Alert.alert ('An Error Occured!', resData.error.message, [{
          text: 'Okay'
      }])
  }
  }

  // const handlerLogin = () => {
  //   navigation.navigate('Tab');
  // };

  return (
    <ScrollView style={styles.container}>
        
      <View>
      
        <Text style={{ marginBottom: 40, fontSize: 30, fontWeight: 'bold', textAlign: 'center', marginTop: 78, color: '#199187' }}>Login </Text>
        
        <View>
          <TextInput style={styles.inputView} value={email}  placeholder="Username or Email"   onChangeText= {(text) => {
              setEmail(text)
          }} />
          <TextInput style={styles.inputView} value={password}  placeholder="Password"  onChangeText= {(text) => {
              setPassword(text)
          }} secureTextEntry />

          <TouchableOpacity style={styles.loginbutton} onPress={AuthLogin}>
            <Text style={{ color: "white" }}>Login</Text>
          </TouchableOpacity>

          <View>
            <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
              <Text style={{ color: "black", textAlign: "center", paddingTop: 10 }}>Sign Up</Text>
            </TouchableOpacity>
            <Image style={{height: 120, width: 120, marginTop: 2, marginLeft: 115 }} source={require('../images/pet-logo1.jpg')}/>
          </View>

          <View>
            <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
              <Text style={{ color: "black", textAlign: "center", paddingTop: 15, fontWeight: 'bold' }}>Forgotten password?</Text>
            </TouchableOpacity>
            
          </View>

        </View>

      </View>

    </ScrollView>
  );
};


export default LoginScreen;
