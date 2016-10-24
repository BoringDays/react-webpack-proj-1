import './../asserts/stylesheets/common.scss';
import {Link, IndexLink} from 'react-router';
import React, {Component} from 'react';

class App extends Component {
    constructor (props){
        super(props);
    }
    render (){
        return (
            <div>
                <h1>React App</h1>
                <Link to="/product" activeStyle={{color: '#333'}}>product list</Link>
            </div>
        );
    }
}

export default App;
