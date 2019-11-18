import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// 引入项目重置文件
import './assets/style/reset.scss'

// 配置rem
import './utils/rem'

/* 
  * 1. React路由模式有两种： HashRouter[ #/home 传统浏览器模式 hashchange ]  BrowserRouter[ /home  h5 history模式 ]
    * BrowserRouter需要后端支持
    * as的作用是给一个模块起一个别名
*/
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(
  <Router>
    <App />
  </Router>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
