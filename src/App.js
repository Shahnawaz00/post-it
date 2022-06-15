import './App.css';
import React from 'react';
import Header from './features/header/Header';
import PostsList from './features/posts/PostsList'
import AddPost from './features/addPage/AddPost';

function App() {
  return (
    <div className="App">
      <Header/>
      <AddPost/>
      <PostsList/>
    </div>
  );
}

export default App;
