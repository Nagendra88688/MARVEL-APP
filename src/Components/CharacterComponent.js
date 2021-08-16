import React from 'react'
import { Card } from 'react-bootstrap'


const CharacterComponent = ({character}) => {
    return (
      <Card className='my-3   rounded' >
          <Card.Img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} variant='top'/>

        
       <Card.Body  >
           <Card.Title as='div'>
               <strong className='hero-title'>{character.name}</strong>
           </Card.Title>

           {/* <Card.Text as='div'>
              {character.description}
           </Card.Text> */}
       </Card.Body>
      </Card>

     
   

    )
}

export default CharacterComponent
