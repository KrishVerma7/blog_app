/** this is detailed page for a blog post based on unique id */

import Header from '@/component/header';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function BlogDetail() {
 const router = useRouter();
const id = router.query.id as string;

  const [post, setPost] = useState<any>();

  useEffect(() => {
    if (id) {
      const storedPosts = JSON.parse(localStorage.getItem('posts') || '[]' );
      const found = storedPosts.find((posts:any) => posts.id === id);
      setPost(found);
    }
  }, [id]);

  //show Loading while fetching
  if (!post) return <div>Loading...</div>;

  return (
    <>
      <Header />
      <div className="container detail-container">
        <h1 className="detail-title">{post.title}</h1>
        <div className="divider" />
        <p className="detail-content">{post.content}</p>
        <div className="back-link">
          <a href="/" className="read-button">← Back to Home</a>
        </div>
      </div>
    </>
  );
}
