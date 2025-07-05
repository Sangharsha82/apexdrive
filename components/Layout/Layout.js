import { View, Text, StyleSheet, StatusBar } from "react-native";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <StatusBar />
    
      <View style={{ flex: 1 }}>{children}</View>
      <View style ={styles.footer} >
        <Footer />
      </View>
      
    </>
  );
};
export default Layout;
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
    
  },
})