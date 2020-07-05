import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logout } from '../store/actions/user'
import { View, ScrollView, Text, TextInput, BackHandler, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import Header from '../components/header'
import styleComum from '../style'
import axios from 'axios'

export class StatusPedido extends Component {
    state = {
        numeroDocumento: this.props.numeroDocumento,
        senhaDefinitiva: this.props.senhaDefinitiva,
        token: this.props.token,
        auth: this.props.auth
    }


    logout = () => {
        this.props.onLogout();
        this.props.navigation.navigate('Login');
    }

    BackHandler = () => {
        Alert.alert("Sair", "Deseja mesmo sair?", [
            {
                text: "Cancel",
                onPress: () => null,
                style: "cancel"
            },
            { text: "YES", onPress: () => this.props.navigation.navigate('Login') }
        ]);
        return true
    }

    componentDidMount = () => {
        BackHandler.addEventListener('hardwareBackPress', this.BackHandler);
    }


    render() {
        return (
            <View style={styleComum.container}>
                <Header />
                <Text style={styleComum.subtitle}>CPF: {this.state.numeroDocumento}</Text>
                <Text style={styleComum.subtitle}>Senha: {this.state.senhaDefinitiva}</Text>
                <Text style={styleComum.subtitle}>Token: {this.state.token}</Text>
            </View>
        )
    }
}

const style = StyleSheet.create({

})

const mapStateToProps = ({ user }) => ({
    numeroDocumento: user.numeroDocumento,
    senhaDefinitiva: user.senhaDefinitiva,
    token: user.token,
    auth: user.auth
})

const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => dispatch(logout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StatusPedido)
