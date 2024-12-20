import Link from "next/link"
import {Tooltip,TooltipContent,TooltipProvider,TooltipTrigger} from "@/components/ui/tooltip"
import {FaGithub,FaLinkedinIn, FaYoutube, FaTwitter,FaFacebook} from "react-icons/fa"
const socials=[
    {icon:<FaGithub/>,path:"https://github.com/anhtuan512002",name:"anhtuan512002"},
    {icon:<FaLinkedinIn/>,path:"https://www.linkedin.com/in/tuan512/",name:"Tuan Nguyen"},
    {icon:<FaFacebook/>,path:"https://www.facebook.com/anh.tuan.nguyen.784032",name:"anh tuan nguyen"},
];
const Social = ({containerStyles, iconStyles}) =>{
    return <div className={containerStyles}>
        {socials.map((item,index)=>{
            return(
                <Link key={index} href={item.path} className={iconStyles}>
                    {/* {item.icon} */}
                    <TooltipProvider duration={100}>
                        <Tooltip>
                            <TooltipTrigger>
                                {item.icon}    
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>{item.name}</p>                                                    
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </Link>
            )
        })}
    </div>
}

export default Social