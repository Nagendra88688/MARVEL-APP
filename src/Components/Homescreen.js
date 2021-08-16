import React,{useState,useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Row,Col} from 'react-bootstrap'
import axios from 'axios'
import '../App.css'
import CharacterComponent from './CharacterComponent';


function Homescreen() {

    const [characters,setCharacters]= useState([])
    const [searchedCharacter,setSearchedCharacter]=useState([])
    const [typed,setTyped]=useState("")


//   UseEffect for homepage,runs only once 
    useEffect(()=>{
        axios.get(`https://gateway.marvel.com:443/v1/public/characters?limit=30&ts=1&apikey=96f65f0d01a9d237e3f263c3e2b83707&hash=82b0b84dd7dec14ca12191bd48f3e2f7`)
      
       .then(res=>{
           console.log(res.data.data.results)
            setCharacters(res.data.data.results)
       })
       .catch(err=>{
           console.log(err)
       })
   },[])

//    UseEffect for searched character 
    useEffect(()=>{
        axios.get(`https://gateway.marvel.com/v1/public/characters?nameStartsWith=${typed}&ts=1&apikey=96f65f0d01a9d237e3f263c3e2b83707&hash=82b0b84dd7dec14ca12191bd48f3e2f7`)
         .then(res=>{
             setSearchedCharacter(res.data.data.results)
         })
    },[typed])


    return (
        
        <>
             <Container>
            
            <input type='text' value={typed} onChange={e=>setTyped(e.target.value)} className='input-field'  placeholder="SEARCH"/>
            
            {/* showing only searched characters when searchbox is non-empty   */}
            {
                typed===""? null:
            <Row>
                {
                    searchedCharacter.map(searched=>
                    <Col sm={6} md={4} lg={4} xl={3}>
                    <CharacterComponent character={searched}/>
                    </Col>)
                }
            </Row>
           }
         
         {/* showing all characters if the searchbox is empty  */}
         {
             typed==="" ?
            <Row>
                {
                    characters.map(character=>
                    <Col sm={6} md={4} lg={4} xl={3} className="card-bodyy">
                    <CharacterComponent character={character}/>
                    </Col>)
                }
            </Row> : null
        }
         </Container>
        </>
        
    )
}

export default Homescreen
