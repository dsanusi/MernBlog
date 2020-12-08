import React, { useEffect,useState } from 'react'
import axios from 'axios'
import Nav from '../nav/nav'

const UpdatePost = (props) => {
    const [state, setState] = useState({
        title:'',
        content:'',
        slug:'',
        user:''
    })

    const {title,content,slug,user} = state

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API}/post/${props.match.params.slug}`)
        
        .then(response =>{
            const {title, content, slug, user} = response.data
            setState({...state,title,content,slug,user})
        })
        .catch(error => alert('Error Loading Single Post'))

    },[])

    const handleChange = (name) => (event) =>{
        console.log("name", name,"event", event.target.value)
        setState({...state,[name]:event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        //console.table({title,content,user})
        axios.put(`${process.env.REACT_APP_API}/post/${slug}`, {title,content,user})
        .then(response =>{
            console.log(response)
            const {title, content, slug, user}= response.data
            //empty state
            setState({...state, title, content, slug, user})
            // show success alert
            alert(`Post titled ${response.data.title} is Updated`)

        })
        .catch(error => {
            console.log(error.response)
            alert(error.response.data.error)
        })
    }

    const showUpdateForm = () =>(
    <form style={{padding: '100px'}} onSubmit={handleSubmit}>
        <div className="form-group row">
            <label className="text-muted">Title</label>
            <input onChange={handleChange('title')} value={title} type="text" className="form-control" placeholder="Post title" required/>
        </div>
        <div className="form-group row">
            <label className="text-muted">Content</label>
            <textarea onChange={handleChange('content')} value={content} type="text" className="form-control" placeholder="Write Something..." rows="50" required/>
        </div>
        <div className="form-group row">
            <label className="text-muted">User</label>
            <input onChange={handleChange('user')} value={user} type="text" className="form-control" placeholder="Your name" required/>
        </div>
        <div>
            <button className="btn btn-primary">Update</button>
        </div>
    </form>
    )
    return(
        <div>
            <Nav/>
            <br/>
            <h1>UPDATE POST</h1>
            {showUpdateForm()}
            <br/>
        </div>
    )
}

export default UpdatePost