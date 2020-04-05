import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 15,
        paddingTop: Constants.statusBarHeight + 10,
        backgroundColor: '#ffffff'
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
       // backgroundColor: '#005390',
        marginBottom: 5,
        height: 50,
        color: '#ffffff',
    },
    item: {
        backgroundColor: '#00FF7F',
        alignItems: 'center',
        justifyContent: 'center',
        height: 100,
        flex: 1,
        margin: 1,
        paddingHorizontal: 10
    },
    itemText: {
        color: '#ffffff',
        fontSize: 20,
    }

});