import React, { Component } from 'react';

import '../App.css';
import logo from '../elementos/logo-organica.png'
import organicTag from '../elementos/selo-produto-organico.png'
import userIcon from '../elementos/icone-area-do-cliente.svg'

export default class Market extends Component {
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
          <h1 className="description">As feiras</h1>
        </body>
      </div>
    );
  }
}
