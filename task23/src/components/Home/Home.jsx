import React from 'react';
import Blog from '../Blog/Blog.jsx';
import Sidebar from '../Sidebar/Sidebar.jsx';
import './Home.css';

function Home() {
    const popularPosts = [
        { id: 1, title: 'Lorem' },
        { id: 2, title: 'Ipsum' },
        { id: 3, title: 'Dolor' },
        { id: 4, title: 'Sit Amet' },
    ];

    const tags = [
        'Travel', 'New York', 'London', 'REAL', 'Science', 'Technology', 'Shopping'
    ];

    // Define the handleReadMoreClick function
    const handleReadMoreClick = () => {
        console.log('Read More clicked');
        // Add your navigation or logic here
    };

    // Define the handleCommentsClick function
    const handleCommentsClick = () => {
        console.log('Comments clicked');
        // Add your navigation or logic here
    };

    return (
        <>
            <div className="hero">
                <Blog
                    image="https://images.pexels.com/photos/9999921/pexels-photo-9999921.jpeg?auto=compress&cs=tinysrgb&w=600"
                    title="TITLE HEADING"
                    description="Title description"
                    date="April 7, 2014"
                    onReadMoreClick={handleReadMoreClick}
                    onCommentsClick={handleCommentsClick}
                />
                <Sidebar
                    position="right"
                    popularPosts={popularPosts}
                    tags={tags}
                />
            </div>
        </>
    );
}

export default Home;
