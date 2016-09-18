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

document.body.innerHTML = '<main></main>'; // fixme 模板不能使用么？如果直接把东西注入到body会有警告
ReactDOM.render(<Main />, document.querySelector('main'));
