import { useState } from 'react';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';


function App() {
  
   const [mode, setMode] = useState('light');

   const toggleMode = () => {
      if(mode === 'light'){
        setMode('dark')
        document.body.style.backgroundColor = '#042743';
        
        document.title = 'TextUtils- Dark Mode';
      } 
      else{
        setMode ('light')
        document.body.style.backgroundColor = 'white';
       
        document.title = 'TextUtils- light Mode';
      }
   }

  return (
    <>
    <Navbar title = "WordCorrect" mode = {mode} toggleMode = {toggleMode}/>
    <div className='container my-3'>
    <TextForm heading = "Enter the text to Analyse" mode = {mode}/>
    </div>
    
    

    </>
  );
}

export default App;
