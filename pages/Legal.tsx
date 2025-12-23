
import React from 'react';

interface LegalProps {
  type: 'privacy' | 'disclaimer';
}

const Legal: React.FC<LegalProps> = ({ type }) => {
  return (
    <div className="bg-white py-20">
      <div className="max-w-3xl mx-auto px-4">
        {type === 'privacy' ? (
          <div className="prose prose-indigo max-w-none">
            <h1 className="text-4xl font-black mb-8">Privacy Policy</h1>
            <p className="text-slate-500">Last updated: May 2024</p>
            <p>Your privacy is important to us. It is ProfitBlog's policy to respect your privacy regarding any information we may collect from you across our website.</p>
            <h2>1. Information we collect</h2>
            <p>We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent.</p>
            <h2>2. Cookies and Ads</h2>
            <p>We use Google AdSense to serve advertisements. Google's use of the DART cookie enables it to serve ads to our users based on their visit to our site and other sites on the Internet.</p>
            <h2>3. Contact Us</h2>
            <p>If you have any questions about how we handle user data and personal information, feel free to contact us.</p>
          </div>
        ) : (
          <div className="prose prose-indigo max-w-none">
            <h1 className="text-4xl font-black mb-8">Earnings Disclaimer</h1>
            <p className="text-slate-500">Last updated: May 2024</p>
            <p>ProfitBlog is a participant in various affiliate marketing programs, which means we may get paid commissions on editorially chosen products purchased through our links to retailer sites.</p>
            <h2>No Guarantees</h2>
            <p>Any earnings or income statements, or earnings or income examples, are only estimates of what we think you could earn. There is no assurance you'll do as well. If you rely upon our figures, you must accept the risk of not doing as well.</p>
            <h2>Professional Advice</h2>
            <p>The information contained on this Website and the resources available for download through this website is not intended as, and shall not be understood or construed as, financial advice.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Legal;
