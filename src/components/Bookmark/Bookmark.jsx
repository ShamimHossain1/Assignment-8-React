import React from 'react';
import './Bookmark.css'

const Bookmark = ({bookMark}) => {
    // console.log(props);

    
    
    return (
        <div>
            <p className='book-marked'>{bookMark}</p> 

            
        </div>
    );
};

export default Bookmark;