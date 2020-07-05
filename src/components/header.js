import React, { Component } from 'react'
import cestaImg from '../../assets/img/cesta.png'
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native'

class Header extends Component {

    render() {
        return (
            <View style={style.container}>
                <View style={style.header}>
                </View>
                <Image style={style.imgCesta} source={cestaImg} />
                <Text style={style.title}>Cestas básicas</Text>
            </View>
        )
    }
}

const style = StyleSheet.create({
    container: {
        alignItems: 'center',
        width: '100%'
    },
    header: {
        backgroundColor: '#285FAF',
        height: Dimensions.get('window').width / 2,
        width: '100%'

    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: Dimensions.get('window').width / 10,
        color: '#285FAF'
    },
    imgCesta: {
        marginTop: -(Dimensions.get('window').width / 4),
        height: Dimensions.get('window').width / 2,
        resizeMode: 'contain'
    },
})

export default Header

