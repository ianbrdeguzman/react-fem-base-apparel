import React, { useState, useEffect } from 'react';
import arrow from '../assets/icon-arrow.svg';
import errorIcon from '../assets/icon-error.svg';

const Form = () => {
    const [input, setInput] = useState(null);
    const [error, setError] = useState(false);
    const [isSubmit, setIsSubmit] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!input) {
            setError(true);
            setIsSubmit(false);
            return;
        }
        if (input.match(/^[a-zA-z0-9._]+@[a-zA-z0-9._]+\.[a-zA-z0-9]{2,4}$/)) {
            setError(false);
            setIsSubmit(true);
        } else {
            setError(true);
            setIsSubmit(false);
        }
        setInput(null);
        e.target.reset();
    };

    useEffect(() => {
        const id = setTimeout(() => {
            setError(false);
        }, 5000);
        return () => clearTimeout(id);
    }, [error]);

    useEffect(() => {
        const id = setTimeout(() => {
            setIsSubmit(false);
        }, 5000);
        return () => clearTimeout(id);
    }, [isSubmit]);

    return (
        <section className='form-section'>
            <div className='form-header'>
                <h1>
                    we're <span>coming soon</span>
                </h1>
                <p>
                    Hello fellow shoppers! We're currently building our new
                    fashion store. Add your email below to stay up-to-date with
                    announcements and our launch deals.
                </p>
            </div>
            <form
                className={error ? 'form-footer error' : 'form-footer'}
                onSubmit={handleSubmit}
            >
                <input
                    type='text'
                    name='email'
                    id='email'
                    aria-label='text'
                    placeholder='Email Address'
                    onChange={(e) => setInput(e.target.value)}
                />
                <button type='submit'>
                    <img src={arrow} alt='submit' />
                </button>
                {error && (
                    <>
                        <p>Please provide a valid email</p>
                        <img
                            src={errorIcon}
                            alt='error'
                            className='error-icon'
                        />
                    </>
                )}
                {isSubmit && (
                    <>
                        <p style={{ color: 'green' }}>
                            Thank you for subscribing!
                        </p>
                    </>
                )}
            </form>
        </section>
    );
};

export default Form;
