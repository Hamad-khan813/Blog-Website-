
import React from 'react';
import { AffiliateProduct } from '../types';

interface AffiliateBoxProps {
  product: AffiliateProduct;
}

const AffiliateBox: React.FC<AffiliateBoxProps> = ({ product }) => {
  return (
    <div className="my-8 border-2 border-indigo-100 rounded-2xl p-6 bg-gradient-to-br from-white to-indigo-50 flex flex-col md:flex-row gap-6 items-center shadow-sm">
      <div className="w-32 h-32 flex-shrink-0 bg-white rounded-xl overflow-hidden border border-slate-100 shadow-inner p-2">
        <img src={product.image} alt={product.name} className="w-full h-full object-contain" />
      </div>
      <div className="flex-grow text-center md:text-left">
        <span className="inline-block px-2 py-0.5 bg-indigo-600 text-white text-[10px] font-bold rounded uppercase mb-2 tracking-wide">Highly Recommended</span>
        <h4 className="text-xl font-bold text-slate-900 mb-1">{product.name}</h4>
        <p className="text-slate-600 text-sm mb-4 leading-relaxed">{product.description}</p>
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <span className="text-2xl font-black text-slate-900">{product.price}</span>
          <a 
            href={product.link} 
            target="_blank" 
            rel="nofollow noopener noreferrer"
            className="w-full sm:w-auto px-6 py-2.5 bg-indigo-600 text-white font-bold rounded-full hover:bg-indigo-700 transition-colors text-sm shadow-md text-center"
          >
            Check Current Price
          </a>
        </div>
      </div>
    </div>
  );
};

export default AffiliateBox;
