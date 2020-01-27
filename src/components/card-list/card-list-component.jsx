import React from 'react'
import './card-list.styles.css'
import { Card } from "/home/sanket/Desktop/test/frontend/react/my-app/src/components/card/card.component.jsx";  


export const CardList = props =>{
    return(
        <div className='card-list'>
       { props.monster.map(monster =>
       <Card key= {monster.id} monster={monster} />) }
        </div>
    )
}

