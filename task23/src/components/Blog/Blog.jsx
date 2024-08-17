import React from 'react';
import './Blog.css';

function Blog({ title, description, date, onReadMoreClick, onCommentsClick, image }) {
    return (

        <div className="title-heading">-
            <img src={image} alt="image hai bhai" />
            <h1>{title}</h1>
            <div className="meta-info">
                <p className="description">{description}</p>
                <p className="date">{date}</p>
            </div>
            <p className="content">
                Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat.
                Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper.
                Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida
                diam non fringilla.
            </p>
            <div className="actions">
                <button className="read-more" onClick={onReadMoreClick}>Read More</button>
                <button className="comments" onClick={onCommentsClick}>Comments</button>
            </div>
        </div>
    );
}

export default Blog;
