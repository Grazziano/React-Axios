import React, {Component} from 'react'

const ItemLista = props => {

    return(
      <div className="card">
        <img src={props.foto} alt="Promoção" className="card-img-top" />
        <div className="card-body">
          <h4 className="card-title">{props.produto} {props.marca}</h4>
          <h5 className="card-text">
          {Number(props.preco).toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}
          </h5>
        </div>
      </div>
    )
}

export default ItemLista
