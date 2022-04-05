import React, {useState, useEffect} from 'react';
import './UseEffectFetchData.css';

const url = 'https://jsonplaceholder.typicode.com/comments';

const UseEffectFetchData = () => {
const [comments, setComments] = useState([]);

const getComments = async () => {
    const responce = await fetch(url);
    const comments = await responce.json();
    setComments(comments);
    console.log(comments);
};

    useEffect(() => {
        getComments();
    }, []);

    const [visible, setVisibility] = useState(false);

    function changeVisibility(){
        setVisibility(!visible);
    }

    // let number = 1;
    // function update(){
    //     let select = document.getElementById('postOptions');
    //     let option = select.options[select.selectedIndex];
    //     let index = option.value;
    //     console.log(index)
    // }

    
    return(
        <div>
            <button type='button' onClick={changeVisibility}>{visible? 'Hide ALL comments' : 'Show ALL comments'}</button>
            <p style={{display: visible? 'contents' : 'none'}}>
                {comments.map(item => (
                <div className='borderConfig spacing'>
                    <p><b>Post ID: </b>{item.postId}</p>
                    <p><b>ID: </b>{item.id}</p>
                    <p>Name: {item.name}</p>
                    <p>Email: {item.email}</p>
                    <p>Body: {item.body}</p>
                </div>
            ))}</p>

            {/* <p style={{display: visible? 'contents' : 'none'}}>
                {comments.map(item => {
                    return(item.postId === 1) ?
                <div className='borderConfig spacing'>
                    <p><b>Post ID: </b>{item.postId}</p>
                    <p><b>ID: </b>{item.id}</p>
                    <p>Name: {item.name}</p>
                    <p>Email: {item.email}</p>
                    <p>Body: {item.body}</p>
                </div>
            :null })}</p> */}

            {/* <div>
                <select id='postOptions'  onChange={update}>
                    <option value={1}>Post ID - 1</option>
                    <option value={2}>Post ID - 2</option>
                </select>
            </div> */}
            
        </div>
    );

};//main

export default UseEffectFetchData;