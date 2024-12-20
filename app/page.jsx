"use client";
import { Button } from "@/components/ui/button";
import Photo from "@/components/ui/Photo";
import Social from "@/components/ui/Social";
import Stats from "@/components/ui/Stats";
import { FiDownload, FileDownload } from "react-icons/fi";
export default function Home() {
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/Resume/Resume.pdf";
    link.download = "CV_Nguyen_Anh_Tuan.pdf";
    link.click();
  };  
  return (
    <section className="h-full">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1 mb-6">
              Hello I'm <br/> <span className="text-accent-DEFAULT">Nguyen Anh Tuan</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
            A dedicated Software Engineer with expertise in developing scalable applications, integrating APIs, and solving complex technical challenges. Passionate about leveraging technology to create efficient and innovative solutions.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button 
                variant="outline" 
                size="lg" 
                className="text-accent-DEFAULT uppercase flex items-center gap-2"
                onClick={handleDownloadCV}
              >
                <span>Download CV</span>
                <FiDownload className="text-xl"/>
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-8"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo/>
          </div>
        </div>
      </div>
      <Stats/>
    </section>
  );
}