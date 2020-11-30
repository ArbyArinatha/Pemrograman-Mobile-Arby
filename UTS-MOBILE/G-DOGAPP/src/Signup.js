import React from 'react';
import { StyleSheet, View, Image, ScrollView, Text, TouchableOpacity, TextInput
} from 'react-native';
import Constants from 'expo-constants';

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
  textinput: {
    alignSelf: 'stretch',
    height: 40,
    textAlign: 'left',
    marginBottom: 30,
    color: '#000',
    borderBottomColor: '#199187',
    borderBottomWidth: 1,
    marginVertical: 2,
    marginHorizontal: 55
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

const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  // const [confirmPass, setConfirmPass] = React.useState('');

  const app = () => {
      navigation.navigate('Tab');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={{ paddingTop: 100 }}>

        <Text style={{ marginBottom: 40, textAlign: "center", fontSize: 30, fontWeight: 'bold', color: '#22bd77' }}>Registration</Text>

        <View>
          <TextInput style={styles.inputView} value={email} onChangeText={setEmail} placeholder="Email" />
          <TextInput style={styles.textinput} placeholder="Username" underlineColorAndroid={'transparent'} />
          <TextInput style={styles.inputView} value={password} onChangeText={setPassword} placeholder="Password" secureTextEntry />
        </View>

        <TouchableOpacity style={styles.loginbutton} onPress={app}>
          <Text style={{ color: "white", textAlign: "center" }}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default SignupScreen;
