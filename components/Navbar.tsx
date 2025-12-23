
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Category } from '../types';

interface NavbarProps {
  categories: Category[];
}

const Navbar: React.FC<NavbarProps> = ({ categories }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-black text-indigo-600 tracking-tighter">
              PROFIT<span className="text-slate-900">BLOG</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-slate-600 hover:text-indigo-600 font-medium text-sm transition-colors">Home</Link>
            <Link to="/blog" className="text-slate-600 hover:text-indigo-600 font-medium text-sm transition-colors">Latest Posts</Link>
            <div className="relative group">
              <button className="text-slate-600 hover:text-indigo-600 font-medium text-sm inline-flex items-center transition-colors">
                Categories
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white border border-slate-200 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {categories.map(cat => (
                  <Link 
                    key={cat.id} 
                    to={`/category/${cat.slug}`} 
                    className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-indigo-600"
                  >
                    {cat.name}
                  </Link>
                ))}
              </div>
            </div>
            <Link to="/admin" className="px-4 py-2 rounded-full bg-slate-900 text-white text-xs font-bold hover:bg-indigo-600 transition-colors">
              Admin
            </Link>
          </div>

          <div className="flex md:hidden items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-indigo-600"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 px-4 pt-2 pb-6 space-y-1">
          <Link to="/" className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-indigo-600" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/blog" className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-indigo-600" onClick={() => setIsOpen(false)}>Blog</Link>
          <div className="py-2 pl-3">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Categories</p>
            {categories.map(cat => (
              <Link 
                key={cat.id} 
                to={`/category/${cat.slug}`} 
                className="block py-1 text-sm text-slate-600 hover:text-indigo-600"
                onClick={() => setIsOpen(false)}
              >
                {cat.name}
              </Link>
            ))}
          </div>
          <Link to="/admin" className="block px-3 py-2 text-base font-medium text-indigo-600" onClick={() => setIsOpen(false)}>Admin Portal</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
