//! depnedencies
import axios from 'axios';

// components
import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/NavBar/NavBar';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites';
//? Hooks
import { Routes, Route, useLocation, useNavigate} from 'react-router-dom';
import { useState, useEffect } from 'react';

const EMAIL = "yuiftw05@gmail.com"
const PASSWORD = "tilines102xD"

function App() {
   const [access, setAcces] = useState(false)
   const [characters, setCharacters] = useState([])
   const location = useLocation()
   const navigate = useNavigate()


   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }

   const onClose = (id)=>{
      const updatedCharacters = characters.filter(character=> character.id !== id)
      setCharacters(updatedCharacters)
   }

   const logIn = (userData)=> {
      if(userData.password === PASSWORD && userData.email === EMAIL){
         setAcces(true)
         navigate('/home')
      }
   }
   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   return (
      <div className='App'>
        
         {
         location.pathname !== "/" 
         ?  <Nav onSearch={onSearch}/> 
         : null
         }
        
         <Routes>
            <Route path='/' element={<Form logIn={logIn}/>}/>
           
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
