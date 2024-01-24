import React from 'react'
import './ItemListContainer.css'

const ItemListContainer = ({greeting}) => {
  return (
    <div className="d-flex justify-content-center align-items-center">
        <h2>{greeting}</h2>
    </div>
  )
}

export default ItemListContainer