
export interface Post {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  image: string;
  category: string;
  metaTitle: string;
  metaDescription: string;
  createdAt: string;
  isFeatured?: boolean;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
}

export interface Subscriber {
  email: string;
}

export interface AffiliateProduct {
  name: string;
  description: string;
  price: string;
  link: string;
  image: string;
}
