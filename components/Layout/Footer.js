import { View, Text ,TouchableOpacity,StyleSheet} from 'react-native'
import React from 'react'
import FontAwesome6Icon from 'react-native-vector-icons/FontAwesome6'
import  {useRoute} from '@react-navigation/native'
import { useNavigation } from '@react-navigation/native'
const Footer = () => {
  const route = useRoute();
  const navigation = useNavigation();
  return (
    <View style = {styles.container}>
     <TouchableOpacity style={[styles.icon, route.name === 'home' && styles.active]} onPress={() => navigation.navigate("home")}>
      <View style= {styles.menuContainer}>
      <FontAwesome6Icon name='house' size={20} color='black' />
      <Text>Footer</Text>
      </View>
     </TouchableOpacity>
      <TouchableOpacity style={[styles.icon, route.name === 'Cart' && styles.active]} onPress={() => navigation.navigate("Cart")}>
      <View style= {styles.menuContainer}>
      <FontAwesome6Icon name='cart-shopping' size={20} color='black'  />
      <Text>Cart</Text>
      </View>
     </TouchableOpacity>
      <TouchableOpacity style={[styles.icon, route.name === 'Home' && styles.active]}>
      <View style= {styles.menuContainer}>
      <FontAwesome6Icon name='user-tie' size={20} color='black' />
      <Text>User</Text>
      </View>
     </TouchableOpacity>
      <TouchableOpacity style={[styles.icon, route.name === 'Home' && styles.active]}>
      <View style= {styles.menuContainer}>
      <FontAwesome6Icon name='right-from-bracket' size={20} color='black' />
      <Text>Logout</Text>
      </View>
     </TouchableOpacity>
     
      
     </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    backgroundColor: '#faf9f6',
    justifyContent: 'center',
    gap: 10,
  },
  menuContainer: {
  margin: 5,
  alignItems: 'center',
  },
  icon: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 6,
    backgroundColor: '#faf9f6',
    
  },
  active: {
    backgroundColor: '#e0e0e0',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'grey',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 2,
    transform: [{ scale: 1.1 }],
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
})
export default Footer