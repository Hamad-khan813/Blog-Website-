
import { Post, Category } from './types';

export const INITIAL_CATEGORIES: Category[] = [
  { id: '1', name: 'Personal Finance', slug: 'finance' },
  { id: '2', name: 'Digital Marketing', slug: 'marketing' },
  { id: '3', name: 'Passive Income', slug: 'income' },
  { id: '4', name: 'Tech Reviews', slug: 'tech' },
];

export const INITIAL_POSTS: Post[] = [
  {
    id: '1',
    title: '10 Best Ways to Earn Passive Income in 2024',
    slug: 'earn-passive-income-2024',
    excerpt: 'Discover the most effective strategies for building multiple streams of income with minimal daily effort...',
    content: `
      <p class="mb-4 text-lg">Building passive income is the dream of every entrepreneur. But where should you start? In 2024, the landscape has changed.</p>
      <h2 class="text-2xl font-bold mt-8 mb-4">1. Dividend Stocks</h2>
      <p class="mb-4">Investing in dividend-paying stocks remains a classic strategy. Companies distribute a portion of their earnings to shareholders regularly.</p>
      <div class="my-8 p-6 bg-blue-50 border-l-4 border-blue-500 rounded">
        <h4 class="font-bold text-blue-800">Pro Tip:</h4>
        <p class="text-blue-700 italic text-sm">Always reinvest your dividends to benefit from compound interest over the long term.</p>
      </div>
      <h2 class="text-2xl font-bold mt-8 mb-4">2. Digital Products</h2>
      <p class="mb-4">Create once, sell forever. E-books, online courses, and digital templates are high-margin products that generate sales while you sleep.</p>
    `,
    image: 'https://picsum.photos/seed/income/800/500',
    category: 'Passive Income',
    metaTitle: '10 Passive Income Strategies for 2024 | Financial Freedom',
    metaDescription: 'Learn how to generate passive income in 2024 with these 10 proven methods. From digital products to dividend investing.',
    createdAt: '2024-05-15T10:00:00Z',
    isFeatured: true
  },
  {
    id: '2',
    title: 'Why AdSense is Still Relevant for New Blogs',
    slug: 'adsense-for-new-blogs',
    excerpt: 'Many bloggers claim AdSense is dead. Here is why they are wrong and how you can maximize your earnings...',
    content: `
      <p class="mb-4">Google AdSense remains the most accessible ad network for beginners. While premiums like Mediavine exist, AdSense provides the foundation.</p>
    `,
    image: 'https://picsum.photos/seed/adsense/800/500',
    category: 'Digital Marketing',
    metaTitle: 'Is Google AdSense Still Worth It? | Blog Monetization',
    metaDescription: 'An honest look at Google AdSense for new bloggers and how to optimize your site for higher RPM.',
    createdAt: '2024-05-18T14:30:00Z'
  },
  {
    id: '3',
    title: 'Top 5 WordPress Hosting Services for Speed',
    slug: 'top-5-wordpress-hosting',
    excerpt: 'Website speed is a crucial ranking factor. We tested the most popular hosting providers to find the absolute fastest...',
    content: `
      <p class="mb-4">SEO depends on performance. If your blog takes more than 3 seconds to load, you're losing money.</p>
    `,
    image: 'https://picsum.photos/seed/hosting/800/500',
    category: 'Tech Reviews',
    metaTitle: 'Best Fastest WordPress Hosting 2024 Reviews',
    metaDescription: 'Looking for fast hosting? We compare the top 5 WordPress hosting services based on speed, uptime, and price.',
    createdAt: '2024-05-20T09:00:00Z'
  }
];
