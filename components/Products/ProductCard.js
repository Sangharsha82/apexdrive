import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState } from "react";

const ProductCard = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  // Ensure stock has a default value if not provided
  const stock = product.stock || 10;

  const handleIncreaseQuantity = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    } else {
      Alert.alert(
        "Stock Limit Reached",
        `Maximum available stock for ${product.name} is ${stock} units.`,
        [{ text: "OK", style: "default" }]
      );
    }
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleaddtoCart = () => {
    alert(`Added ${quantity} ${product.name}(s) to cart`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image source={product.image} style={styles.image} />
        <Text>{product.name}</Text>
        <Text>Rs.{product.price}</Text>

        {/* Quantity Controls */}
        <View style={styles.quantityContainer}>
          <TouchableOpacity
            style={[
              styles.quantityBtn,
              quantity <= 1 && styles.quantityBtnDisabled,
            ]}
            onPress={handleDecreaseQuantity}
          >
            <Text
              style={[
                styles.quantityBtnText,
                quantity <= 1 && styles.quantityBtnTextDisabled,
              ]}
            >
              -
            </Text>
          </TouchableOpacity>

          <View style={styles.quantityDisplay}>
            <Text style={styles.quantityText}>{quantity}</Text>
          </View>

          <TouchableOpacity
            style={styles.quantityBtn}
            onPress={handleIncreaseQuantity}
          >
            <Text style={styles.quantityBtnText}>+</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.btn}>
          <TouchableOpacity style={styles.btncart} onPress={handleaddtoCart}>
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

    alignItems: "center",
    backgroundColor: "#faf9f6",
    justifyContent: "center",
  },
  card: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "grey",
    backgroundColor: "#faf9f6",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 5,
    alignItems: "center",
    width: "100%",
    padding: 10,
    justifyContent: "center",
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 5,
    resizeMode: "center",
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingHorizontal: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  quantityBtn: {
    width:25,
    height: 25,
    borderRadius: 17.5,
    backgroundColor: "#FF7F50",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: -5,
  },
  quantityBtnText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  quantityBtnDisabled: {
    backgroundColor: "#ccc",
  },
  quantityBtnTextDisabled: {
    color: "#999",
  },
  quantityDisplay: {
    minWidth: 30,
    height: 25,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f8f8",
    borderRadius: 5,
    marginHorizontal: 5,
  },
  quantityText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  btn: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 5,
    margin: 5,
  },
  btncart: {
    backgroundColor: "#FF7F50",
    padding: 10,
    borderRadius: 20,
    shadowColor: "#FF7F50",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 10,
    textShadowColor: "#FF4500",
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
  },
});
export default ProductCard;
