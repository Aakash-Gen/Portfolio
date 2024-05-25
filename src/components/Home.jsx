import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";


function Home() {
  return (
      <div id="home" className="grid grid-cols-5 h-screen bg-[#171514]">
        <div className="flex flex-col col-span-2 justify-between pl-5">
          <div className=" flex flex-grow flex-col justify-center pl-20">
            <p className="text-white text-[44px] font-bold ">I'm Aakash, a</p>
            <p className="text-white text-[44px] font-bold mb-2 ">Full stack web-developer</p>
            <p className="text-gray-300 text-lg mb-6">"Design. Develop. Deploy."</p>
            <button className='bg-[#D07C43] px-6 py-3 rounded-lg w-40 text-white text-xl'>Get in Touch</button>
          </div>
          <div className="pb-14 pl-20 flex flex-col gap-2">
            <div className="h-[1px] bg-gray-400 w-[300px]"></div>
            <div className="flex items-center gap-2">
              <p className="text-gray-300 mb">Let's connect - </p>
                <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="hover:cursor-pointer" >
                    <FaLinkedin color="white"/>
                </a>
                <a href="https://github.com/Aakash-Gen" target="_blank" rel="noopener noreferrer" className="hover:cursor-pointer" >
                    <FaGithub color="white"/>
                </a>
                <a href="https://x.com/jain59791" target="_blank" rel="noopener noreferrer" className="hover:cursor-pointer" >
                    <FaXTwitter color="white"/>
                </a>
                <a href="https://www.instagram.com/aakashjain1256/" target="_blank" rel="noopener noreferrer" className="hover:cursor-pointer" >
                    <FaInstagram color="white"/>
                </a>
            </div>
          </div>
        </div>
        <div className="col-span-3 flex flex-col-reverse items-center">
          <img className="mr-32 h-[600px] w-[600px] " src="src/assets/image_processing20230125-21110-cfvm2t-removebg-preview.png" alt="" />
        </div>
      </div>
  )
}

export default Home