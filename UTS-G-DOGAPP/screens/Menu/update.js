import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import firebase from '../firebase/index';

export default function update({ route, navigation }) {
  const [name, setName] = useState(route.params.name);
  const [telepon, setTelepon] = useState(route.params.telepon);
  const [alamat, setAlamat] = useState(route.params.alamat);
  const [jumlah, setJumlah] = useState(route.params.jumlah);

  function upDateFire() {
    try {
      firebase.bd.ref('/users/' + route.params.key).update({
        name: name,
        telepon: telepon,
        alamat: alamat,
        jumlah: jumlah,
      })

    } catch (error) {
      alert(error);
    }
    finally {
      // setAge('');
      setName('');
      setTelepon('');
      setAlamat('');
      setJumlah('');
      navigation.navigate("Edit")
    }
  }

  return (
    <View style={styles.container}>

        <Text style={styles.text}>Name</Text>
        <TextInput style={styles.textInput} onChangeText={name => setName(name)} value={name} />

        <Text style={styles.text}>Telepon</Text>
        <TextInput style={styles.textInput} onChangeText={title => setTelepon(telepon)} value={telepon} />

        <Text style={styles.text}>Alamat</Text>
        <TextInput style={styles.textInput} onChangeText={alamat => setAlamat(alamat)} value={alamat} />

        <Text style={styles.text}>Jumlah</Text>
        <TextInput style={styles.textInput} onChangeText={jumlah => setJumlah(jumlah)} value={jumlah} />

        <TouchableOpacity style={styles.btnEnviar} onPress={() => { upDateFire() }}>
          <Text style={styles.text}>Update</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnEnviar} onPress={() => navigation.navigate("Edit")}>
          <Text style={styles.text}>Cancel</Text>
        </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#000',
  },
  btnEnviar: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    width: 70,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 5
  },
  textInput: {
    width: 300,
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    textAlign: 'center',
    marginTop: 5,
    marginBottom: 10,
  },
});