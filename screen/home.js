import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Layout from "../components/Layout/Layout";
import Categories from "../components/categories/Categories";
import Products from "../components/Products/Products";
import Header from "../components/Layout/Header";
const Home = () => {
  return (
    <Layout>
      <Header/>
      <View style={{ height: 100 , backgroundColor:"#636363"}}>
        <Categories />
      </View>
      <View style={{ flex: 1 }}>
        <Text>home</Text>
        <Products />
      </View>
    </Layout>
  );
};

export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
