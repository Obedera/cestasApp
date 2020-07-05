import React, { Component } from 'react'
import { connect } from 'react-redux'
import { login, logout } from '../store/actions/user'
import { View, ScrollView, Text, TextInput, BackHandler, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import Header from '../components/header'
import styleComum from '../style'
import axios from 'axios'

export class Cadastrar extends Component {
    state = {
        celular: null,
        email: null,
        nome: null,
        primeiraSenha: null,
        regiao: null,
        rne: null,
        numeroDocumento: null,
        senhaDefinitiva: null,
        sobrenome: null,
    }

    BackHandler = () => {
        this.props.navigation.navigate('Login')
        return true
    }

    componentDidMount = () => {
        BackHandler.addEventListener('hardwareBackPress', this.BackHandler);
    }
    render() {
        return (
            <ScrollView>
                <View style={styleComum.container}>
                    <Header />
                    <Text style={styleComum.subtitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</Text>
                    <TextInput onSubmitEditing={() => { this.sobrenomeInput.focus(); }} style={styleComum.input} onChangeText={nome => this.setState({ nome })} placeholder="Digite seu nome" />
                    <TextInput ref={(input) => { this.sobrenomeInput = input; }} onSubmitEditing={() => { this.emailInput.focus(); }} style={styleComum.input} onChangeText={sobrenome => this.setState({ sobrenome })} placeholder="Digite seu sobrenome" />
                    <TextInput keyboardType={'email-address'} ref={(input) => { this.emailInput = input; }} onSubmitEditing={() => { this.celularInput.focus(); }} style={styleComum.input} onChangeText={email => this.setState({ email })} placeholder="Digite seu email" />
                    <TextInput keyboardType={'phone-pad'} ref={(input) => { this.celularInput = input; }} onSubmitEditing={() => { this.numeroDocumentoInput.focus(); }} style={styleComum.input} onChangeText={celular => this.setState({ celular })} placeholder="Digite seu numero de celular" />
                    <TextInput keyboardType={'numeric'} ref={(input) => { this.numeroDocumentoInput = input; }} onSubmitEditing={() => { this.rneInput.focus(); }} style={styleComum.input} onChangeText={numeroDocumento => this.setState({ numeroDocumento })} placeholder="Digite o seu CPF" />
                    <TextInput ref={(input) => { this.rneInput = input; }} onSubmitEditing={() => { this.regiaoInput.focus(); }} style={styleComum.input} onChangeText={rne => this.setState({ rne })} placeholder="Digite o seu RNE" />
                    <TextInput ref={(input) => { this.regiaoInput = input; }} onSubmitEditing={() => { this.primeiraSenhaInput.focus(); }} style={styleComum.input} onChangeText={regiao => this.setState({ regiao })} placeholder="Qual região de São Paulo você reside?" />
                    <TextInput secureTextEntry={true} ref={(input) => { this.primeiraSenhaInput = input; }} secureTextEntry={true} onSubmitEditing={() => { this.senhaDefinitivaInput.focus(); }} style={styleComum.input} onChangeText={primeiraSenha => this.setState({ primeiraSenha })} placeholder="Digite uma senha" />
                    <TextInput secureTextEntry={true} ref={(input) => { this.senhaDefinitivaInput = input; }} style={styleComum.input} secureTextEntry={true} onChangeText={senhaDefinitiva => this.setState({ senhaDefinitiva })} placeholder="Confirme sua Senha" />
                    <TouchableOpacity style={[styleComum.btn, style.btnCadastrar]}>
                        <Text style={styleComum.btnText}>Cadastrar</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        )
    }
}

const style = StyleSheet.create({
    btnCadastrar: {
        backgroundColor: '#16A037',
        marginBottom:40
    },
})

const mapDispatchToProps = dispatch => {
    return {
        onLogin: () => dispatch(login(user))
    }
}

export default connect(null, mapDispatchToProps)(Cadastrar)
