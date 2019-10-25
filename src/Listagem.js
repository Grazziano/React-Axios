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
      <div>

      </div>
    )
  }
}
