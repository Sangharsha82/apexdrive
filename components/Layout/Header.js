import {
  View,
  Text,
  StyleSheet,
  Touchable,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
// const myIcon = <Icon name="rocket" size={30} color="#900" />;

const Header = () => {
  return (
    <View style={{ height: 90, marginTop: 10 }}>
      <View style={styles.container}>
        <TextInput style={styles.inputbox} />
        <TouchableOpacity>
          <FontAwesome name="search" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
  },

  inputbox: {
    borderWidth: 0.5,
    width: "100%",
    position: "absolute",
    backgroundColor: "lightgrey",
    fontSize: 20,
    borderRadius: 5,
  },
});
export default Header;
