import React,{useState,useEffect} from 'react'
import '../styles/App.css';
//code here
function App() {
  const [name, setName] = useState('');

  const handleClick = () => {
    const input = document.querySelector('#input');
    setName(input.value);
  };
  return (
    <div id="main">
      <input id='input' onChange={}></input>
      <button id='button' onClick={}>Click</button>
      <p id='text'> Hello my name is ____ and I study at Newton School</p>
    </div>
  )
}


export default App;
