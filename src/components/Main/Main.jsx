import React, { useEffect, useState } from 'react';
import Blog from '../Blogs/Blog';

import './Main.css'


const Main = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('blogdata.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    return (
        <div className='container'>
            <div className="blog-container">
                {
                    blogs.map(blog => <Blog
                        key={blog.id}
                        blog={blog}
                    ></Blog>
                    )
                }
            </div>
            <div className="bookmarked">

                <div className='spent-time'>
                    <h2>Spent time on reading : <span>0</span> min</h2>

                </div>
                <div className='bookmarked-container'>
                    <h2>Bookmarked Blogs : <span>0</span></h2>

                </div>


            </div>

        </div>
    );
};

export default Main;