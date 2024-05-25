import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { useState } from "react";

function Contact() {
    const [name,setName] = useState("");
    const [message,setMessage] = useState("");
  return (
    <div className="bg-[#171514] h-screen grid grid-cols-9">
        <div className="col-span-4 flex flex-col justify-center items-center gap-12">
            <h1 className="text-5xl text-white font-semibold mb-12">Connect with me</h1>
            <div className="flex gap-3">
                <FaLinkedin className="hover:cursor-pointer" onClick={handleLinkedInClick} color="white" size={64}/>
                <FaGithub color="white" className="hover:cursor-pointer" onClick={handleGithubClick} size={64}/>
                <FaXTwitter color="white" className="hover:cursor-pointer" onClick={handleTwitterClick} size={64}/>
                <FaInstagram color="white" className="hover:cursor-pointer" onClick={handleInstagramClick} size={64}/>
            </div>
        </div>
        <div className="col-span-1 h-full flex flex-col items-center justify-center pt-10">
            <div className="bg-white h-[40%] w-0.5"></div>
            <h2 className="text-white text-lg">OR</h2>
            <div className="bg-white h-[40%] w-0.5"></div>
        </div>
        <div className="col-span-4 text-white flex flex-col justify-center">
            <h1 className="text-5xl font-semibold mb-12">Send me an Email</h1>
                <input type="text" placeholder="Your Email" className="bg-transparent border rounded-md p-3 w-[600px] mb-3" onChange={(e)=>setName(e.target.value)} />
                <textarea type="text" placeholder="Your Message" className="bg-transparent border rounded-md p-3 w-[600px] h-[200px] mb-4" onChange={(e)=>setMessage(e.target.value)}/>
            <div>
                <button className='bg-[#D07C43] px-6 py-3 rounded-lg w-40 text-white text-xl'>Send</button>
            </div>
        </div>
    </div>
  )
}

export const handleLinkedInClick = () => {
    window.location.href = 'https://www.linkedin.com/in/your-profile';
};

export const handleGithubClick = () => {
    window.location.href = 'https://github.com/Aakash-Gen';
};

export const handleTwitterClick = () => {
    window.location.href = 'https://x.com/jain59791';
};

export const handleInstagramClick = () => {
    window.location.href = 'https://www.instagram.com/aakashjain1256/';
};

export default Contact