
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="max-w-4xl mx-auto px-4 py-20">
        <header className="text-center mb-16">
          <span className="text-indigo-600 text-xs font-bold uppercase tracking-widest mb-4 inline-block">Our Story</span>
          <h1 className="text-5xl font-black text-slate-900 mb-6">Built for Creators</h1>
          <p className="text-xl text-slate-500 leading-relaxed">
            ProfitBlog was founded in 2024 with a single mission: To help aspiring entrepreneurs build digital assets that generate real income.
          </p>
        </header>

        <div className="prose prose-lg prose-indigo max-w-none text-slate-800 space-y-8">
          <p>
            We believe that content is the most valuable currency in the modern economy. But creating great content is only half the battle. To truly succeed, you need to understand the mechanics of monetization, SEO, and audience retention.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 my-16">
            <div className="bg-slate-50 p-8 rounded-3xl">
              <h3 className="text-2xl font-black mb-4">Why Follow Us?</h3>
              <p className="text-slate-600 text-base">We don't just talk theory. We share real-world case studies, transparent revenue reports, and the exact tools we use to scale our niche blogs to $10k+ monthly revenue.</p>
            </div>
            <div className="bg-indigo-50 p-8 rounded-3xl">
              <h3 className="text-2xl font-black text-indigo-900 mb-4">Our Methodology</h3>
              <p className="text-slate-600 text-base">SEO-first content + Smart Monetization = Long term wealth. We focus on evergreen topics that continue to bring in traffic and affiliate commissions for years.</p>
            </div>
          </div>

          <h2 className="text-3xl font-black">Join the Community</h2>
          <p>
            Whether you're just starting your first blog or you're a seasoned affiliate marketer looking to optimize your stack, we're here to provide the insights you need to win.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
