import React from 'react'
import Blog from '../Blog/Blog.jsx'
import Sidebar from '../Sidebar/Sidebar.jsx'


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
    return (
        <>
            <Blog
                title="TITLE HEADING"
                description="Title description"
                date="April 7, 2014"
                onReadMoreClick={handleReadMoreClick}
                onCommentsClick={handleCommentsClick} />
            <Sidebar
                position="right"
                popularPosts={popularPosts}
                tags={tags} />
        </>

    )
}

export default Home