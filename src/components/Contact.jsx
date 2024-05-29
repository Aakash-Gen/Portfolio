import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { useState } from "react";
import emailjs from 'emailjs-com';

function Contact() {
    const [email,setEmail] = useState("");
    const [message,setMessage] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();

        const templateParams = {
            from_email:email,
            message,
            reply_to:email
        };

        emailjs.send(import.meta.env.VITE_SERVICE_ID,import.meta.env.VITE_TEMPLATE_ID, templateParams, import.meta.env.VITE_PUBLIC_KEY)
            .then((response) => {
                alert('Message sent!');
                setEmail('');
                setMessage('');
            })
            .catch((error) => {
                alert('Failed to send message: ' + error.text);
            });
    };
  return (
    <div id="contact" className="bg-[#141619] h-screen grid md:grid-cols-9 pt-20 md:pt-0 pb-6 md:pb-0">
        <div className="md:col-span-4 flex flex-col justify-center items-center gap-6 md:gap-12">
            <h1 className="text-[32px] md:text-[43px] text-white font-semibold mb-2 md:mb-8">Connect with me</h1>
            <div className="flex gap-3">
                <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="hover:cursor-pointer" >
                <FaLinkedin color="white" className="text-[46px] md:text-[56px]"/>
                </a>
                <a href="https://github.com/Aakash-Gen" target="_blank" rel="noopener noreferrer" className="hover:cursor-pointer" >
                <FaGithub color="white" className="text-[46px] md:text-[56px]"/>
                </a>
                <a href="https://x.com/jain59791" target="_blank" rel="noopener noreferrer" className="hover:cursor-pointer" >
                <FaXTwitter color="white" className="text-[46px] md:text-[56px]"/>
                </a>
                <a href="https://www.instagram.com/aakashjain1256/" target="_blank" rel="noopener noreferrer" className="hover:cursor-pointer" >
                <FaInstagram color="white" className="text-[46px] md:text-[56px]"/>
                </a>
            </div>
        </div>
        <div className="md:col-span-1 h-full flex md:flex-col flex-row items-center justify-center md:pt-10">
            <div className="bg-gray-500 h-0.5 md:h-[40%] w-[40%] md:w-0.5"></div>
            <h2 className="text-gray-500 text-xl">OR</h2>
            <div className="bg-gray-500 h-0.5 md:h-[40%] w-[40%] md:w-0.5"></div>
        </div>
        <div className="md:col-span-4 text-white flex flex-col items-center md:items-start justify-center">
            <h1 className="text-[32px] md:text-[42px] font-semibold mb-8">Send me an Email</h1>
            <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center md:items-start">
            <input
                type="email"
                placeholder="Your Email"
                className="bg-transparent border rounded-md p-3 w-[280px] md:w-[550px] mb-4"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <textarea
                placeholder="Your Message"
                className="bg-transparent border rounded-md p-3 w-[280px] md:w-[550px] h-[120px] md:h-[200px] mb-4"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
            />
            <button type="submit" className="bg-[#D07C43] px-4 py-2 rounded-lg w-32 text-white font-medium text-xl">Send</button>
        </form>

        </div>
    </div>
  )
}


export default Contact
