
import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Post } from '../types';
import PostCard from '../components/PostCard';
import AdPlaceholder from '../components/AdPlaceholder';

interface BlogListProps {
  posts: Post[];
}

const BlogList: React.FC<BlogListProps> = ({ posts }) => {
  const { slug } = useParams<{ slug?: string }>();

  const filteredPosts = useMemo(() => {
    if (!slug) return posts;
    return posts.filter(p => p.category.toLowerCase() === slug.toLowerCase() || p.category.toLowerCase().replace(' ', '-') === slug.toLowerCase());
  }, [posts, slug]);

  const categoryName = slug ? slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ') : 'All Posts';

  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-12 text-center">
          <span className="text-indigo-600 text-xs font-bold uppercase tracking-[0.2em] mb-4 inline-block">The Archive</span>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">{categoryName}</h1>
          <p className="max-w-2xl mx-auto text-slate-500 text-lg">
            Browsing our collection of {filteredPosts.length} professional articles on growth, finance, and marketing.
          </p>
          <div className="w-24 h-1 bg-indigo-600 mx-auto mt-8 rounded-full"></div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-9">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredPosts.map(post => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
            {filteredPosts.length === 0 && (
              <div className="text-center py-20 bg-slate-50 rounded-3xl border-2 border-dashed border-slate-200">
                <p className="text-slate-400 font-medium">No posts found in this category yet.</p>
                <Link to="/blog" className="text-indigo-600 font-bold mt-4 inline-block">View All Posts</Link>
              </div>
            )}
          </div>
          
          <aside className="lg:col-span-3 space-y-8">
            <AdPlaceholder format="rectangle" />
            <div className="bg-slate-50 p-6 rounded-2xl">
              <h3 className="font-black text-slate-900 mb-4">Search Articles</h3>
              <input 
                type="text" 
                placeholder="Type keywords..." 
                className="w-full px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-indigo-500"
              />
            </div>
            <div className="p-6 bg-indigo-600 text-white rounded-2xl text-center">
              <h3 className="font-bold mb-2">Want to monetize?</h3>
              <p className="text-xs text-indigo-100 mb-4">Download our free checklist for AdSense approval in 30 days.</p>
              <button className="w-full py-2 bg-white text-indigo-600 font-bold rounded-lg text-xs">Get Checklist</button>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default BlogList;
