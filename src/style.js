import {StyleSheet, Dimensions} from 'react-native'
export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#ededed'
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: Dimensions.get('window').width / 10,
        color: '#285FAF'
    },
    subtitle: {
        textAlign: 'center',
        fontSize: Dimensions.get('window').width / 28,
        width: '80%',
    },
    btn: {
        borderRadius: 8,
        marginTop: 10,
        paddingTop: 20,
        paddingBottom: 20,
        width: '80%'
    },
    btnText: {
        fontSize: 16,
        color: '#FFF',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    input:{
        backgroundColor: '#EEE',
        borderColor: '#333',
        borderRadius: 8,
        borderWidth: 1,
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 10,
        paddingTop: 20,
        paddingBottom: 20,
        textAlign: 'center',
        width: '80%',
    }
})