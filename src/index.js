import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {
    //BrowserRouter as Router,
    HashRouter as Router,
    Route
  } from 'react-router-dom' ;
import BaiduSearch from './modules/baidu-search/App';


const RouteList = () =>(
    <Router>
        <div>
            <Route exact path='/' component={Home}></Route>
            <Route path='/baiduSearch' component={BaiduSearch}></Route>
            
        </div>
    </Router>
) 
const Home = () =>(
    <h2>首页</h2>
) 
// const otherPage = () =>(
//     <h2>其他页面</h2>
// )
// const Demo = () =>(
//     <h2>1234</h2>
// )
ReactDOM.render(<RouteList />, document.getElementById('root'));
registerServiceWorker();
