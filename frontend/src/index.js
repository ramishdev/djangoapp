import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './component/Home';
import User from './component/User';
import Item from './component/Item';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom';
const routing = (
    <Router>
           <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/items">Items</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
            </ul>
           <Routes>
                 <Route exact path='/' element={< App />}></Route>
                 <Route exact path='/items' element={< Item />}></Route>
                 <Route exact path='/users' element={< User />}></Route>
          </Routes>
          </div>
    </Router>
)
ReactDOM.render(
  routing,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
