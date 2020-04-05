import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center'
    },
    header: {
        marginBottom: 70,
        backgroundColor: '#005390',
        width: 410,
        height: 50,
    },
    description: {
        marginTop: 20,
        color: '#737380',
    },
    input: {
        marginTop: 20,
        margin: 10,
        width: 300,
        height: 60,
        borderWidth: 1,
        backgroundColor: 'white',
        borderColor: 'white',
        borderRadius: 3.17
      },
      button: {
        marginTop: 10,
        width: 300,
        height: 60,
        backgroundColor: '#005390',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 3.17
      },
      textButton: {
        color: 'white',
        fontSize: 16
      }
});