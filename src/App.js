import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Posts from './components/Posts';
// import Pagination from './components/Pagination';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(5);
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(res.data);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  //Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  //Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div className="container">
      <h1 className="text-center text-primary mb-3">React Pagination!</h1>

      <Posts posts={currentPosts} loading={loading} />
      {/* <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      /> */}
      {/* <Pagination
        count={Math.ceil(posts.length / postsPerPage)}
        onClick={(e) => {
          setCurrentPage(e.target.textContent);
          console.log(e.target);
        }}
        shape="rounded"
      /> */}
      <Pagination
        count={Math.ceil(posts.length / postsPerPage)}
        onClick={(e) => {
          setCurrentPage(e.target.textContent);
          console.log(e);
        }}
        variant="outlined"
        color="primary"
      />
    </div>
  );
}
