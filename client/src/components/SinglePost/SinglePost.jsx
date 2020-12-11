import React, { useEffect,useState } from 'react'
import axios from 'axios'
import Nav from '../nav/nav'
import  renderHTML from 'react-render-html'
const SinglePost = (props) => {
    const [post,setPost] = useState('')

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API}/post/${props.match.params.slug}`)
        .then(response =>setPost(response.data))
        .catch(error => alert('Error Loading Single Post'))

    },[])

    return(
        <div>
            <Nav/>
            <br/>
            <h1>{post.title}</h1>
            <div className="lead">{renderHTML(post && post.content)}</div>
            <p>Author: {post.user} Published on{' '}
            {new Date(post.createdAt).toLocaleString()}
            </p>
            <br/>
        </div>
    )
}

export default SinglePost
