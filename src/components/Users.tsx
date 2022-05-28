import React, { useEffect, useState } from 'react';
import UserModel from '../types/model';
import User from './User';

const Users = () => {
    const [users,setUser]=useState <UserModel[]>([]);
    const [team,setTream]=useState<UserModel[]>([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data=>setUser(data))
    },[])
    const handleAdd=(user:UserModel):void=>{
        const newTream=[...team,user]
        setTream(newTream);
    }
    return (
        <div>
            <h1>User</h1>
            <h1>Team Size:{team.length}</h1>
            {/* <User name='Nasir' age={27} addUser={handleAdd}></User> */}
            {
                users.map(user=><User user={user} addUser={handleAdd}></User>)
            }
        </div>
    );
};

export default Users;