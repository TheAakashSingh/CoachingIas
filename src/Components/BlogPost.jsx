import React from 'react';
import { useParams } from 'react-router-dom';
import TNav from './TNav';
import blogPostsData from './blogPostsData.json';
import './BlogPost.css'
import Footer from './Footer';
const BlogPost = () => {
  const { postId } = useParams();
  const blogPost = blogPostsData.find(post => post.id === postId);

  if (!blogPost) {
    return <div>Blog post not found.</div>;
  }

  const { title } = blogPost;

  return (
    <div>
      <TNav />
      <div className="postdata">
        <h2>{blogPost.title}</h2>
        <span>{blogPost.date}</span>
        <hr />
        <p>{blogPost.content}</p>
      </div>
      <Footer />
    </div>
  );
};

export default BlogPost;
