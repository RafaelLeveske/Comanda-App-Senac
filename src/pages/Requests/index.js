import React from "react";
import {
  View,
  KeyboardAvoidingView,
  Text,
  TouchableOpacity,
} from "react-native";

import styles from "./styles";
import { Form, FormInput } from "./stylesComponents";

export default function Requests({ route }) {
  const { table } = route.params;
  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerButton}>
          <Text style={styles.headerText}>Pedidos: {table}</Text>
        </View>
      </View>
      <Form>
        <FormInput
          label="Ficha"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Ficha"
          returnKeyType="next"
        />
        <FormInput
          label="Nº Cozinha"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Nº Cozinha"
          returnKeyType="next"
        />
        <FormInput
          label="Produto"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Produto"
          returnKeyType="next"
        />
        <FormInput
          label="Observação"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Observação"
          returnKeyType="next"
        />

        <TouchableOpacity style={styles.newOrder} onPress={() => {}}>
          <Text style={styles.headerText}>Lançar Pedido</Text>
        </TouchableOpacity>
      </Form>
    </KeyboardAvoidingView>
  );
}
