import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import App from './App'
import Create from "./components/Create/Create"
import SinglePost from "./components/SinglePost/SinglePost"
import UpdatePost from "./components/UpdatePost/UpdatePost"
import Login from "./components/Login/Login"
import PrivateRoute from "./components/PrivateRoute/PrivateRoute"
const Routes = () => {
    return(
        <Router>
            <Switch>
                <Route path="/" exact component={App}/>
                <PrivateRoute path="/create" exact component={Create}/>
                <Route path="/login" exact component={Login}/>
                <Route path="/post/:slug" exact component={SinglePost}/>
                <PrivateRoute path="/post/update/:slug" exact component= {UpdatePost}/>
            </Switch>
        </Router>
    )
}

export default Routes