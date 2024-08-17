import React from 'react';
import MyName from './MyName';
import PopularPosts from './PopularPosts';
import Tags from './Tags';
import './Sidebar.css';

function Sidebar({ popularPosts, tags }) {
    return (

        <div className={`sidebar`}>
            <MyName />
            <PopularPosts posts={popularPosts} />
            <Tags tags={tags} />
        </div>

    );
}

export default Sidebar;
