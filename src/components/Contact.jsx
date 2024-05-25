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

        emailjs.send('service_jo7p31g', 'template_uepncj8', templateParams, 'kr44HHiCJURdkePRW')
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
    <div id="contact" className="bg-[#171514] h-screen grid grid-cols-9">
        <div className="col-span-4 flex flex-col justify-center items-center gap-12">
            <h1 className="text-5xl text-white font-semibold mb-12">Connect with me</h1>
            <div className="flex gap-3">
                <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="hover:cursor-pointer" >
                <FaLinkedin color="white" size={64}/>
                </a>
                <a href="https://github.com/Aakash-Gen" target="_blank" rel="noopener noreferrer" className="hover:cursor-pointer" >
                <FaGithub color="white" size={64}/>
                </a>
                <a href="https://x.com/jain59791" target="_blank" rel="noopener noreferrer" className="hover:cursor-pointer" >
                <FaXTwitter color="white" size={64}/>
                </a>
                <a href="https://www.instagram.com/aakashjain1256/" target="_blank" rel="noopener noreferrer" className="hover:cursor-pointer" >
                <FaInstagram color="white" size={64}/>
                </a>
            </div>
        </div>
        <div className="col-span-1 h-full flex flex-col items-center justify-center pt-10">
            <div className="bg-white h-[40%] w-0.5"></div>
            <h2 className="text-white text-lg">OR</h2>
            <div className="bg-white h-[40%] w-0.5"></div>
        </div>
        <div className="col-span-4 text-white flex flex-col justify-center">
            <h1 className="text-5xl font-semibold mb-12">Send me an Email</h1>
            <form onSubmit={handleSubmit}>
            <input
                type="email"
                placeholder="Your Email"
                className="bg-transparent border rounded-md p-3 w-[600px] mb-4"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <textarea
                placeholder="Your Message"
                className="bg-transparent border rounded-md p-3 w-[600px] h-[200px] mb-4"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
            />
            <button type="submit" className="bg-[#D07C43] px-6 py-3 rounded-lg w-40 text-white text-xl">Send</button>
        </form>

        </div>
    </div>
  )
}


export default Contact
