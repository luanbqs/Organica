import React, { Component } from 'react';

import '../App.css';
import logo from '../elementos/logo-organica.png'
import organicTag from '../elementos/selo-produto-organico.png'
import userIcon from '../elementos/icone-area-do-cliente.svg'
import Header from '../components/Header'

// import { Container } from './styles';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    }
  }

  updateName = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  updatePassword = event => {
    this.setState({
      password: event.target.value
    })
  }

  submitLogin = async () => {
    if (this.state.password == 123456 && this.state.username == 'quay') {
      alert('Login efetuado')
    } else {
      alert('Usuário e/ou senha inválido.')
    }

  }

  changePage = (page) => {
    this.props.history.push(page)
  }

  render() {
    return (
      <div>
        <div className="navBar">
          <div className="logoWrapper">
            <img src={logo} alt="Logo" />
          </div>
          <div className="navOptions">
            <button className="btn" onClick={() => this.changePage('/OurHistory')}> <h3>Nossa História</h3></button>
            <button className="btn" onClick={() => this.changePage('/Market')}> <h3>As Feiras</h3></button>
            <button className="btn" onClick={() => this.changePage('/Products')}> <h3>Produtos</h3></button>
            <button className="btn" onClick={() => this.changePage('/Blog')}> <h3>Blog</h3></button>
            <button className="btn" onClick={() => this.changePage('/Partners')}> <h3>Parceiros</h3></button>
            <button className="btn" onClick={() => this.changePage('/')}> <h3 id="clientArea">Área do cliente</h3></button>

          </div>
        </div>
        <body className="homeBackground">
          <div id="loginWrapper">
            <img id="organicTag" src={organicTag} alt="tag" />
            <div id="userIcon">
              <img style={{ marginTop: 10 }} src={userIcon} alt="tag" />
            </div>

            <div style={{ marginTop: -20 }}>
              <h1 style={{ color: 'white' }}> Área do Cliente</h1>
              <input value={this.state.username} onChange={event => this.updateName(event)} className="login-input" type="text" name="username" placeholder="Usuário" />
              <input value={this.state.password} onChange={event => this.updatePassword(event)} className="login-input" type="password" name="username" placeholder="Senha" />
              <button onClick={this.submitLogin} className="loginButton"> <h2>Acessar</h2></button>
              <div style={{ display: 'flex', margin: '20px' }}>
                <label style={{ marginRight: '10px' }}>
                  Lembre-me
                <input type="checkbox" name="savePswd" />
                </label>
                <label>Esqueceu a senha?</label>
              </div>

            </div>

          </div>
          <h1 className="description">Cuide de você fazendo o bem até para a natureza.</h1>
        </body>
      </div>


    );
  }
}
