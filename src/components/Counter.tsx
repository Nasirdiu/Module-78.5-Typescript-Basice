import React, { FormEvent, useState } from 'react';

interface User{
    name:string,
    job:string
}
const Counter = () => {
    const [counter,setCount]=useState(0)
    const [user,setUser]=useState <User |null>(null);
    const handleIncrease=():void=>{
        setCount(counter+1)
    }
    const handleDecrease=():void=>{
        setCount(counter-1)
    }
    const handleUserSubmit=(e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        const userData={
            name:'Nasir',
            job:'Dev'
        }
        setUser(userData);
    }

    return (
        <div>
            <h1>This is Counter</h1>
            <h2>{counter}</h2>
            <button onClick={handleIncrease}>Increase</button>
            <button onClick={handleDecrease}>Decrease</button>
        </div>
    );
};

export default Counter;