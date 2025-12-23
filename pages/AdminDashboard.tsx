
import React, { useState } from 'react';
import { Post, Category } from '../types';

interface AdminDashboardProps {
  posts: Post[];
  categories: Category[];
  onAdd: (post: Post) => void;
  onDelete: (id: string) => void;
  onUpdate: (post: Post) => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ posts, categories, onAdd, onDelete, onUpdate }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [password, setPassword] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [currentPost, setCurrentPost] = useState<Partial<Post>>({});

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'admin') {
      setIsLoggedIn(true);
    } else {
      alert('Incorrect password. Use "admin" to log in.');
    }
  };

  const resetForm = () => {
    setCurrentPost({});
    setIsEditing(false);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    const slug = currentPost.title?.toLowerCase().replace(/[^\w ]+/g, '').replace(/ +/g, '-');
    
    if (isEditing && currentPost.id) {
      onUpdate({
        ...currentPost as Post,
        slug: slug || '',
        createdAt: currentPost.createdAt || new Date().toISOString()
      });
    } else {
      onAdd({
        ...currentPost as Post,
        id: Math.random().toString(36).substr(2, 9),
        slug: slug || '',
        createdAt: new Date().toISOString()
      });
    }
    resetForm();
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center bg-slate-50 p-4">
        <div className="max-w-md w-full bg-white p-10 rounded-3xl shadow-xl">
          <h2 className="text-3xl font-black text-center mb-2">Admin Login</h2>
          <p className="text-slate-400 text-center text-sm mb-8">Access the content management system.</p>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Access Password</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Hint: admin" 
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
              />
            </div>
            <button className="w-full py-4 bg-indigo-600 text-white font-black rounded-xl hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-100">
              Sign In
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
        <div>
          <h1 className="text-3xl font-black text-slate-900">Dashboard</h1>
          <p className="text-slate-500">Manage your blog posts, SEO, and categories.</p>
        </div>
        <button 
          onClick={() => { resetForm(); setIsEditing(true); }}
          className="px-6 py-3 bg-indigo-600 text-white font-bold rounded-xl shadow-lg hover:bg-indigo-700 transition-colors flex items-center"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
          </svg>
          Create New Post
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Post List */}
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-xl font-bold mb-4">All Posts ({posts.length})</h2>
          {posts.map(post => (
            <div key={post.id} className="bg-white border border-slate-200 p-6 rounded-2xl flex items-center gap-6 shadow-sm hover:shadow-md transition-shadow">
              <img src={post.image} alt={post.title} className="w-20 h-20 object-cover rounded-xl" />
              <div className="flex-grow">
                <h3 className="font-bold text-slate-900 leading-tight mb-1">{post.title}</h3>
                <div className="flex items-center gap-3 text-xs text-slate-400">
                  <span className="font-bold text-indigo-600">{post.category}</span>
                  <span>•</span>
                  <span>{new Date(post.createdAt).toLocaleDateString()}</span>
                </div>
              </div>
              <div className="flex gap-2">
                <button 
                  onClick={() => { setCurrentPost(post); setIsEditing(true); }}
                  className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-slate-50 rounded-lg transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                </button>
                <button 
                  onClick={() => { if(window.confirm('Delete this post?')) onDelete(post.id); }}
                  className="p-2 text-slate-400 hover:text-red-600 hover:bg-slate-50 rounded-lg transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Sidebar Stats */}
        <div className="space-y-8">
          <div className="bg-slate-900 text-white p-8 rounded-3xl">
            <h3 className="text-xl font-bold mb-6">Quick Stats</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-slate-800 rounded-2xl">
                <p className="text-xs text-slate-400 uppercase mb-1">Total Posts</p>
                <p className="text-2xl font-black">{posts.length}</p>
              </div>
              <div className="p-4 bg-slate-800 rounded-2xl">
                <p className="text-xs text-slate-400 uppercase mb-1">Categories</p>
                <p className="text-2xl font-black">{categories.length}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white border border-slate-200 p-8 rounded-3xl">
            <h3 className="text-xl font-bold mb-4">Admin Help</h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              To optimize for SEO, ensure your <strong>Meta Title</strong> includes your target keyword and is under 60 characters.
            </p>
          </div>
        </div>
      </div>

      {/* Post Editor Modal Overlay */}
      {isEditing && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
          <div className="bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl p-8 md:p-12 relative">
            <button 
              onClick={resetForm}
              className="absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-900"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <h2 className="text-3xl font-black mb-8">{currentPost.id ? 'Edit Post' : 'New Post'}</h2>
            
            <form onSubmit={handleSave} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Post Title</label>
                    <input 
                      type="text" 
                      required
                      value={currentPost.title || ''}
                      onChange={(e) => setCurrentPost({...currentPost, title: e.target.value})}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Category</label>
                    <select 
                      required
                      value={currentPost.category || ''}
                      onChange={(e) => setCurrentPost({...currentPost, category: e.target.value})}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                      <option value="">Select Category</option>
                      {categories.map(c => <option key={c.id} value={c.name}>{c.name}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Featured Image URL</label>
                    <input 
                      type="text" 
                      required
                      value={currentPost.image || ''}
                      onChange={(e) => setCurrentPost({...currentPost, image: e.target.value})}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="https://images.unsplash.com/..."
                    />
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Meta Title (SEO)</label>
                    <input 
                      type="text" 
                      required
                      value={currentPost.metaTitle || ''}
                      onChange={(e) => setCurrentPost({...currentPost, metaTitle: e.target.value})}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Meta Description (SEO)</label>
                    <textarea 
                      required
                      rows={3}
                      value={currentPost.metaDescription || ''}
                      onChange={(e) => setCurrentPost({...currentPost, metaDescription: e.target.value})}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
                    ></textarea>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Excerpt (Summary)</label>
                <textarea 
                  required
                  rows={2}
                  value={currentPost.excerpt || ''}
                  onChange={(e) => setCurrentPost({...currentPost, excerpt: e.target.value})}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
                ></textarea>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Content (HTML Supported)</label>
                <textarea 
                  required
                  rows={8}
                  value={currentPost.content || ''}
                  onChange={(e) => setCurrentPost({...currentPost, content: e.target.value})}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 font-mono text-sm"
                  placeholder="<p>Write your amazing blog content here...</p>"
                ></textarea>
              </div>

              <div className="flex justify-end gap-4 pt-4">
                <button 
                  type="button" 
                  onClick={resetForm}
                  className="px-8 py-3 bg-slate-100 text-slate-600 font-bold rounded-xl hover:bg-slate-200 transition-colors"
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  className="px-8 py-3 bg-indigo-600 text-white font-black rounded-xl hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-100"
                >
                  {currentPost.id ? 'Update Post' : 'Publish Post'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
