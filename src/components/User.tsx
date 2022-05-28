import React, { FC } from 'react';
import UserModel from '../types/model';


// interface Props{
// name:string,
// age:number
// addUser:()=>void
// }
interface Props{
user:UserModel,
addUser:(user:UserModel)=>void
}

const User :FC<Props> = ({user,addUser}) => {
    return (
        <div>
            <h1>Hello :{user.name} My email{user.email}</h1>
            <button onClick={()=>addUser(user)}>add me</button>
        </div>
    );
};

export default User;