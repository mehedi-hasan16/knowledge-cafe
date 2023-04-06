import React from 'react';
import './Questions.css'

const Questions = () => {
    return (
        <div className='blog-container'>
                <h1>Blog Questions</h1>
            <section className='question-answer'>
                <h5>What is the difference between props and state?</h5>
                <p>Answer: The difference comes components data are owned. The state data owned locally  and the components update itself. and props data owned and read only by a parent. props can be changed only if parents data is changed. </p>
            </section>
            <section className='question-answer'>
                <h5>How does work useState? </h5>
                <p>Answer: useState is a react hook that allow to use functional component. it return an array with two values. the current state and a function to update it, the hook takes a initial value as a argument and update state value when the state function is called.</p>
            </section>
            <section className='question-answer'>
                <h5>What does useEffect do other than load data? </h5>
                <p>Answer: After render finishing, useEffect will check the dependency value with the last rendered value and again call effect function if any one of them has changed.  </p>
            </section>
            <section className='question-answer'>
                <h5>How does React work? </h5>
                <p>Answer: ReactJS divides the UI separate reusable pieces of code it called components. react components works like JavaScript function and it accepts input called props. it’s possibly having to many components as many as need without mess up code.   </p>
            </section>
        </div>
    );
};

export default Questions;