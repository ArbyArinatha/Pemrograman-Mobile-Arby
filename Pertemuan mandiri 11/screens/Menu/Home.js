import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { 
  StyleSheet, 
  View, 
  Text,
  Image
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom:50,
  },
});

const HomeScreen = ({ navigation }) => (
  <View style={styles.container}>
      <View>
        <Text style={{
          color: "#199187",
          marginTop:65,
          marginBottom:1,
          marginLeft: 20,
          fontSize: 40,
          fontWeight: 'bold'
          }}>
         Welcome..
        </Text>
        <Text style={{
          color: "black",
          marginTop:1,
          marginBottom:0,
          fontSize: 24,
          marginLeft: 25,
          fontWeight: 'bold'
          }}>
         G-DOG
        </Text>
        <View>
          <Text style={{
          marginTop:1,
          marginBottom:2,
          fontSize: 14,
          color: '#199187',
          marginLeft: 27
          }}>
           Dog Food Delivery
          </Text>
          </View>
          <Image style={{height: 320, width: 320, marginLeft: 20 }}  source={require('../../images/pet-logo1.jpg')} />
         </View>
       
       <View >

          <View style={{ 
            alignItems: 'center',
             }}>
            <MaterialCommunityIcons
            />
            <Text style={{
              fontWeight:"bold",
              color: '#199187',
              fontSize: 18,
              marginTop: 2
              }}  
              onPress={() => navigation.navigate('Details')}> Detail Produk
             </Text>
          </View>
        
        </View>
 
  </View>
);

export default HomeScreen;
