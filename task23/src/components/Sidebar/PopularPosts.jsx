import React from 'react';
import './PopularPosts.css';

const posts = [
    {
        id: 1,
        title: "Lorem",
        description: "Sed mattis nunc",
        image: "https://images.pexels.com/photos/9999921/pexels-photo-9999921.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        id: 2,
        title: "Ipsum",
        description: "Praes tinci sed",
        image: "https://images.pexels.com/photos/27351031/pexels-photo-27351031/free-photo-of-essaouira-view.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
    },
    {
        id: 3,
        title: "Dorum",
        description: "Ultricies congue",
        image: "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        id: 4,
        title: "Mingsum",
        description: "Lorem ipsum dipsum",
        image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
];

function PopularPosts() {
    return (
        <div className="popular-posts">
            <h2>Popular Posts</h2>
            <ul>
                {posts.map(post => (
                    <li key={post.id} className="post-item">
                        <img src={post.image} alt={post.title} />
                        <div className="post-info">
                            <h3>{post.title}</h3>
                            <p>{post.description}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PopularPosts;
