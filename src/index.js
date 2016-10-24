import './asserts/stylesheets/common.scss';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, hashHistory, IndexRoute} from 'react-router';
import App from './components/app';
import Home from './components/home';
import ProductList from './components/product_list';
import ProductDetails from './components/product_details';

// 请打开 http://localhost: (port)/webpack-dev-server才能看到，直接去localhost就……
// 默认是hashHistory，旧版叫createHashHistory；以后API可能有变化
const routes = (
    <Route path='/' component={App}>
        <IndexRoute component={Home}/>
        <Route path='/product' component={ProductList}>
            <Route path='/:id' component={ProductDetails}/>
        </Route>
    </Route>
);

ReactDOM.render((
    <Router routes={routes} history={hashHistory}/>
), document.getElementById('app'));
