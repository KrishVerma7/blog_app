export default function BlogCard({ post, onDelete }: { post: any; onDelete: (id: string) => void }) {
    return (
        <div className="card">
            <h2 className="card-title">{post.title}</h2>
            <p className="card-description">{post.description}</p>
            <div className="card-buttons">
                <a href={`/blog/${post.id}`} className="read-button ">Read More</a>
                <button onClick={() => onDelete(post.id)} className="delete-button">Delete</button>
            </div>

        </div>
    );
}