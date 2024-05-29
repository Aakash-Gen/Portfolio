function About() {
  return (
    <div id='about' className=' bg-gray-50 h-full pt-14'>
        <div className=' md:grid md:grid-cols-5'>
            <div className='md:col-span-2 flex items-center md:justify-end justify-center md:mt-14 mt-8'>
                <img className='md:h-[450px] md:w-[380px] h-80 w-64 rounded-lg shadow-md md:mb-0 mb-4' src="/Me.jpeg" alt="" />
            </div>
            <div className='md:col-span-2 flex flex-col text-center items-center justify-center md:text-start md:items-start md:pl-16 px-6 gap-4 md:gap-6 '>
                <h2 className='text-[24px] md:text-xl font-semibold text-gray-500'>About Me</h2>
                <p className=' text-[14px] md:text-[16px]'>
                    Hey there! I'm Aakash Jain, a full stack developer with a knack for bringing ideas to life.
                    Throughout my journey as a college student, I've made various projects showcasing my proficiency in both frontend and backend development.
                    Lately, I've been diving into Web3 and blockchain tech, drawn by its potential to reshape industries and  I'm actively expanding my skill set in this domain. 
                    I'm a firm believer in the power of continuous learning, and I'm always on the lookout for opportunities to explore new technologies and frameworks. 
                </p>
                <p className=' text-[14px] md:text-[16px]'>
                    If you're looking for a dynamic collaborator to bring your digital vision to life, look no further! I'm eager to partner with you on your next project,
                    whether it's a freelance gig, internship opportunity, or a full-fledged collaboration. Let's harness the power of technology to create something truly remarkable together.
                </p>
            </div>
        </div>
    </div>
  )
}

export default About