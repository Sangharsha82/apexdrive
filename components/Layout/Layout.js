import { View, Text, StyleSheet, StatusBar } from "react-native";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <StatusBar />
      <Header />
      <View style={{ flex: 1 }}>{children}</View>
      <Footer />
    </>
  );
};
export default Layout;
