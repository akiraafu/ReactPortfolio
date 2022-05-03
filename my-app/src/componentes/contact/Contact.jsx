import React from "react";
import "./contact.css";
import { MdOutlineMail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm("service_t5oaxze", "template_6m6rrsl", form.current, "R321p3jpE6qwXirhc")
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
        e.target.reset();
    };
    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className='container contact__container'>
                <div className='contact__alloptions'>
                    <div className='contact__options'>
                        <article className='contact__option'>
                            <MdOutlineMail className='contact__option-icon' />
                            <h4>Email</h4>
                            <h5>junrongfu6@gmail.com</h5>
                            <a href='mailto:junrongfu6@gmail.com' target='_blank'>
                                Send a Email
                            </a>
                        </article>
                    </div>
                    <div className='contact__options'>
                        <article className='contact__option'>
                            <RiMessengerLine className='contact__option-icon' />
                            <h4>Messenger</h4>
                            <h5>Junrong Fu (Akira)</h5>
                            <a href='https://m.me/junrong.fu' target='_blank'>
                                Send a Message
                            </a>
                        </article>
                    </div>
                    <div className='contact__options'>
                        <article className='contact__option'>
                            <BsWhatsapp className='contact__option-icon' />
                            <h4>WhatsApp</h4>
                            <h5>Junrong</h5>
                            <a
                                href='https://api.whatsapp.com/send?phone=+61'
                                target='_blank'>
                                Send a Message
                            </a>
                        </article>
                    </div>
                </div>
                {/* end of contact options */}
                <form ref={form} onSubmit={sendEmail}>
                    <input type='text' name='name' placeholder='Your Name' required />
                    <input type='email' name='email' placeholder='Your Email' required />
                    <textarea
                        name='message'
                        placeholder='Your Message'
                        rows='7'
                        required></textarea>
                    <button type='submit' className='btn btn-primary'>
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
