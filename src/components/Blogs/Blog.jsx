import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import './Blog.css'

const Blog = (props) => {
    const { author_name, blog_title, cover_img, hash_tag, pro_images, publish_date, read_time } = props.blog;
    const readingTime = props.readingTime;
    const bookMarked = props.bookMarked;
   
    return (
        <div className='blog-body'>
            <img src={cover_img} alt="" />
            <div className='author-data'>
                <div>
                    <img className='profile-pic' src={pro_images} alt="" />
                    <div className='author'>
                        <h1>{author_name}</h1>
                        <p>{publish_date} </p>
                    </div>

                </div>

                <p>{read_time} min read <FontAwesomeIcon className='bookmark-icon' onClick={() => bookMarked(blog_title)} icon={faBookmark} /> </p>
            </div>
            <h2>{blog_title}</h2>
            <p>{hash_tag}</p>
            <button className='read-btn' onClick={() => readingTime(read_time)}>Mark as read</button>
            <hr />


        </div>
    );
};

export default Blog;