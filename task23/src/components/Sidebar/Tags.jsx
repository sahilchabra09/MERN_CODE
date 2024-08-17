import React from 'react';
import './Tags.css';

function Tags({ tags }) {
    return (
        <div className="tags tag-div" >
            <h3>Tags</h3>
            <div className="tags-list">
                {tags.map((tag, index) => (
                    <span key={index} className="tag">{tag}</span>
                ))}
            </div>
        </div>
    );
}

export default Tags;
