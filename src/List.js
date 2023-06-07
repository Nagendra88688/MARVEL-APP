 
// import './List.css';
import { React,Component } from 'react';
import ListItem from './ListItem';

  

class List extends Component {
  render(){
    console.log('hello')


  return (
    <div>
        {this.props.result.map((character,index)=><ListItem character={character} key={index}/>)}   
    </div>
  )
}
}

export default List 
