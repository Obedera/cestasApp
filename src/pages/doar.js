import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Header from '../components/header'
import styleComum from '../style'

class Doar extends Component {
    render() {
        return (
            <View style={styleComum.container}>
                <Header />
                <Text style={styleComum.subtitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. </Text>
                <View style={style.dadosBancarios}>
                    <Text style={[styleComum.subtitle,style.texto]}>Itau</Text>
                    <Text style={[styleComum.subtitle,style.texto]}>Agencia 12345-6</Text>
                    <Text style={[styleComum.subtitle,style.texto]}>CC 1245474-9</Text>
                    <Text style={[styleComum.subtitle,style.texto]}>CNPJ 1452847/0001-58</Text>
                </View>
                <TouchableOpacity style={[styleComum.btn, style.btnHome]} onPress={()=> this.props.navigation.navigate('Home')}>
                    <Text style={styleComum.btnText}>VOLTAR PARA HOME</Text>
                </TouchableOpacity>
            </View>
        )
    }
}   

const style = StyleSheet.create({
    dadosBancarios:{
        paddingBottom:15,
        paddingTop:30,
        alignItems:'center',
        width:'100%'
    },
    texto:{
        color:'#232323',
        fontSize:20,
        margin:0,
        padding:0,
        lineHeight:20
    },
    btnHome: {
        backgroundColor: '#16A037'
    },
})

export default Doar;