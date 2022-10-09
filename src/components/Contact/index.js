import React, { useState } from 'react';

function Contact() {

    const [formState, setFormState] = useState({ name:"", email:"", message:"" });
    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState

    const contactSubmit = (e) => {
        e.preventDefault();
        if(!errorMessage) {
            console.log('Form Submitted', formState);
        }
    };

    const handleChange = (e) => {
        if (!e.target.value.length) {
            setErrorMessage(`${e.target.name} is required.`)
        } else {
            setErrorMessage('');
        }
        if(!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
            console.log('Handle form', formState);
        }
    }

    return(
        <section>
            <h1>Contact</h1>
            <form id="contact-form" onSubmit={contactSubmit}>
                <div>
                    <label htmlFor='name'>Name:</label>
                    <input name="name" type='text' defaultValue={name} onBlur={handleChange} />
                </div>
                <div>
                    <label htmlFor='email'>Email:</label>
                    <input name='email' type='email' defaultValue={email} onBlur={handleChange} />
                </div>
                <div>
                    <label htmlFor='message'>Message:</label>
                    <textarea name='message' rows='10' defaultValue={message} onBlur={handleChange} />
                </div>
                {errorMessage && (
                    <div>
                        <p className='error'>{errorMessage}</p>
                    </div>
                )}
                <button type='submit'>Submit</button>
            </form>
        </section>
    );
};

export default Contact;