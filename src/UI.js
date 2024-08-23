
import Button from '@mui/material/Button';

const UI = ({name,exp,money,colour,upgrade}) =>{
return (<div><h1>Your name: {name} </h1>
        <h1>Your exp: {exp}</h1> 
        <h1>Your money: {money}</h1>
        <Button color={colour} onClick={upgrade}>Click me!</Button>
        </div>);



  }


export default UI;