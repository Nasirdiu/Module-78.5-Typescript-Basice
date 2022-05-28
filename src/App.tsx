import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import Users from './components/Users';

let student:string='john';
let age:number=27;
let issmart:boolean=true;

let students:string[]=['Nasir','arif','pallob'];
let fees:number[]=[12,50,100,];

interface person{
  name:string,
  empolyed:string |boolean,
  job?:string,
  age:number,
  location:string|number,
  // location:any,use korele shob golen niba.
}
const person:person={
  name:'Nasir',
  age:27,
  empolyed:true,
  location:'Dhaka',
}



function App() {


  return (
    <div className="App">
     <Counter></Counter>
     <Users></Users>
    </div>
  );
}

export default App;
