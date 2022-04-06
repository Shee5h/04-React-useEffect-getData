import React, {useState, useEffect} from 'react';
import CommentCard from './CommentCard';
import './UseEffectFetchData.css';
import UserCard from './UserCard';

const UseEffectFetchData = () => {
const [stuff, setStuff] = useState([]);
let [type, setType] = useState('comments');

    useEffect(() => {

        const getData = async () => {
            const responce = await fetch(`https://jsonplaceholder.typicode.com${type}`);
            const stuff = await responce.json();
            setStuff(stuff);
            console.log(stuff);
        };
        getData();

    }, [type]);

    useEffect(() => {
        console.log(type);
    }, [type])

    // renderSwitch({type}){
    //     switch({type}){
    //         case '/users':
    //         return <p>{stuff.map(user => <UserCard key={user.id} name={user.name} username={user.username} email={user.email}/>)}</p>;
    //     }
    // }
    
    return(
        <div>
            <h3>{type}</h3>
            <button type='button' onClick={() => {setType('/posts')}}>Posts</button>
            <button type='button' onClick={() => {setType('/comments')}}>Comments</button>
            <button type='button' onClick={() => {setType('/albums')}}>Albums</button>
            <button type='button' onClick={() => {setType('/photos')}}>Photos</button>
            <button type='button' onClick={() => {setType('/todos')}}>ToDo's</button>
            <button type='button' onClick={() => {setType('/users')}}>Users</button>

            <p>{stuff.map(item => (JSON.stringify(item)))}</p>
            
        </div>
    );

};//main

export default UseEffectFetchData;