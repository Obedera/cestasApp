import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logout } from '../store/actions/user'
import { View, ScrollView, Text, TextInput, Dimensions, BackHandler, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import Header from '../components/header'
import styleComum from '../style'
import axios from 'axios'
import { cpfMask } from '../utils/maskcpf'
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
        const user = { numeroDocumento: this.state.numeroDocumento, senhaDefinitiva: this.state.senhaDefinitiva }
        const config = {
            headers: {
                'x-access-token': `${this.state.token}`
            }
        };
        axios.post('/api/v1/usuario/obterPorNumeroDocumento', user, config).then(resp => {
            let state = { ...this.state }
            const data = resp.data.todo
            state['nome'] = data['nomeCompleto']
            state['id'] = data['id']
            this.setState({ ...state })
        })
    }


    render() {
        return (
            <View style={styleComum.container}>
                <Header title="Status" />
                <View style={style.content}>
                    <Text style={styleComum.subtitle}>{this.state.nome}</Text>
                    <Text style={styleComum.subtitle}>{cpfMask(this.state.numeroDocumento)}</Text>
                    <Text style={style.textStatus}>{this.state.status || 'Pedido em Análise'}</Text>
                    <Text style={styleComum.subtitle}>Pedido feito em 12/07/2020</Text>
                    <Text style={styleComum.subtitle}>17h 45</Text>
                </View>
                <TouchableOpacity style={[styleComum.btn, style.btnLogout]} onPress={()=> this.BackHandler()}>
                    <Text style={styleComum.btnText}>Sair</Text>
                </TouchableOpacity>

            </View>
        )
    }
}

const style = StyleSheet.create({
    content: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        width: '80%'
    },
    textStatus: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: Dimensions.get('window').width / 20,
        color: '#DDC300'
    },
    btnLogout: {
        marginTop: 40,
        backgroundColor: '#ec2028'
    }
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
