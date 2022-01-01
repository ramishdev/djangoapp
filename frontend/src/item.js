import React from 'react';

import axios from 'axios';

export default class PostList extends React.Component {
 state = {
  posts: []
 }

 componentDidMount() {
  axios.get('http://localhost:8000/api')
 .then(res => {
    const posts = res.data;
    this.setState({ posts });
   })
 }


render() {
  return (
   <ul>
    { this.state.posts.map(post => <li>{post.title}</li>)}
   </ul>
  )
 }
}