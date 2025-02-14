"use client";
import {FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaPython, FaJava,FaAws} from 'react-icons/fa'
import {SiNextdotjs,SiCplusplus, SiNodedotjs, SiGithub, SiDocker, SiMongodb, SiMysql,SiPostgresql} from 'react-icons/si'

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

const experience={
    icon:"/public/Image/icons/badge.svg",
    title:"My experience",
    description:"I have six months of experience as a Backend Developer Intern at Fintech Draco Corporation, where I developed ERP software using Python and JavaScript on the Frappe framework. My responsibilities included implementing custom features, building APIs, and integrating payment gateways like ZaloPay, VNPay, and MoMo for secure e-commerce transactions. Additionally, I resolved technical issues, validated data, and customized user interfaces to enhance system functionality and user experience.",
    items:[
        {
            company:"Fintech Draco Corporation",
            position:"Back-End Developer Intern",
            duration:"4/2024 - 10/2024",
        },
    ],
}

const education={
    icon:"/public/Image/icons/cap.svg",
    title:"My education",
    description:"Graduated with a Bachelor of Computer Science from the University of Information Technology - Vietnam National University, Ho Chi Minh City, in 2024. Proficient in Python, JavaScript, Java, and C#, with experience in Node.js, React.js, and managing databases like MySQL, PostgreSQL, and MongoDB. Skilled in modern technologies such as Docker and AWS, with a strong foundation in Computer Science, including Data Structures, Algorithms, NLP, Computer Vision, and Software Engineering.",
    items:[
        {
            instituation:"University of Information Technology - VNUHCM",
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



import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs"
import {Tooltip,TooltipContent,TooltipProvider,TooltipTrigger} from "@/components/ui/tooltip"
import {motion} from "motion/react"
import { ScrollArea } from '@radix-ui/react-scroll-area';
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
                                        <li key={index}
                                            className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'
                                        >
                                            <span className='text-accent'>{item.duration}</span>
                                            <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.position}</h3>
                                            <div className='flex items-center gap-3'>
                                                <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                                                <p className='text-white/60'>{item.company}</p>
                                            </div>
                                        </li>)
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
                                                <p className='text-white/60'>{item.instituation}</p>
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