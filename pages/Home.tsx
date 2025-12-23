
import React from 'react';
import { Post, Category } from '../types';
import PostCard from '../components/PostCard';
import AdPlaceholder from '../components/AdPlaceholder';
import { Link } from 'react-router-dom';

interface HomeProps {
  posts: Post[];
  categories: Category[];
}

const Home: React.FC<HomeProps> = ({ posts, categories }) => {
  const featuredPost = posts.find(p => p.isFeatured) || posts[0];
  const latestPosts = posts.filter(p => p.id !== featuredPost?.id).slice(0, 6);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Hero Featured Section */}
      <section className="mb-16">
        <div className="relative rounded-3xl overflow-hidden bg-slate-900 text-white">
          <div className="flex flex-col md:flex-row items-stretch">
            <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center">
              <span className="text-indigo-400 text-xs font-bold uppercase tracking-[0.2em] mb-4">Featured Post</span>
              <h1 className="text-3xl md:text-5xl font-black mb-6 leading-[1.1]">
                {featuredPost?.title}
              </h1>
              <p className="text-slate-300 text-lg mb-8 line-clamp-3 leading-relaxed">
                {featuredPost?.excerpt}
              </p>
              <div>
                <Link to={`/blog/${featuredPost?.slug}`} className="inline-flex items-center px-8 py-4 bg-white text-slate-900 font-black rounded-full hover:bg-indigo-400 transition-colors group">
                  Start Reading
                  <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="w-full md:w-1/2 min-h-[300px] relative">
              <img 
                src={featuredPost?.image} 
                alt={featuredPost?.title} 
                className="absolute inset-0 w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-transparent to-transparent md:block hidden"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="mb-16">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-2xl font-black text-slate-900 mb-2">Popular Categories</h2>
            <div className="w-12 h-1 bg-indigo-600 rounded"></div>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map(cat => (
            <Link 
              key={cat.id} 
              to={`/category/${cat.slug}`}
              className="group p-6 bg-white border border-slate-200 rounded-2xl hover:border-indigo-600 hover:shadow-lg transition-all text-center"
            >
              <h3 className="font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">{cat.name}</h3>
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Explore Topic</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Main Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <section className="lg:col-span-8">
          <div className="flex justify-between items-end mb-8">
            <h2 className="text-2xl font-black text-slate-900">Latest from the Blog</h2>
            <Link to="/blog" className="text-sm font-bold text-indigo-600 hover:underline">View All Posts</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {latestPosts.map(post => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
          
          <div className="mt-12">
            <AdPlaceholder format="leaderboard" />
          </div>
        </section>

        {/* Sidebar */}
        <aside className="lg:col-span-4 space-y-12">
          {/* Newsletter Box */}
          <div className="bg-slate-900 text-white rounded-3xl p-8 relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-2xl font-black mb-4">Join 50k+ Readers</h3>
              <p className="text-slate-400 text-sm mb-6">Get the latest money-making strategies and case studies delivered to your inbox.</p>
              <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="Your best email address..." 
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                  required
                />
                <button className="w-full py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-black rounded-xl text-sm transition-colors shadow-lg">
                  Subscribe Now
                </button>
                <p className="text-[10px] text-slate-500 text-center italic mt-4">We respect your privacy. No spam, ever.</p>
              </form>
            </div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-indigo-600 rounded-full blur-[80px] opacity-20"></div>
          </div>

          <AdPlaceholder format="rectangle" />

          {/* Trending Box */}
          <div className="bg-white border border-slate-200 rounded-3xl p-8">
            <h3 className="text-xl font-black mb-6 border-b border-slate-100 pb-4">Most Popular</h3>
            <div className="space-y-6">
              {posts.slice(0, 4).map((post, idx) => (
                <Link key={post.id} to={`/blog/${post.slug}`} className="group flex gap-4">
                  <span className="text-4xl font-black text-slate-100 group-hover:text-indigo-100 transition-colors">0{idx + 1}</span>
                  <div>
                    <h4 className="font-bold text-slate-900 group-hover:text-indigo-600 transition-colors leading-snug line-clamp-2">
                      {post.title}
                    </h4>
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">{post.category}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Home;
