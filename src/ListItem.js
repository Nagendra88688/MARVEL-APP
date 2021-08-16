 
// import './ListItem.css';
import { React,Component } from 'react';

 


class ListItem extends Component {
  render(){

    const metaData= this.props.character
    const {thumbnail,name,description}= metaData

  return (
    <div className="character">
      <div className="character-thumbnail-container">
        <img className='character-thumbnail' src={`${thumbnail.path}.${thumbnail.extension}`}/>
      </div>
      <div className='character-data-container'>
        <h1>{metaData.name}</h1>
        <p>{metaData.description}</p>
      </div>
    </div>
  )
}
}

export default ListItem 
