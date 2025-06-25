import { useEffect, useState } from 'react';
import Link from 'next/link';
import BlogCard from '@/component/blogCard';
import Header from '@/component/header';

type BlogPost = {
  id: string;
  title: string;
  description: string;
  content: string;
};

export default function Home() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [searchBlog, setSearchBlog] = useState('');

  // Load posts from localStorage or initialize with mock data
  useEffect(() => {
    const stored = localStorage.getItem('posts');
    if (stored) {
      setPosts(JSON.parse(stored));
    } else {
      const defaultPosts = [
        {
          id: '1',
          title: 'Mock Blog 1',
          description: 'Short description 1',
          content: 'Full content 1',
        },
        {
          id: '2',
          title: 'Mock Blog 2',
          description: 'Short description 2',
          content: 'Full content 2',
        },
      ];
      localStorage.setItem('posts', JSON.stringify(defaultPosts));
      setPosts(defaultPosts);
      localStorage.setItem('basicId', '3');
    }
  }, []);

  // Function to delete blog post
  const handleDelete = (id: string) => {
    const updated = posts.filter(p => p.id !== id);
    setPosts(updated);
    localStorage.setItem('posts', JSON.stringify(updated));
  };


  //search functionality
  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchBlog.toLowerCase())
  );

  return (
    <>
      <Header />
      <div className="container">
        <h1 className="title">Welcome to BlogIt</h1>
        <h3 className="subtitle">Your personal blogging platform</h3>
        

        <div className="button-container">
          <Link href="/createBlog">
            <button className="create-button">Write a new Blog</button>
          </Link>
        </div>
        <input
          type="text"
          placeholder="Search posts by title..."
          value={searchBlog}
          onChange={(e) => setSearchBlog(e.target.value)}
          className="searchBar"
          style={{ marginBottom: '20px' }}
        />

        <div className="grid">
          {filteredPosts.map((post) => (
            <BlogCard key={post.id} post={post} onDelete={handleDelete} />
          ))}
        </div>
      </div>
    </>
  );
}
