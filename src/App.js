import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import UI from "./UI.js"
import {useState, useEffect}  from 'react';


const App = ()=>{
  // const clickHandle = () =>{
  //   alert("fuck you");
  // };

 
  const [money,setmoney] = useState(1000);
  const [name , setname] = useState("Ray");
  const [exp, setexp] = useState(0);
  const [colour,setcolour ] = useState("error");

    
  // const getdata = async()=>{
  //   const result = await fetch("http://localhost:3000");
  //   const names = await result.json();
  //   console.log(names );
    
  // };
  const upgrade = () =>{
    setmoney(a => a - 1)
    setexp(a => a + 1)
  }

  useEffect(()=> {
    if (money <950){setcolour("warning");};
  } ,
[money]);
  return <UI name={name} exp={exp} money={money} colour={colour} upgrade={upgrade}/>;

  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
