
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Post, Category } from './types';
import { INITIAL_POSTS, INITIAL_CATEGORIES } from './constants';

// Pages
import Home from './pages/Home';
import BlogList from './pages/BlogList';
import PostDetail from './pages/PostDetail';
import AdminDashboard from './pages/AdminDashboard';
import About from './pages/About';
import Contact from './pages/Contact';
import Legal from './pages/Legal';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>(() => {
    const saved = localStorage.getItem('blog_posts');
    return saved ? JSON.parse(saved) : INITIAL_POSTS;
  });

  const [categories] = useState<Category[]>(INITIAL_CATEGORIES);

  useEffect(() => {
    localStorage.setItem('blog_posts', JSON.stringify(posts));
  }, [posts]);

  const addPost = (post: Post) => {
    setPosts(prev => [post, ...prev]);
  };

  const deletePost = (id: string) => {
    setPosts(prev => prev.filter(p => p.id !== id));
  };

  const updatePost = (updatedPost: Post) => {
    setPosts(prev => prev.map(p => p.id === updatedPost.id ? updatedPost : p));
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar categories={categories} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home posts={posts} categories={categories} />} />
            <Route path="/blog" element={<BlogList posts={posts} />} />
            <Route path="/blog/:slug" element={<PostDetail posts={posts} />} />
            <Route path="/category/:slug" element={<BlogList posts={posts} />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Legal type="privacy" />} />
            <Route path="/disclaimer" element={<Legal type="disclaimer" />} />
            <Route 
              path="/admin" 
              element={
                <AdminDashboard 
                  posts={posts} 
                  categories={categories} 
                  onAdd={addPost} 
                  onDelete={deletePost}
                  onUpdate={updatePost}
                />
              } 
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

// Helper to scroll to top on navigation
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default App;
