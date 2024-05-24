import { FaExternalLinkAlt } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { FaGithub } from "react-icons/fa";

function Projects() {
    const projects = [
        { title: "Chatblock", description: "Developed a dynamic conversational payments application using React.js and Tailwind CSS, integrating Gemini API for chatbot functionality. Incorporated blockchain transactions through Neucron API and ensured data integrity and security with Firebase." , image:"src/assets/ChatBlock.png" },
        { title: "Skyzone", description: "Developed a dynamic car showcase and inventory browsing feature using React and Tailwind CSS. Enhanced user experience with intuitive navigation, interactive elements, and detailed car information to aid in purchasing decisions.", image: "src/assets/Skyzone.png" },
        { title: "Chain Chest", description: "Chain Chest provides secure, blockchain-based data storage and sharing, ensuring data integrity, immutability, and accessibility. Simplifying data management, it fortifies sensitive information against breaches and tampering while enabling effortless, trusted sharing", image: "src/assets/Chain-chest.jpeg" },
        { title: "Nexus", description:"Nexus is a real-time chat application which enables seamless one-to-one messaging, allowing users to engage in private conversations. Additionally, Nexus offers group chat functionality, enabling users to join multi-participant conversations by entering a room code. With Firebase authentication integration, user security and authorization are prioritized.", image: "src/assets/Nexus.png"}
      ];
    
  return (
    <div className="h-full bg-[#deccc3]">
        <h1 className="text-6xl text-gray-600 font-bold pt-40 pl-32 pb-24">My Projects</h1>
        <div className="flex flex-col justify-center items-center">
        {projects.map((project, index) => (
        <Box
          key={index}
          title={project.title}
          description={project.description}
          image={project.image}
        />
      ))}

        </div>
    </div>
  )
}

// const Project =(props)=>{
//     return(
//         <div className="relative group shrink-0 w-[40%] ">
//             <img className="h-[350px] w-full rounded-3xl shadow-md" src={props.image} alt="ChatBlock" />
//             <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,1)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col gap-6 items-center justify-center rounded-3xl">
//                 <span className="text-white text-2xl pt-8 font-medium">{props.name}</span>
//                 <p className="text-white text-md max-w-[80%] text-center">{props.description}</p>
//                 <div className="rounded-full bg-white p-3">
//                     <FaExternalLinkAlt size={26}/>
//                 </div>
//             </div>
//         </div>
//     )
// }

const boxVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 0 }
  };
  
  const Box = ({ title, description,image }) => {
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
                <div className="rounded-full bg-white p-3 mt-4">
                  <FaExternalLinkAlt size={26} />
                </div>
                <div className="rounded-full bg-white p-3 mt-4">
                  <FaGithub size={26}/>
                </div>
            </div>
        </div>
      </motion.div>
    );
  };

export default Projects