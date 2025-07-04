import { View, Text, FlatList } from "react-native";
import React from "react";
import ProductCard from "./ProductCard";
import { ProductData } from "../../data/productsData";

const Products = () => {
  return (
    <View >
      <View>
      <Text>Banner</Text>
      </View>
    <FlatList
      data={ProductData}
      keyExtractor={(item) => item._id.toString()}
      numColumns={2}
      renderItem={({ item }) => <ProductCard product={item} />}
     contentContainerStyle={{ backgroundColor: "#09006A" }}
    />
    </View>
  );
};

export default Products;
