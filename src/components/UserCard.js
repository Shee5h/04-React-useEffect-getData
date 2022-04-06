import React from "react";
import './UserCard.css'

export default function UserCard(props){

    let {name, username, email} = props;

    return (
        <div>
            <p>Name: {name}</p>
            <p>Username: {username}</p>
            <p>Email: {email}</p>
        </div>
    )

}