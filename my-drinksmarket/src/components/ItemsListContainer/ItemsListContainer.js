import React from 'react'
import './ItemsListContainer.css'



const ItemsListContainer = (props) => {
  
    return (
    <div className='greeting-container'>
        <h2 className='message'>{props.name}</h2>

    </div>
  )
}

export default ItemsListContainer