import React, {Component} from 'react'
import Conecta from './Conecta'

export default class Listagem extends Component{

  state = {
    ofertas: []
  }

  async componentDidMount(){
    const lista = await Conecta.get('05096bfe-de6a-46ba-a092-8e182822cb2c')
    this.setState({ofertas: lista.data})
  }

  render(){
    return(
      <div className="container mt-2">
        <div className="card-deck">
        {this.state.ofertas.map(oferta => (
          <ItemLista key={oferta.produto}
                      produto={oferta.produto}
                      marca={oferta.marca}
                      foto={oferta.foto} />
        ))}
        </div>
      </div>
    )
  }
}
