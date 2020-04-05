import React from "react";
import {
  View,
  Image,
  Text,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import logoImg from "../../assets/logo.png";
import styles from "./styles";

const dataList = [
  { key: "MESA 1" },
  { key: "MESA 2" },
  { key: "MESA 3" },
  { key: "MESA 4" },
  { key: "MESA 5" },
  { key: "MESA 6" },
  { key: "MESA 7" },
  { key: "MESA 8" },
  { key: "MESA 9" },
  { key: "MESA 10" },
  { key: "MESA 11" },
  { key: "MESA 12" },
  { key: "MESA 13" },
  { key: "MESA 14" },
  { key: "MESA 15" },
  { key: "MESA 16" },
  { key: "MESA 17" },
  { key: "MESA 18" },
  { key: "MESA 19" },
  { key: "MESA 20" },
  { key: "MESA 21" },
  { key: "MESA 22" },
];

const _numColumns = 2;

export default function Tables() {
  const navigation = useNavigation();

  function navigateToOrders(table) {
    navigation.navigate("Orders", {
      table,
    });
  }

  _renderItem = ({ item, index }) => {
    return (
      <View style={styles.item}>
        <TouchableOpacity onPress={() => navigateToOrders(item.key)}>
          <Text style={styles.itemText}>{item.key}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <Text style={styles.headerText}>
          Total de <Text style={styles.headerTextBold}>0 mesas livres</Text>.
        </Text>
      </View>

      <FlatList
        data={dataList}
        renderItem={_renderItem}
        keyExtractor={(item, index) => index.toString()}
        numColumns={_numColumns}
      />
    </View>
  );
}
