import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import App from './App'
import Create from "./components/Create/Create"
import SinglePost from "./components/SinglePost/SinglePost"
import UpdatePost from "./components/UpdatePost/UpdatePost"
const Routes = () => {
    return(
        <Router>
            <Switch>
                <Route path="/" exact component={App}/>
                <Route path="/create" exact component={Create}/>
                <Route path="/post/:slug" exact component={SinglePost}/>
                <Route path="/post/update/:slug" exact component= {UpdatePost}/>
            </Switch>
        </Router>
    )
}

export default Routes