'use client'
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Image from 'next/image';
import Link from "next/link";

const ContactUs = () => {
    const form = useRef();
    const [message, setMessage] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_i92n02k', 'template_0kex728', form.current, {
                publicKey: 'FiJyyH-H2oCU2pm5p',
            })
            .then(
                () => {
                    setMessage('Message sent successfully!');
                    setTimeout(() => setMessage(''), 3000);
                },
                (error) => {
                    setMessage('Failed to send message. Please try again.');
                    setTimeout(() => setMessage(''), 3000);
                }
            );
    };

    return (
        <div className="flex flex-col md:flex-row justify-between min-h-screen bg-gradient-to-br p-6 py-20 md:py-32">
            <div className="text-center md:text-left px-6 md:px-24 md:w-1/2">
                <h1 className="text-3xl md:text-4xl font-extrabold  mb-4">Let's Connect</h1>
                <p className=" text-lg mb-6">
                    I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>
                <div className="flex justify-center md:justify-start space-x-4">
                    <Link href="https://github.com/Emon1112" target="_blank" className="w-12 h-12">
                        <Image src={GithubIcon} alt="Github Icon" className="w-full h-full" />
                    </Link>
                    <Link href="https://www.linkedin.com/in/md-emon-sheikh-325255203/" target="_blank" className="w-12 h-12">
                        <Image src={LinkedinIcon} alt="Linkedin Icon" className="w-full h-full" />
                    </Link>
                </div>
            </div>

            <form ref={form} onSubmit={sendEmail} className="w-full md:w-1/2 p-6 md:p-8  mx-auto md:mr-24 mt-10 md:mt-0">
                {message && (
                    <div className="text-center mb-4 p-2 bg-green-200 text-green-800 rounded">
                        {message}
                    </div>
                )}

                <label className="block  font-medium mb-2">Name</label>
                <input type="text" name="user_name" className=" w-full p-3 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 mb-4" placeholder="Your Name" required />

                <label className="block  font-medium mb-2">Email</label>
                <input type="email" name="user_email" className=" w-full p-3 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 mb-4" placeholder="Your Email" required />

                <label className="block  font-medium mb-2">Message</label>
                <textarea name="message" className=" w-full p-3 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 mb-4 h-32" placeholder="Your Message" required></textarea>

                <button type="submit" className="w-full bg-gradient-to-br from-primary-500 to-secondary-500 text-white py-3 rounded-lg font-semibold transition-all hover:bg-secondary-800">
                    Send
                </button>
            </form>
        </div>
    );
};

export default ContactUs;
