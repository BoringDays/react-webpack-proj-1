import './asserts/stylesheets/common.scss';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Main extends Component {
    render (){
        return (
            <h1>Webpack Demo1</h1>
        );
    }
}

ReactDOM.render(<Main />, document.querySelector('main'));
