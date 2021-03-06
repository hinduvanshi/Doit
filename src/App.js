import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import Post from './components/Post'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
            <Route exact path="/" component={Home} />
            <Route path="/posts/:post_id" component={Post} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
