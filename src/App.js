import { useState } from 'react';

function App() {

  let dict = 
  [
  
      { word: "React", meaning: "A JavaScript library for building user interfaces." },
  
      { word: "Component", meaning: "A reusable building block in React." },
  
      { word: "State", meaning: "An object that stores data for a component." }
  
  ]
  

  const[text,setText] = useState('');
  // const[isFound,setIsFound] = useState(false);
  const[meaning,setMeaning] = useState('');
  
  const handleChange  = (e) => {
    setText(e.target.value);
    // setIsFound(false);
    setMeaning('');
  } 

  const handleClick = (e) => {
    if(text){
      let val = false
      for(let i=0; i<dict.length; i++){
          if(dict[i].word.toLowerCase().includes(text.toLowerCase())){
              setMeaning(dict[i].meaning);
              val = true;
          }
      }
      if(!val){
        setMeaning('Word not found in the dictionary.');
      }

    }else{
      setMeaning('Word not found in the dictionary.');
    }
  }

  return (
    <div>
      <h2>Dictionary App</h2>
      <input type='text' value={text} onChange={handleChange}/>
      <button onClick={handleClick}>Search</button>
      <p>Definition:</p>
      <p>{meaning}</p>
    </div>
  );
}
// {/* {isFound?<p>Word not found in the dictionary.</p>:null} */}

export default App;
