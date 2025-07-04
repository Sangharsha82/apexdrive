import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";

const ProductCard = ({ product }) => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image source={product.image} style={styles.image} />
        <Text>{product.name}</Text>
        <Text>Rs.{product.price}</Text>
        <View style={styles.btn}>
          
          <TouchableOpacity style={styles.btncart}>
            <Text>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
 
  container: {
    flex: 1,
    flexDirection: "row",
    padding: 10,
    alignItems: "center", // Align items to the top
    backgroundColor: "rgb(186, 186, 186)",
    justifyContent: "center",
    
    
   // Space between cards
  },
  card: {
    borderWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "rgb(226, 226, 226)",
    alignItems: "center",
    width:"100%",
  
    padding:10,
    justifyContent:"center",
  },
  image: {
    width: 150, // Adjust the width as needed
    height: 150, // Adjust the height as needed
    marginBottom: 5,
    resizeMode: "center", // Ensure the image fits well within the container
  },
  btn: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 5,
    margin: 5,
    
  },
 
  btncart: {
    backgroundColor: "orange",
    padding: 5,
    borderRadius: 5,
  },
});
export default ProductCard;
