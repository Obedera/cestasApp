import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from '../components/header'
import { View, Text, StyleSheet, SafeAreaView, Dimensions, Image, TouchableOpacity } from 'react-native'
import styleComum from '../style'

export class Home extends Component {

    render() {
        return (
            <View style={styleComum.container}>
                <Header />
                <Text style={[styleComum.subtitle, style.textoDescricao]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</Text>
                <TouchableOpacity style={[styleComum.btn, style.btnReceber]} onPress={() => this.props.navigation.navigate('Login')}>
                    <Text style={styleComum.btnText}>QUERO RECEBER UMA CESTA</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styleComum.btn, style.btnDoar]} onPress={()=> this.props.navigation.navigate('Doar')}>
                    <Text style={styleComum.btnText}>QUERO DOAR</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const style = StyleSheet.create({
    textoDescricao:{
      paddingBottom: 40,
      paddingTop: 20  
    },
    btnDoar: {
        backgroundColor: '#16A037'
    },
    btnReceber: {
        backgroundColor: '#285FAF'
    }
})

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
