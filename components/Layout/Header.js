import {
  View,
  Text,
  StyleSheet,
  Touchable,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
// const myIcon = <Icon name="rocket" size={30} color="#900" />;

const Header = () => {
  const [searchText, setSearchText] = useState("");
  const handleSearch = () => {
    console.log(searchText);
    setSearchText("");
  };
  return (
    <View style={{ height: 90}}>
      <View style={styles.container}>
        <TextInput
          style={styles.inputbox}
          value={searchText}
          onChangeText={(text) => setSearchText(text)}
        />
        <TouchableOpacity style={styles.searchBtn} onPress={handleSearch}>
          <FontAwesome6 name="magnifying-glass" style={styles.icon} />
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
    backgroundColor:"beige",
  },

  inputbox: {
    borderWidth: 0.5,
    width: "100%",
    position: "absolute",
    backgroundColor: "lightgrey",
    fontSize: 20,
    borderRadius: 5,
    left: 13,
    paddingLeft: 10,
    height: 40,
  },
  searchBtn: {
    position: "absolute",
    left: "95%",
  },
  icon: {
    fontSize: 20,
  },
});
export default Header;
