"use client";
import {FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaPython, FaJava,FaAws} from 'react-icons/fa'
import {SiNextdotjs,SiCplusplus, SiNodedotjs, SiGithub, SiDocker, SiMongodb, SiMysql,SiPostgresql} from 'react-icons/si'
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs"
import {Tooltip,TooltipContent,TooltipProvider,TooltipTrigger} from "@/components/ui/tooltip"
import {motion} from "motion/react"
import { ScrollArea } from '@radix-ui/react-scroll-area';
import * as Dialog from "@radix-ui/react-dialog";

// about
const about={
    title:"About me",
    description:"I am a Computer Science graduate with 6 months of experience as a backend developer in fintech, skilled in Python, JavaScript, and API integration. Passionate about learning and delivering efficient solutions.",
    info:[
        {
            fieldname:"Name",
            fieldvalue:"Nguyen Anh Tuan",
        },
        {
            fieldname:"Phone",
            fieldvalue:"(+84) 907924012",
        },
        {
            fieldname:"Experiences",
            fieldvalue:"6 months",
        },
        {
            fieldname:"Nationality",
            fieldvalue:"Viet Nam",
        },
        {
            fieldname:"Freelance",
            fieldvalue:"Available",
        },
        {
            fieldname:"Email",
            fieldvalue:"tuanna05.cs@gmail.com",
        },
        {
            fieldname:"Languages",
            fieldvalue:"Vietnam, English",
        },
        
        
    ],
}
// experience
const experience={
    icon:"/public/Image/icons/badge.svg",
    title:"My experience",
    description:"A summary of my professional background and work experience.",
    items: [
        {
            "company": "Hippopenny",
            "Linkcompany":"https://hippopenny.com/",
            "position": "Software Developer Intern",
            "duration": "8/2024 - 1/2025",
            "workMode": "Remote (United States)",
            "description": [
                "8/2024 - 10/2024: Part-time",
                "11/2024 - 1/2025: Full-time",
                "Optimized a high-performance backend system using MongoDB, enhancing data retrieval speed and overall system efficiency.",
                "Designed an AI prompt engineering system to generate intelligent and context-aware responses, improving the automation process.",
                "Developed AI-powered bots to automate repetitive development tasks, such as code reviews, testing automation, and deployment pipelines.",
                "Collaborated with cross-functional teams (developers, data scientists, and product managers) to integrate AI-driven solutions, enhancing system functionality across multiple platforms."
            ]
        },
        {
            "company": "Fintech Draco Corporation",
            "Linkcompany":"https://dracorp.com.vn/",
            "position": "Backend Developer Intern",
            "duration": "4/2024 - 10/2024",
            "workMode": "Onsite (HCM City)",
            "description": [
                "Developed and maintained enterprise ERP software using Frappe Framework and Python, ensuring system stability and scalability.",
                "Designed and implemented optimized RESTful APIs with comprehensive documentation for seamless integration.",
                "Worked closely with Business Analysts to develop custom features tailored to specific business needs.",
                "Enhanced user experience by building responsive UI components using HTML, CSS, and JavaScript.",
                "Resolved technical issues, validated data, and optimized database queries to maintain high system performance."
            ]
        }
                
    ],    
}
//education
const education={
    icon:"/public/Image/icons/cap.svg",
    title:"My education",
    description:"Graduated with a Bachelor of Computer Science from the University of Information Technology - Vietnam National University, Ho Chi Minh City, in 2024. Proficient in Python, JavaScript, Java, and C#, with experience in Node.js, React.js, and managing databases like MySQL, PostgreSQL, and MongoDB. Skilled in modern technologies such as Docker and AWS, with a strong foundation in Computer Science, including Data Structures, Algorithms, NLP, Computer Vision, and Software Engineering.",
    items:[
        {
            instituation:"University of Information Technology - VNUHCM",
            website:"https://en.uit.edu.vn/",
            degree:"Computer Science",
            duration:"10/2020 - 6/2024",
        }

    ],
}

// skills list

const skillList = {
    title: "My Skills",
    description: "A categorized list of my technical skills.",
    categories: [
        {
            title: "Frontend Skills",
            description: "I have developed user interfaces for various projects, including web applications using React and NextJS. These skills enable me to create interactive, user-friendly designs and optimize the user experience for both desktop and mobile platforms.",
            skillList: [
                { name: "HTML", icon: <FaHtml5 /> },
                { name: "CSS", icon: <FaCss3 /> },
                { name: "JavaScript", icon: <FaJs /> },
                { name: "React", icon: <FaReact /> },
                { name: "NextJS", icon: <SiNextdotjs /> }
            ]
        },
        {
            title: "Backend Skills",
            description: "I have built APIs, handled server-side logic, and integrated databases for several projects. These backend skills help me manage data effectively and ensure systems are stable, secure, and scalable.",
            skillList: [
                { name: "Python", icon: <FaPython /> },
                { name: "Node", icon: <SiNodedotjs /> },
                { name: "Java", icon: <FaJava /> },
                { name: "C++", icon: <SiCplusplus /> },
                { name: "Docker", icon: <SiDocker /> }
            ]
        },
        {
            title: "Database Skills",
            description: "I have worked with relational databases like MySQL and NoSQL databases like MongoDB to store and retrieve data in web applications. These skills enable me to design efficient database schemas and maintain data integrity.",
            skillList: [
                { name: "MongoDB", icon: <SiMongodb /> },
                { name: "MySQL", icon: <SiMysql /> },
                { name: "PostgreSQL", icon: <SiPostgresql /> }
            ]
        },
        {
            title: "DevOps & Cloud Skills",
            description: "I have used Docker for deploying containerized applications and gained familiarity with AWS for cloud hosting and service management. These skills help me automate deployments and ensure system reliability in production environments.",
            skillList: [
                { name: "Docker", icon: <SiDocker /> },
                { name: "Cloud AWS", icon: <FaAws /> }
            ]
        },
        {
            title: "Version Control Skills",
            description: "I have used GitHub to manage source code, track changes, and collaborate with team members. This skill enables me to work efficiently in team projects and ensure well-organized source code management.",
            skillList: [
                { name: "Github", icon: <SiGithub /> }
            ]
        }
    ]
};
const Resume = () =>{
    return <motion.div
        initial={{ opacity: 0 }}
        animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
        }}
        className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
        <div className="container mx-auto">
            <Tabs 
                defaultValue='experience' 
                className='flex flex-col xl:flex-row gap-[60px]'
            >
                <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                    <TabsTrigger value="experience">Experience</TabsTrigger>
                    <TabsTrigger value="education">Education</TabsTrigger>
                    <TabsTrigger value="skillList">Skills</TabsTrigger>
                    <TabsTrigger value="about">About me</TabsTrigger>
                </TabsList>
                
                <div className='min-h-[70vh] w-full'>
                    {/* experience */}
                    <TabsContent value="experience" className="w-full">
                        <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                            <h3 className='text-4xl font-bold'>{experience.title}</h3>
                            <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{experience.description}</p>
                            <ScrollArea className='h-[400px]'>
                                <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                                    {experience.items.map((item,index)=>
                                    {
                                        return (
                                            <li key={index} className="cursor-pointer bg-[#232329] h-[200px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 hover:bg-black/60 transition-all duration-300">
                                                <Dialog.Root>
                                                    <Dialog.Trigger asChild>
                                                        <div className="w-full h-full flex flex-col justify-center items-center lg:items-start gap-1">
                                                            <span className="text-accent">{item.duration}</span>
                                                            <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                                            
                                                            <div className="flex items-center gap-3">
                                                                <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                                <TooltipProvider duration={100}>
                                                                    <Tooltip>
                                                                        <a href={item.Linkcompany} target="_blank" rel="noopener noreferrer">
                                                                            <TooltipTrigger className="text-white/60 hover:text-accent focus:text-accent transition-all duration-300">
                                                                                {item.company}
                                                                            </TooltipTrigger>
                                                                        </a>
                                                                        <TooltipContent>
                                                                            <p>{item.Linkcompany}</p>
                                                                        </TooltipContent>
                                                                    </Tooltip>
                                                                </TooltipProvider>
                                                            </div>
                                            
                                                            <div className="flex items-center gap-3">
                                                                <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                                <p className="text-white/60">{item.workMode}</p>
                                                            </div>
                                                        </div>
                                                    </Dialog.Trigger>
                                                    {/* Popup (Modal) */}
                                                    <Dialog.Portal>
                                                        {/* Background Overlay */}
                                                        <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm" />

                                                        {/* Dialog Content */}
                                                        <Dialog.Content className="fixed top-1/2 left-1/2 w-[90%] max-w-lg p-6 bg-[#232329] rounded-xl transform -translate-x-1/2 -translate-y-1/2
                                                            max-h-[80vh] overflow-y-auto">
                                                            
                                                            {/* Tiêu đề với vị trí + Tooltip cho công ty */}
                                                            <Dialog.Title className="text-accent font-bold flex flex-col items-center text-center">
                                                                {/* Dòng 1: Tên công ty (to hơn 1.4 lần) */}
                                                                <TooltipProvider duration={100}>
                                                                    <Tooltip>
                                                                        <a href={item.Linkcompany} target="_blank" rel="noopener noreferrer">
                                                                            <TooltipTrigger className="text-3xl lg:text-3xl font-bold transition-colors duration-300 hover:text-white/80">
                                                                                {item.company}
                                                                            </TooltipTrigger>
                                                                        </a>
                                                                        <TooltipContent>
                                                                            <p>{item.Linkcompany}</p>
                                                                        </TooltipContent>
                                                                    </Tooltip>
                                                                </TooltipProvider>


                                                                {/* Dòng 2: Vị trí công việc (nhỏ hơn 1.4 lần) */}
                                                                <span className="text-lg lg:text-xl text-white/80 mt-1 text-center">{item.position}</span>
                                                            </Dialog.Title>


                                                            
                                                            {/* Thông tin thời gian + hình thức làm việc */}
                                                            <Dialog.Description className="mt-2 text-white/60 text-sm text-center">
                                                                {item.duration} - {item.workMode}
                                                            </Dialog.Description>


                                                            {/* Mô tả công việc */}
                                                            <h4 className="mt-4 text-accent text-lg font-bold">Description</h4>
                                                            <ul className="mt-3 list-disc list-inside text-white/60 space-y-2">
                                                                {item.description.map((desc, i) => (
                                                                    <li key={i} className="leading-relaxed">{desc}</li>
                                                                ))}
                                                            </ul>

                                                            {/* Nút đóng */}
                                                            <Dialog.Close asChild>
                                                                <button className="mt-4 px-4 py-2 bg-accent text-white rounded-md hover:bg-opacity-80">
                                                                    Close
                                                                </button>
                                                            </Dialog.Close>
                                                        </Dialog.Content>
                                                    </Dialog.Portal>



                                                </Dialog.Root>
                                            </li>
                                            
                                        )
                                    })}
                                </ul>
                            </ScrollArea>
                        </div>
                    </TabsContent>
                    {/* education */}
                    <TabsContent value="education" className="w-full">
                        <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                            <h3 className='text-4xl font-bold'>{education.title}</h3>
                            <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{education.description}</p>
                            <ScrollArea className='h-[400px]'>
                                <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                                    {education.items.map((item,index)=>
                                    {
                                        return (
                                        <li key={index}
                                            className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'
                                        >
                                            <span className='text-accent'>{item.duration}</span>
                                            <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.degree}</h3>
                                            <div className='flex items-center gap-3'>
                                                <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                                                <TooltipProvider duration={100}>
                                                    <Tooltip>
                                                        <a href={item.website} target="_blank" rel="noopener noreferrer">
                                                            <TooltipTrigger className="text-white/60 hover:text-accent focus:text-accent transition-all duration-300">
                                                                {item.instituation}
                                                            </TooltipTrigger>
                                                        </a>
                                                        <TooltipContent>
                                                            <p>{item.website}</p>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>

                                            </div>
                                        </li>)
                                    })}
                                </ul>
                            </ScrollArea>
                        </div>
                    </TabsContent>
                    {/* skills */}
                    <TabsContent value="skillList" className="w-full h-full">
                        <div className='flex flex-col gap-[30px]'>
                            {
                                skillList.categories.map((category,index)=>{
                                    return(
                                        <div key={index} className='flex flex-col gap-[30px] text-center xl:text-left'>
                                            <h3 className='text-4xl font-bold'>{category.title}</h3>
                                            <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                                                {category.description}
                                            </p>
                                            <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]'>
                                                {category.skillList.map((skill,index)=>{
                                                    return (<li key={index}>
                                                        <TooltipProvider duration={100}>
                                                            <Tooltip>
                                                                <TooltipTrigger className='w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group'>
                                                                    <div className='text-6xl group-hover:text-accent transition-all duration-300'>
                                                                        {skill.icon}
                                                                    </div>
                                                                </TooltipTrigger>
                                                                <TooltipContent>
                                                                    <p className='capitalize'>{skill.name}</p>                                                    
                                                                </TooltipContent>
                                                            </Tooltip>
                                                        </TooltipProvider>
                                                    </li>)
                                                })}
                                            </ul>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </TabsContent>
                    {/* about me */}
                    <TabsContent value="about" className="w-full text-center xl:text-left">
                        <div className='flex flex-col gap-[30px]'>
                            <h3 className='text-4xl font-bold'>{about.title}</h3>
                            <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{about.description}</p>
                            <ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0'>
                                {about.info.map((item,index)=>{
                                    return(
                                        <li key={index} className='flex items-center justify-center xl:justify-start gap-4'>
                                            <span className='text-white/60'>{item.fieldname}: </span>
                                            <span className='text-xl'>{item.fieldvalue}</span>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </TabsContent>

                </div>
            </Tabs>
        </div>
    </motion.div>
}

export default Resume;  