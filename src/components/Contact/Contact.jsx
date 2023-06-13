import React from 'react';
import { useRef } from 'react';
import emailjs, { send } from '@emailjs/browser';

const Contact = () => {

    // email starts here

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_85x5j0l', 'template_m01w4el', form.current, 'Zr17kNg4fESbjw_DW')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    // email ends here

    return (

        <div className='mt-5 row'>
            <div className="contact-form col-md-8 p-5 bg-light">
                <h1 className='text-center'>Contact Us</h1>
                <form ref={form} onSubmit={sendEmail}>

                    <h4 className='mt-4'>Username</h4>
                    <input className='py-3 w-75' type="text" name='form_name' placeholder="Enter your username" />


                    <h4 className='mt-4'>Email</h4>
                    <input className='py-3 w-75' type="text" name='gorm_email' placeholder="Enter your Email" />



                    <h4 className='mt-4'>Write any suggestion here</h4>
                    <textarea className='w-75' name='form_message' rows="5"></textarea>

                    <div>
                        <button className='btn btn-primary mx-auto' type='submit' value={send}>Send</button>
                    </div>

                </form>

            </div>
            <div className="contact-img col-md-4 my-auto mx-auto">
                <img src="/image/email.png" className='w-100' alt="" />
            </div>
        </div>
    );
};

export default Contact;