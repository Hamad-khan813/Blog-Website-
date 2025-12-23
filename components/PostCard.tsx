
import React from 'react';
import { Link } from 'react-router-dom';
import { Post } from '../types';

interface PostCardProps {
  post: Post;
  horizontal?: boolean;
}

const PostCard: React.FC<PostCardProps> = ({ post, horizontal = false }) => {
  if (horizontal) {
    return (
      <Link to={`/blog/${post.slug}`} className="group flex flex-col sm:flex-row gap-6 bg-white rounded-xl overflow-hidden hover:shadow-xl transition-shadow border border-slate-100 p-4">
        <div className="w-full sm:w-1/3 h-48 sm:h-auto overflow-hidden rounded-lg">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="w-full sm:w-2/3 flex flex-col justify-center">
          <span className="text-indigo-600 text-xs font-bold uppercase tracking-wider mb-2">{post.category}</span>
          <h3 className="text-xl font-bold mb-3 group-hover:text-indigo-600 transition-colors leading-tight">
            {post.title}
          </h3>
          <p className="text-slate-500 text-sm line-clamp-2 mb-4">
            {post.excerpt}
          </p>
          <div className="flex items-center text-xs text-slate-400 font-medium">
            <span>{new Date(post.createdAt).toLocaleDateString()}</span>
            <span className="mx-2">•</span>
            <span>5 min read</span>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link to={`/blog/${post.slug}`} className="group block bg-white rounded-xl overflow-hidden border border-slate-100 hover:shadow-xl transition-all h-full">
      <div className="relative h-56 overflow-hidden">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-indigo-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-lg">
            {post.category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-lg font-bold mb-3 group-hover:text-indigo-600 transition-colors line-clamp-2">
          {post.title}
        </h3>
        <p className="text-slate-500 text-sm mb-6 line-clamp-3">
          {post.excerpt}
        </p>
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-50">
          <span className="text-xs text-slate-400 font-medium">{new Date(post.createdAt).toLocaleDateString()}</span>
          <span className="text-xs font-bold text-indigo-600 group-hover:translate-x-1 transition-transform inline-flex items-center">
            Read More
            <svg className="ml-1 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
