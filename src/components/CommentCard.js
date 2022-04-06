import React from "react";
import './CommentCard.css';

export default function CommentCard(props) {

const {postId, name, email, body} = props;

return (
        <div className='borderConfig spacing'>
            <p><b>Post ID: </b>{postId}</p>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>Body: {body}</p>
        </div>
)

}