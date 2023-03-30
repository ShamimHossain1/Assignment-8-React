import React from 'react';
import './Blog.css'

const Blog = (props) => {
    const { author_name, blog_title, cover_img, hash_tag, pro_images, publish_date, read_time } = (props.blog);
    console.log(props.blog);
    return (
        <div className='blog-body'>
            <img src={cover_img} alt="" />
            <div className='author-data'>
                <div>
                    <img className='profile-pic' src={pro_images} alt="" />
                    <div className='author'>
                        <h1>{author_name}</h1>
                        <p>{publish_date}</p>
                    </div>

                </div>

                <p>{read_time} min read</p>
            </div>
            <h2>{blog_title}</h2>
            <p>{hash_tag}</p>
            <a href="/read">Mark as read</a>
            <hr />


        </div>
    );
};

export default Blog;