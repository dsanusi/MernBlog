import React, {useState, useEffect} from 'react';
import Nav from "./components/nav/nav"
import axios from 'axios'
import {Link} from 'react-router-dom'

const App = () => {
  const [posts, setPosts] = useState([])

  const fetchPosts = () => {
      axios.get(`${process.env.REACT_APP_API}/posts`)
      .then(response => {
        //console.log(response)
        setPosts(response.data)
      })
      .catch(error =>  alert('Error fetching posts'))
  }
  
  useEffect(()=> {
    fetchPosts()
  }, [])
  
  const deleteConfirm = (slug) => {
    let answer = window.confirm('Are you sure you want to delete this post?')
    if(answer){
      deletePost(slug)
    }
  }

  const deletePost = (slug) => {
    //console.log('delete', slug, 'post')
    axios.delete(`${process.env.REACT_APP_API}/post/${slug}`)
    .then(response => {
      alert(response.data.message)
      fetchPosts()
    })
    .catch(error => alert('Error deleting post'))
    
  }

  return (
    <div>
      <Nav/>
      <br/>
      <h1>MERN BLOG</h1>
      <hr/>
      {
        posts.map((post, i) =>(
          <>
          <div className="card" style={{padding: '10px'}}>
            <div className="row" key={post._id} style={{padding: '10px'}}>
              <div>
                <Link to={`/post/${post.slug}`}>
                <div className="card-content">
                  <div>
                    <h2>{post.title}</h2>
                    <p className="lead">{post.content.substring(0,50)}</p>
                    <p>Author: {post.user} </p>
                    <p>Published on{' '}
                    {new Date(post.createdAt).toLocaleString()}
                    </p>
                  </div>
                </div>
                </Link>
              </div>
              <div style={{padding: '100px 0px 0px 500px'}}>
                    <Link to={`/post/update/${post.slug}`} className="btn btn-sm btn-outline-warning ml-1 btn-inline">
                      Update
                    </Link>
                    <button onClick= {() =>deleteConfirm(post.slug)}className="btn btn-sm btn-outline-danger ml-1 btn-inline">Delete</button>
              </div>
            </div>
          </div>
          <br/>
          </>
        
        ))}
    </div>
  )
}

export default App;
