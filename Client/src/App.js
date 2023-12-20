//! depnedencies
import axios from 'axios';

// components
import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/NavBar/NavBar';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites';
//? Hooks
import { Routes, Route, useLocation, useNavigate} from 'react-router-dom';
import { useState, useEffect } from 'react';

function App() {
   const [access, setAccess] = useState(false)
   const [characters, setCharacters] = useState([])
   const location = useLocation()
   const navigate = useNavigate()

   console.log(characters)


 async function onSearch(id) {
   try {
      const {data} = await axios(`http://localhost:3001/rickandmorty/character/${id}`)

      if(data.name){
         const isDuplicate = characters.some(character=> character.id === data.id)

         if(!isDuplicate){
            setCharacters(oldChars=> [...oldChars, data])
         } else {
            window.alert("this character already exist in your cards")
         }
      }
      

   } catch (error) {
      window.alert("character not found")
   }
}

   async function randomHandler(){
      let haveIt = [];
      let random = (Math.random() * 826).toFixed();
      random = Number(random)
      try {
         if(!haveIt.includes(random)){
            haveIt.push(random)

            const {data} = await axios(`http://localhost:3001/rickandmorty/character/${random}`)

            const isDuplicate = characters.some(character=> character.id === data.id)

            if(!isDuplicate){
               setCharacters(oldChars=> [...oldChars, data])
            } else {
               window.alert("character found but it's already in your cards")
            }
         }
         
      } catch (error) {
         window.alert(error)
      }
      
   }


   const onClose = (id)=>{
      const updatedCharacters = characters.filter(character=> character.id !== id)
      setCharacters(updatedCharacters)
   }

   //? login with backend
   async function login(userData) {
      try {
         const {email, password} = userData
         const URL = 'http://localhost:3001/rickandmorty/login/'
         const response = await axios(URL + `?email=${email}&password=${password}`)
         const {data} = response
         const {access} = data
         setAccess(data)
         access && navigate('/home')
         
      } catch (error) {   
         console.log(error)
      }
   }
   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   return (
      <div className='App'>
        
         {
         location.pathname !== "/" 
         ?  <Nav randomHandler={randomHandler} onSearch={onSearch}/> 
         : null
         }
        
         <Routes>
            <Route path='/' element={<Form login={login}/>}/>
           
            <Route path='/home' 
            element={<Cards characters={characters} onClose={onClose}/>}/>
           
            <Route path='/About' element={<About/>}/>
           
            <Route path='/detail/:id' element={<Detail/>}/>

            <Route path='/favorites' element={<Favorites/>}/>
         </Routes>
         
      </div>
   );
}

export default App;
