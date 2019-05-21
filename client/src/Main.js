import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Nav from './containers/nav.js'

import { Switch, Route } from 'react-router-dom'
import axios from 'axios';

import PostRender from './containers/post_render.js'
import CreatePost from './containers/create_post.js'
import Container from './containers/container.js'
import UpdatePost from './containers/update_post.js'

class Main extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      subj: 1,
      posts_data: []
    };
  }

  changeSubj = (e) => {
    this.setState((state, props) => ({
          subj: e
      }));
  }

  componentDidMount() {
    axios.get('/note/')
        .then(res => {
          this.setState({ posts_data: res.data });
        })
        .catch(err => {
          console.log(err);
        })
  }

  render () {
    return (
      <div>
        <Nav
          changeSubj={this.changeSubj}
          subj={this.state.subj}
        />
        <div className='container mt-3'>
          <Switch>
            <Route 
              exact path='/' 
              render = {(props) => (
                  <Container {...props}
                    posts_data={this.state.posts_data}
                    changeSubj={this.changeSubj}
                    subj={this.state.subj}
                  />
                )}
            />
            <Route
              path='/note/:subj?/:post_id?'
              render = {(props) => (
                  <PostRender {...props} posts_data={this.state.posts_data}/>
                )}
            />
            <Route
              exact path='/create_post'
              render = {(props) => (
                  <CreatePost {...props}/>
                )}
            />
            <Route
              path='/update_post/:post_id'
              render = {(props) => (
                  <UpdatePost {...props}/>
                )}
            />
          </Switch>
        </div>
      </div>
    )
  }
}

export default Main;