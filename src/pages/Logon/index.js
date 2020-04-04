import React from 'react';
import { View, Image, Text, TextInput, TouchableOpacity } from 'react-native';

import iconImg from '../../assets/icon.png'; 
import styles from './styles';

export default function Logon(){
    return (
        <View style={styles.container}>
            <View style={styles.header}>
            </View>
            <Image source={iconImg} />
            <Text style={styles.description}>RESTAURANTE-ESCOLA EXECUTIVO MJ</Text>
            <TextInput
                style={styles.input}
                placeholder="E-Mail"
            />
            <TextInput
                style={styles.input}
                placeholder="Senha"
            />

            <TouchableOpacity
                style={styles.button}>
                <Text style={styles.textButton}>
                    Entrar
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}>
                <Text style={styles.textButton}>
                    Cancelar
                </Text>
            </TouchableOpacity>
        </View>
    );
}