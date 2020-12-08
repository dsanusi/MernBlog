import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import App from './App'
import Create from "./components/Create/Create"
const Routes = () => {
    return(
        <Router>
            <Switch>
                <Route path="/" exact component={App}/>
                <Route path="/create" exact component={Create}/>
            </Switch>
        </Router>
    )
}

export default Routes