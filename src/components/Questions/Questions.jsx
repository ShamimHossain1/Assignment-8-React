import React from 'react';
import './Questions.css'

const Questions = () => {
    return (
        <div className='question-container'>
            <div className='question'>
                <h3>1. Props vs state </h3>
                <p>Ans: The difference between Props and state is that, The state is owned locally, and the component itself updates it. Props are owned and read only by a parent. Props can be changed only if an upstream shift is caused by a callback function passed on to the child.</p>
            </div>
            <div className='question'>
                <h3>2. How does useState work? </h3>
                <p>Ans:</p>
            </div>
            <div className='question'>
                <h3>3. Purpose of useEffect other than fetching data. </h3>
                <p>Ans:</p>
            </div>
            <div className='question'>
                <h3>4. How Does React work?</h3>
                <p>Ans:</p>
            </div>

        </div>
    );
};

export default Questions;