import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from "react-native";
import React from "react";
import { categoriesData } from "../../data/dataCategories";
import { useNavigation } from "@react-navigation/native";

const Categories = () => {
  const navigation = useNavigation();

  return (
    <ScrollView horizontal={true}>
      <View style={styles.container}>
        {categoriesData?.map((item) => (
          <View key={item._id}>
            <TouchableOpacity
              style={styles.catContainer}
              onPress={() => navigation.navigate(item.path)}
            >
              {/* Dynamically load the image */}
              <Image
                source={item.image} // Assuming item.image contains a valid image path or require statement
                style={styles.image}
              />
              <Text style={{ fontSize: 20 }}>{item.name}</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "rgb(185, 185, 185)",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  
  },
  catContainer: {
    padding: 10,
    margin: 5,
    
    borderRadius: 5,
    alignItems: "center",
  },
  image: {
    width: 40, // Adjust the width as needed
    height: 50, // Adjust the height as needed
    marginBottom: 5,
    resizeMode : "contain", // Ensure the image fits well within the container
  },
});

export default Categories;
