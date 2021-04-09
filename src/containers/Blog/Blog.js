import React, { Component } from 'react';
import { Route, NavLink } from "react-router-dom";
import './Blog.css';
import Posts from "./Posts/Posts";
import NewPost from './NewPost/NewPost';
import FullPost from "./FullPost/FullPost";

class Blog extends Component {

    render () {

        return (
          <div>
            <header>
              <nav>
                <ul>
                  <li>
                    <NavLink to="/" exact activeClassName="active">Home</NavLink>
                  </li>
                  <li>
                    <NavLink 
                    to={{
                        pathname:"/new-post",
                        hash:"#submit",
                        search:"?quick-submit=true"
                    }}
                    >New Post</NavLink>
                  </li>
                </ul>
              </nav>
            </header>
            <Route to="/" exact   component={Posts} />
            <Route to="/new-post" component={NewPost} />
            <Route to="/:id" exact   component={FullPost} />
          </div>
        );
    }
}

export default Blog;