import React, { useEffect, useState } from 'react';
import Blog from '../Blogs/Blog';
import './Main.css'
import Bookmark from '../Bookmark/Bookmark';


const Main = () => {
    
    const [blogs, setBlogs] = useState([]);
    const[times, setTime]=useState([]);
    const[bookMark, setBookmark]=useState([]);


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

    // Bookmarked function 

    const bookMarked = (title)=>{
        const titleBookMark = [...bookMark, title]
        setBookmark(titleBookMark)        
    }
   
    let arr = bookMark;   
    let uniqueArr = Array.from(new Set(arr));
    // console.log(uniqueArr);





   
    // main container

    return (
        <div className='container'>
            <div className="blog-container">
                {
                    blogs.map(blog => <Blog
                        key={blog.id}
                        blog={blog}
                        readingTime={readingTime}                       
                        bookMarked={bookMarked}
                    ></Blog>
                    )
                }
            </div>
            <div className="bookmarked">

                <div className='spent-time'>

                    <h2>Spent time on reading : <span className='total-time'>{totalTime(times)}</span> min</h2>

                </div>
                <div className='bookmarked-container'>
                    <h2>Bookmarked Blogs : {uniqueArr.length} </h2>

                    {
                      
                      uniqueArr.map(bookMark=> <Bookmark key={bookMark} bookMark={bookMark}></Bookmark>)
                    }
                    

                </div>


            </div>
          

        </div>
    );
};

export default Main;