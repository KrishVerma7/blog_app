// pages/createBlog.tsx
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Create() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [content, setContent] = useState('');
    const router = useRouter();

    const handleSubmit = (e: any) => {

        const generateId = () => {
            const current = parseInt(localStorage.getItem('postIdCounter') || '1', 10);
            localStorage.setItem('postIdCounter', (current + 1).toString());
            return current.toString();
        };
        const newPost = {
            id: generateId(),
            title,
            description,
            content,
        };

        const storedStr = localStorage.getItem('posts');
        const stored = storedStr ? JSON.parse(storedStr) : [];
        localStorage.setItem('posts', JSON.stringify([...stored, newPost]));
        router.push('/');
    };

    return (
        <>
            <div className="container">
                <h2 className="form-title">📝 Create New Post</h2>
                <form onSubmit={handleSubmit} className="form-box">
                    <label className="form-label">Blog Title</label> <br/>
                    <input
                        type="text"
                        className="form-input"
                        placeholder="Your blog title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                    <label className="form-label">Give a short Description</label> <br/>
                    <input
                        type="text"
                        className="form-input"
                        placeholder="Give a short Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        maxLength={50}
                        required
                    />
                    <label className="form-label text-decoration-bold">Blog Content</label> <br/>
                    <textarea
                        className="form-textarea"
                        placeholder="Write your blog content here"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        rows={6}
                        required
                    />
                    <button type="submit" className="create-button">Publish Blog</button>
                </form>
            </div>
        </>
    );
}
