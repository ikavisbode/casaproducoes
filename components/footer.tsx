import Link from "next/link";
import { Instagram, Linkedin, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <div
      className="relative h-[400px] sm:h-[600px] lg:h-[800px] max-h-[800px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative h-[calc(100vh+400px)] sm:h-[calc(100vh+600px)] lg:h-[calc(100vh+800px)] -top-[100vh]">
        <div className="h-[400px] sm:h-[600px] lg:h-[800px] sticky top-[calc(100vh-400px)] sm:top-[calc(100vh-600px)] lg:top-[calc(100vh-800px)]">
          <div className="bg-neutral-900 py-4 sm:py-6 lg:py-8 px-4 sm:px-6 h-full w-full flex flex-col justify-end">
            <div className="flex gap-4 md:gap-8 sm:gap-12 lg:gap-20 md:px-6 mb-4 sm:mb-6 lg:mb-10">
              <a
                href="https://www.youtube.com/@ProduçõesCasa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-neutral-400 transition-colors duration-300 text-sm sm:text-base"
              >
                <Youtube size={32} className="inline mb-1 mr-2" />
              </a>
              <a
                href="https://www.linkedin.com/company/casa-produ%C3%A7%C3%B5es/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-neutral-400 transition-colors duration-300 text-sm sm:text-base"
              >
                <Linkedin size={32} className="inline mb-1 mr-2" />
              </a>
              <a
                href="https://www.instagram.com/producoescasa/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-neutral-400 transition-colors duration-300 text-sm sm:text-base"
              >
                <Instagram size={32} className="inline mb-1 mr-2" />
              </a>
            </div>
            <div>
              <img
                src="/logo-branco-1000.png"
                srcSet="/logo-branco-1000.png 1000w, /logo-branco-1920.png 1920w"
                alt="Casa Produções"
                sizes="(max-width: 600px) 100%, 1000px"
              />
            </div>
            {/* <h1 className="text-[14vw] sm:text-[16vw] lg:text-[14vw] text-white font-bold tracking-tight py-12">
              CASA<br/><span className="absolute translate-y-[-40%] md:translate-y-[-50%]">PRODUÇÕES</span>
            </h1> */}
            <p className="text-left md:text-right text-white text-sm sm:text-base">
              ©copyright Casa Produções
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
