import React, {Component} from 'react'

export default class Header extends Component{
  render(){
    return(
      <div className="container-fluid bg-primary text-white py-3">
        <div className="container">
          <h2>Supermercado Avenida</h2>
          <h3>Promoções da Semana</h3>
        </div>
      </div>
    )
  }
}
