import React from 'react';
import {Provider} from 'react-redux'
import {BrowserRouter as  Router, Route, Switch } from 'react-router-dom';
import Trending from './Trending';
import Home from './Home';
import Navbar from './Navbar';
import Default from './Default';
import Search from './Search';
import {store} from './store';

class App extends React.Component{
    
    render(){
        return( 
                <Provider store={store}>
                <Router >
                <Navbar handleClick={this.handleClick}/>
                <Switch>
                <Route exact path="/"  component={Home}/>
                <Route exact path="/trending" component={Trending}/>

                <Route exact path="/search" component={Search}/>
                <Route component={Default}/>
                </Switch>
                </Router>
                </Provider>
        )
    }
}

export default App