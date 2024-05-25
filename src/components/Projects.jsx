import { FaExternalLinkAlt } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { FaGithub } from "react-icons/fa";

function Projects() {
    const projects = [
        { title: "Chatblock", description: "Developed a dynamic conversational payments application using React.js and Tailwind CSS, integrating Gemini API for chatbot functionality. Incorporated blockchain transactions through Neucron API and ensured data integrity and security with Firebase." , image:"/ChatBlock.png",linkUrl:"https://chatblock-bay.vercel.app/login", githubUrl:"https://github.com/Aakash-Gen/chatblock" },
        { title: "Skyzone", description: "Developed a dynamic car showcase and inventory browsing feature using React and Tailwind CSS. Enhanced user experience with intuitive navigation, interactive elements, and detailed car information to aid in purchasing decisions.", image: "/Skyzone.png",linkUrl:"https://skyzone-steel.vercel.app/", githubUrl:"https://github.com/Aakash-Gen/skyzone" },
        { title: "Chain Chest", description: "Chain Chest provides secure, blockchain-based data storage and sharing, ensuring data integrity, immutability, and accessibility. Simplifying data management, it fortifies sensitive information against breaches and tampering while enabling effortless, trusted sharing", image: "/Chain-chest.jpeg" },
        { title: "Nexus", description:"Nexus is a real-time chat application which enables seamless one-to-one messaging, allowing users to engage in private conversations. Additionally, Nexus offers group chat functionality, enabling users to join multi-participant conversations by entering a room code. With Firebase authentication integration, user security and authorization are prioritized.", image: "/Nexus.png",githubUrl:"https://github.com/Aakash-Gen/nexus",linkUrl:"https://nexus-lilac.vercel.app/"}
      ];
    
  return (
    <div id="projects" className="h-full bg-[#deccc3] pb-20">
        <h1 className="text-6xl text-gray-600 font-bold pt-40 pl-32 pb-24">My Projects</h1>
        <div className="flex flex-col justify-center items-center">
        {projects.map((project, index) => (
        <Box
          key={index}
          title={project.title}
          description={project.description}
          image={project.image}
          githubUrl = {project.githubUrl}
          linkUrl={project.linkUrl}
        />
      ))}

        </div>
    </div>
  )
}

const boxVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 0 }
  };
  
  const Box = ({ title, description,image,linkUrl, githubUrl }) => {
    const control = useAnimation();
    const [ref, inView] = useInView();
  
    useEffect(() => {
      if (inView) {
        control.start("visible");
      } else {
        control.start("hidden");
      }
    }, [control, inView]);
  
    return (
      <motion.div
        className="box bg-gray-200 p-4 m-4 rounded-lg shadow-lg w-[800px] h-auto flex flex-col items-center relative group mb-12 "
        ref={ref}
        variants={boxVariant}
        initial="hidden"
        animate={control}
      >
        <h1 className="text-2xl font-medium mb-2">{title}</h1>
        <img className="rounded-md w-full" src={image} alt={title} />
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-500 rounded-md"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center rounded-lg pt-12">
            <p className="text-white text-md max-w-[80%] text-center mt-2">{description}</p>
            <div className="flex gap-4">
                <a href={linkUrl} target="_blank" rel="noopener noreferrer" className="rounded-full hover:cursor-pointer bg-white p-3 mt-4">
                  <FaExternalLinkAlt size={26} />
                </a>
                <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="rounded-full hover:cursor-pointer bg-white p-3 mt-4">
                    <FaGithub size={26} />
                </a>
            </div>
        </div>
      </motion.div>
    );
  };


export default Projects