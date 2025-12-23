
import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Post } from '../types';
import AdPlaceholder from '../components/AdPlaceholder';
import AffiliateBox from '../components/AffiliateBox';

interface PostDetailProps {
  posts: Post[];
}

const PostDetail: React.FC<PostDetailProps> = ({ posts }) => {
  const { slug } = useParams<{ slug: string }>();
  const post = posts.find(p => p.slug === slug);

  useEffect(() => {
    if (post) {
      document.title = `${post.metaTitle} | ProfitBlog`;
      // In a real app, you'd set meta tags here using React Helmet or similar
    }
  }, [post]);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const relatedPosts = posts.filter(p => p.id !== post.id).slice(0, 3);

  return (
    <article className="bg-white">
      {/* Article Hero */}
      <header className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-10">
            <Link to={`/category/${post.category.toLowerCase().replace(' ', '-')}`} className="text-indigo-600 text-xs font-black uppercase tracking-widest mb-4 inline-block hover:underline">
              {post.category}
            </Link>
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight mb-8">
              {post.title}
            </h1>
            <div className="flex items-center justify-center space-x-4 text-sm text-slate-500 font-medium">
              <img src={`https://i.pravatar.cc/150?u=${post.id}`} alt="Author" className="w-10 h-10 rounded-full border-2 border-white shadow-sm" />
              <div className="text-left">
                <p className="text-slate-900 font-bold">Editorial Staff</p>
                <p className="text-xs">Published on {new Date(post.createdAt).toLocaleDateString()}</p>
              </div>
              <span className="hidden sm:inline px-3 py-1 bg-slate-200 rounded-full text-[10px] uppercase font-bold text-slate-600">6 min read</span>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16 grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Social Sidebar - Desktop */}
        <aside className="hidden lg:block lg:col-span-1 sticky top-24 h-fit">
          <div className="flex flex-col space-y-4 items-center">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest vertical-text transform rotate-180">Share</span>
            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-50 text-slate-400 hover:text-blue-600 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-50 text-slate-400 hover:text-blue-800 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="lg:col-span-8">
          <div className="relative rounded-3xl overflow-hidden mb-12 shadow-2xl">
            <img src={post.image} alt={post.title} className="w-full h-auto" />
          </div>

          <AdPlaceholder format="leaderboard" className="mb-12" />

          {/* Article Text */}
          <div 
            className="serif prose prose-lg prose-indigo max-w-none text-slate-800 leading-relaxed space-y-6"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <AffiliateBox 
            product={{
              name: "WealthGrow Tracker Pro",
              description: "The ultimate tool for tracking your passive income streams and dividend performance in real-time.",
              price: "$49.99",
              link: "https://example.com/affiliate",
              image: "https://picsum.photos/seed/tool/200/200"
            }}
          />

          <div className="mt-12 py-10 border-t border-slate-100">
            <h3 className="text-2xl font-black mb-8">You Might Also Like</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedPosts.map(rp => (
                <Link key={rp.id} to={`/blog/${rp.slug}`} className="group block">
                  <div className="relative h-40 rounded-2xl overflow-hidden mb-4">
                    <img src={rp.image} alt={rp.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <h4 className="font-bold text-slate-900 group-hover:text-indigo-600 transition-colors leading-snug">
                    {rp.title}
                  </h4>
                </Link>
              ))}
            </div>
          </div>
        </main>

        {/* Post Sidebar */}
        <aside className="lg:col-span-3 space-y-10">
          <div className="p-6 bg-slate-50 rounded-3xl">
            <h3 className="font-black text-slate-900 mb-4">Post Information</h3>
            <div className="space-y-4 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-400">Category:</span>
                <span className="font-bold text-slate-900">{post.category}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Reading Time:</span>
                <span className="font-bold text-slate-900">~6 mins</span>
              </div>
            </div>
          </div>

          <AdPlaceholder format="rectangle" />

          <div className="p-8 bg-indigo-600 rounded-3xl text-white shadow-xl shadow-indigo-100">
            <h3 className="text-xl font-black mb-4">Free Passive Income Guide</h3>
            <p className="text-indigo-100 text-sm mb-6">Join thousands of others getting our weekly insider tips on making money online.</p>
            <button className="w-full py-3 bg-white text-indigo-600 font-black rounded-xl text-sm hover:bg-slate-50 transition-colors">
              Download PDF Now
            </button>
          </div>
        </aside>
      </div>
    </article>
  );
};

export default PostDetail;
