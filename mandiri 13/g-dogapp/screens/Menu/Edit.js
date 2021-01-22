import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native';
import firebase from '../firebase/index';

export default function EditScreen({ navigation }) {
  const [listFire, setListFire] = useState(null);


  useEffect(() => {
    try {
      firebase.bd.ref('/users').on('value', (snapshot) => {
        const list = [];
        snapshot.forEach((childItem) => {
          list.push({
            key: childItem.key,
            name: childItem.val().name,
            telepon: childItem.val().telepon,
            alamat: childItem.val().alamat,
            jumlah: childItem.val().jumlah
          });
        });
        setListFire(list);
      })

    } catch (error) {
      alert(error);
    }
  }, [])

  function delFire(key) {
    firebase.bd.ref('/users/' + key).remove()
  }

  function editFire(key, name, telepon, alamat, jumlah) {
    navigation.navigate("update",{
      key: key,
      name: name,
      telepon: telepon,
      alamat: alamat,
      jumlah: jumlah
    });
  }


  return (
    <View style={styles.container}>

      <FlatList style={styles.viewFlat} data={listFire}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) =>

          <View style={styles.iconFlat}>
            <Text style={styles.text}>Nama: {item.name} </Text>
            <Text style={styles.text}>Telepon : {item.telepon}</Text>
            <Text style={styles.text}> Alamat: {item.alamat}</Text>
            <Text style={styles.text}> Jumlah: {item.jumlah}</Text>

            <TouchableOpacity style={styles.btnEnviar} onPress={() => { editFire(item.key, item.name, item.telepon, item.alamat, item.jumlah ) }}>
              <Text style={styles.text}>Edit</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnEnviar} onPress={() => { delFire(item.key) }}>
              <Text style={styles.text}>Delete</Text>
            </TouchableOpacity>
          </View>

        } />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#199187',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
  },
  textInput: {
    width: 300,
    height: 150,
    backgroundColor: '#fff',
    borderRadius: 10,
    textAlign: 'center',
    marginTop: 5
  },
  btnEnviar: {
    margin: 10,
    borderWidth: 1,
    borderColor: '#fff',
    backgroundColor: '000',
    width: 150,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconFlat: {
    
    width: 350,
    height: 150,
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5
  },
  btnEnviar: {
    borderWidth: 1,
    borderColor: '#000',
    color: 'blue',
    width: 50,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 5,
    marginTop: 10
  },
  viewFlat: {
    maxHeight: 410,
  }
});