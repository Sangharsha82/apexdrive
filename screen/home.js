import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import Layout from '../components/Layout/Layout'
import Categories from '../components/categories/Categories'
const Home = () => {
  return (
    <Layout>
      <Categories/>
        <View >
      <Text>home</Text>
      </View>
    </Layout>
  )
}

export default Home;
 const styles = StyleSheet.create({
   container: {
    flex: 1,
     backgroundColor: "#fff",
   alignItems: "center",
    justifyContent: "center",
  },
 });
