import React, { useEffect, useState } from 'react';
import Blog from '../Blogs/Blog';

import './Main.css'


const Main = () => {
    
    const [blogs, setBlogs] = useState([]);
    const[times, setTime]=useState([]);

    // calling api

    useEffect(() => {
        fetch('blogdata.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    // Total reading time functions

    const readingTime = (time)=>{
       
        const newTime = [...times, time];
        setTime(newTime);
   
    }
    const totalTime = (times) =>{
          let sum = 0;
         for (let i = 0; i < times.length; i += 1) {
           sum += times[i];
         }
         return sum;
    }
   
    // main container

    return (
        <div className='container'>
            <div className="blog-container">
                {
                    blogs.map(blog => <Blog
                        key={blog.id}
                        blog={blog}
                        readingTime={readingTime}
                    ></Blog>
                    )
                }
            </div>
            <div className="bookmarked">

                <div className='spent-time'>

                    <h2>Spent time on reading : <span className='total-time'>{totalTime(times)}</span> min</h2>

                </div>
                <div className='bookmarked-container'>
                    
                    <h2>Bookmarked Blogs : <span className='marked-number'>0</span> </h2>

                </div>


            </div>

        </div>
    );
};

export default Main;