import React, { Component } from 'react'
import { connect } from 'react-redux'
import { login } from '../store/actions/user'
import { View, ActivityIndicator, ScrollView, Text, TextInput, BackHandler, SafeAreaView, StyleSheet, TouchableOpacity, Alert, Dimensions } from 'react-native'
import Header from '../components/header'
import styleComum from '../style'
import axios from 'axios'

export class Login extends Component {
    state = {
        isLoad: true,
        numeroDocumento: this.props.numeroDocumento,
        senhaDefinitiva: this.props.senhaDefinitiva
    }

    validarForm = (form) => {
        if (form.numeroDocumento != null && form.senhaDefinitiva != null) {
            return true
        }
        else {
            return false
        }
    }

    logar = () => {
        let user = { ...this.state }
        this.setState({ isLoad: false })
        if (this.validarForm(user)) {

            axios.post('/loginWeb', user).then(resp => {
                user['token'] = resp.data['token']
                user['auth'] = resp.data['auth']
                this.setState({ isLoad: true })
                this.props.onLogin({ ...user });
                this.props.navigation.navigate('Status')

            }).catch(error => {
                if (error.response.status == 401) {
                    Alert.alert(error.response.data);

                }
                else {
                    Alert.alert('Algo deu errado tente novamente');
                }
                this.setState({ isLoad: true })

            })
        } else {
            this.setState({ isLoad: true })
            Alert.alert('Usuario Invalido')
        }
    }

    BackHandler = () => {
        this.props.navigation.navigate('Home')
        return true
    }

    componentDidMount = () => {
        BackHandler.addEventListener('hardwareBackPress', this.BackHandler);
    }


    render() {
        return (
            <SafeAreaView style={styleComum.container}>
                {this.state.isLoad ? null : <ActivityIndicator style={style.isLoad} size="large" color="#0000ff" />}
                <ScrollView style={{ flex: 2 }} contentContainerStyle={style.scrollview} keyboardShouldPersistTaps={'always'}>
                    <View style={style.content}>
                        <Header />
                        <TextInput onSubmitEditing={() => { this.senhaInput.focus(); }} style={styleComum.input} onChangeText={numeroDocumento => this.setState({ numeroDocumento })} placeholder="Digite o numero de documento" />
                        <TextInput secureTextEntry={true} onSubmitEditing={() => this.logar()} ref={(input) => { this.senhaInput = input; }} style={styleComum.input} secureTextEntry={true} onChangeText={senhaDefinitiva => this.setState({ senhaDefinitiva })} placeholder="Digite sua senha" />
                        <TouchableOpacity style={[styleComum.btn, style.btnLogar]} onPress={() => this.logar()}>
                            <Text style={styleComum.btnText}>Logar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styleComum.btn, style.btnCadastrar]} onPress={() => this.props.navigation.navigate('Cadastrar')} >
                            <Text style={styleComum.btnText}>Cadastre-se</Text>
                        </TouchableOpacity>

                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}

const style = StyleSheet.create({
    content: {
        flexGrow: 1,
        alignItems: 'center',
    },
    subtitle: {
        fontSize: 20,
        padding: 10,
        paddingBottom: 0,
        textAlign: 'left',
        width: '80%'
    },
    scrollview: {
        flexGrow: 1,
        width: Dimensions.get('screen').width
    },
    btnCadastrar: {
        backgroundColor: '#16A037'
    },
    btnLogar: {
        backgroundColor: '#285FAF'
    },
    isLoad: {
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        position: 'absolute',
        zIndex: 2
    }
})

const mapStateToProps = ({ user }) => ({
    numeroDocumento: user.numeroDocumento,
    senhaDefinitiva: user.senhaDefinitiva
})

const mapDispatchToProps = dispatch => {
    return {
        onLogin: (user) => dispatch(login(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
