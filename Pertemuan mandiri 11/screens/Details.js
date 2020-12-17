import React from 'react';
import {
  StyleSheet, 
  Text, 
  View, 
  Image, 
  TouchableOpacity
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useState } from 'react';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",  
  },
  loginbutton: {
    backgroundColor: "black",
    borderRadius: 20,
    backgroundColor: "#199187",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 10,
    marginRight: 70,
    marginLeft: 70, 
  },
});

const DetailsScreen = () => (
  <ScrollView>
  <View style={styles.container}>
      <View>
      <View style={{ padding: 24}}>
        <Text style={{color: 'black', fontWeight: 'bold', fontSize: 36, textAlign: 'center', color: '#199187' }}> Produk </Text>
      </View>

      <View>
      <Image style={{height: 250, width: 250, marginTop: 25, marginLeft: 60 , alignItems: 'center' }} 
      source={require('../images/dogfood1.jpg')}/>
      <Text style={{fontSize: 20, textAlign: 'center', paddingTop: 30, fontWeight: 'bold'}}>Rp. 250.000</Text>
      <Text style={{fontSize: 12, textAlign: 'center', fontWeight: 'bold'}}> Free Delivery!</Text>
      <Text style={{fontSize: 10, textAlign: 'center'}}>Area Denpasar</Text>
      <TouchableOpacity style={styles.loginbutton}  onPress={'Order'}>
        <Text style={{color: "white"}}>Beli</Text>
      </TouchableOpacity>
      </View>

      <View>
      <Image style={{height: 250, width: 250, marginTop: 60, marginLeft: 60 , alignItems: 'center' }} 
      source={require('../images/dogfood2.jpg')}/>
      <Text style={{fontSize: 20, textAlign: 'center', paddingTop: 30, fontWeight: 'bold'}}>Rp. 280.000</Text>
      <Text style={{fontSize: 12, textAlign: 'center', fontWeight: 'bold'}}> Free Delivery!</Text>
      <Text style={{fontSize: 10, textAlign: 'center'}}>Area Denpasar</Text>
      <TouchableOpacity style={styles.loginbutton}  onPress={'Order'}>
        <Text style={{color: "white"}}>Beli</Text>
      </TouchableOpacity>
      </View>

      <View>
      <Image style={{height: 250, width: 250, marginTop: 60, marginLeft: 60 , alignItems: 'center' }} 
      source={require('../images/dogfood3.jpg')}/>
      <Text style={{fontSize: 20, textAlign: 'center', paddingTop: 30, fontWeight: 'bold'}}>Rp. 175.000</Text>
      <Text style={{fontSize: 12, textAlign: 'center', fontWeight: 'bold'}}> Free Delivery!</Text>
      <Text style={{fontSize: 10, textAlign: 'center'}}>Area Denpasar</Text>
      <TouchableOpacity style={styles.loginbutton}  onPress={'Order'}>
        <Text style={{color: "white"}}>Beli</Text>
      </TouchableOpacity>
      </View>

      <View>
      <Image style={{height: 250, width: 250, marginTop: 60, marginLeft: 60 , alignItems: 'center' }} 
      source={require('../images/dogfood4.jpg')}/>
      <Text style={{fontSize: 20, textAlign: 'center', paddingTop: 30, fontWeight: 'bold'}}>Rp. 210.000</Text>
      <Text style={{fontSize: 12, textAlign: 'center', fontWeight: 'bold'}}> Free Delivery!</Text>
      <Text style={{fontSize: 10, textAlign: 'center'}}>Area Denpasar</Text>
      <TouchableOpacity style={styles.loginbutton}  onPress={'Order'}>
        <Text style={{color: "white"}}>Beli</Text>
      </TouchableOpacity>
      </View>

      <View>
      <Image style={{height: 250, width: 250, marginTop: 60, marginLeft: 60 , alignItems: 'center' }} 
      source={require('../images/dogfood5.jpg')}/>
      <Text style={{fontSize: 20, textAlign: 'center', paddingTop: 30, fontWeight: 'bold'}}>Rp. 520.000</Text>
      <Text style={{fontSize: 12, textAlign: 'center', fontWeight: 'bold'}}> Free Delivery!</Text>
      <Text style={{fontSize: 10, textAlign: 'center'}}>Area Denpasar</Text>
      <TouchableOpacity style={styles.loginbutton}  onPress={'Order'}>
        <Text style={{color: "white"}}>Beli</Text>
      </TouchableOpacity>
      </View>

      <View>
      <Image style={{height: 250, width: 250, marginTop: 60, marginLeft: 60 , alignItems: 'center' }} 
      source={require('../images/dogfood6.jpg')}/>
      <Text style={{fontSize: 20, textAlign: 'center', paddingTop: 30, fontWeight: 'bold'}}>Rp. 200.000</Text>
      <Text style={{fontSize: 12, textAlign: 'center', fontWeight: 'bold'}}> Free Delivery!</Text>
      <Text style={{fontSize: 10, textAlign: 'center'}}>Area Denpasar</Text>
      <TouchableOpacity style={styles.loginbutton}  onPress={'Order'}>
        <Text style={{color: "white"}}>Beli</Text>
      </TouchableOpacity>
      </View>

      <View>
      <Image style={{height: 250, width: 250, marginTop: 60, marginLeft: 60 , alignItems: 'center' }} 
      source={require('../images/dogfood7.jpg')}/>
      <Text style={{fontSize: 20, textAlign: 'center', paddingTop: 30, fontWeight: 'bold'}}>Rp. 120.000</Text>
      <Text style={{fontSize: 12, textAlign: 'center', fontWeight: 'bold'}}> Free Delivery!</Text>
      <Text style={{fontSize: 10, textAlign: 'center'}}>Area Denpasar</Text>
      <TouchableOpacity style={styles.loginbutton}  onPress={'Order'}>
        <Text style={{color: "white"}}>Beli</Text>
      </TouchableOpacity>
      </View>

      <View>
      <Image style={{height: 250, width: 250, marginTop: 60, marginLeft: 60 , alignItems: 'center' }} 
      source={require('../images/dogfood8.jpg')}/>
      <Text style={{fontSize: 20, textAlign: 'center', paddingTop: 30, fontWeight: 'bold'}}>Rp. 475.000</Text>
      <Text style={{fontSize: 12, textAlign: 'center', fontWeight: 'bold'}}> Free Delivery!</Text>
      <Text style={{fontSize: 10, textAlign: 'center'}}>Area Denpasar</Text>
      <TouchableOpacity style={styles.loginbutton}  onPress={'Order'}>
        <Text style={{color: "white"}}>Beli</Text>
      </TouchableOpacity>
      </View>

      </View>
  </View>

  </ScrollView>
);
export default DetailsScreen;
