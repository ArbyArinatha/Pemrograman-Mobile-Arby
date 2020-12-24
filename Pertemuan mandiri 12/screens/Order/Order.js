import React, {useState} from 'react';
import { StyleSheet, View, ScrollView, Text, TouchableOpacity, TextInput
} from 'react-native';
import firebase from '../firebase/index'

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

const OrdersScreen = ({ navigation }) => {

  // const app = () => {
  //     navigation.navigate('Tab');
  // };

  const [state, setState] = useState ({
    name: "",
    telepun: "",
    alamat: "",
    jumlah: "",
})

const handleChangeText = (name, value) => {
    setState ({ ...state, [name]: value})
}

const savecomment = async () => {
    if (state.name === '') {
        alert ('Please provide a name')
    }
    else {
        await firebase.db.collection('users').add({
            name: state.name,
            telepun: state.telepun,
            alamat: state.alamat,
            jumlah: state.jumlah,
        })
        alert('Seved!')
    }
}

  return (
    <ScrollView style={styles.container}>
      <View style={{ paddingTop: 100 }}>

        <Text style={{ marginBottom: 40, textAlign: "center", fontSize: 30, fontWeight: 'bold' }}>Buat Order</Text>

        <View>
          <TextInput style={styles.textinput} onChangeText= {(value) => handleChangeText ("name",value)} placeholder="Nama lengkap" underlineColorAndroid={'transparent'} />
          <TextInput style={styles.textinput} onChangeText= {(value) => handleChangeText ("telepun",value)} placeholder="No WA" underlineColorAndroid={'transparent'} />
          <TextInput style={styles.textinput} onChangeText= {(value) => handleChangeText ("alamat",value)} placeholder="Alamat lengkap" underlineColorAndroid={'transparent'} />
          <TextInput style={styles.textinput} onChangeText= {(value) => handleChangeText ("jumlah",value)} placeholder="Jumlah" underlineColorAndroid={'transparent'} />
        </View>

        <TouchableOpacity style={styles.loginbutton}  onPress={savecomment}>
          <Text style={{ color: "white", textAlign: "center" }}>Order</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default OrdersScreen;
