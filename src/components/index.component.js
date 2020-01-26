import React,{useState,useEffect} from 'react'
import axios from 'axios'

function Index() {
    const [post,setPost]=useState({});
    const [id,setId]=useState(1);
    const [buttonWithId,setButtonWithId]=useState(1);

    const handlePostId=()=>{
        setButtonWithId(id);
    }

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${buttonWithId}`)
        .then(res=>{
            console.log(res);
            setPost(res.data);
        })
        .catch(err=>{
            console.log(err);
        })
    }, [buttonWithId])
    return (
        <div>
            <input type="text" value={id} onChange={e=>setId(e.target.value)}></input>
            <button type="button" onClick={handlePostId}>Request To Post</button>
            <div>{post.title}</div>
        </div>
    )
};

export default Index
