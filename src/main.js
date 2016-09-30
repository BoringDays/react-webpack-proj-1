import './asserts/stylesheets/common.scss';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

// 请打开 http://localhost: (port)/webpack-dev-server才能看到，直接去localhost就……

class Main extends Component {
    render (){
        return (
            <h1>Webpack Demo1</h1>
        );
    }
}

ReactDOM.render(<Main />, document.querySelector('main'));
