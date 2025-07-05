import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import Footer from '../components/Layout/Footer'
const Cart = () => {
  return (
    <View>
      <Text>Cart</Text>
      <View style={styles.footer}>
        <Footer/>
        </View>
      
    </View>
    
  )
}

export default Cart
const styles= StyleSheet.create({
  footer:{
    display:"flex",
    flex:1,
    height: 60,
    width:"100%",
    backgroundColor:"#faf9f6",
    justifyContent:"flex-end",
   position:"absolute",
   //borderTopWidth:1,
   borderTopColor: "grey",
   borderTopRightRadius: 10,
    bottom:0,
    zIndex: 1,
    
  },
})