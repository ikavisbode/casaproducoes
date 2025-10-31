import Link from "next/link"
import { Instagram, Linkedin, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <div
      className="relative h-[400px] sm:h-[600px] lg:h-[800px] max-h-[800px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative h-[calc(100vh+400px)] sm:h-[calc(100vh+600px)] lg:h-[calc(100vh+800px)] -top-[100vh]">
        <div className="h-[400px] sm:h-[600px] lg:h-[800px] sticky top-[calc(100vh-400px)] sm:top-[calc(100vh-600px)] lg:top-[calc(100vh-800px)]">
          <div className="bg-neutral-900 py-4 sm:py-6 lg:py-8 px-4 sm:px-6 h-full w-full flex flex-col justify-end">
            <div className="flex gap-4 md:gap-8 sm:gap-12 lg:gap-20 md:px-6">
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
            <div className="">
              <h1 className="text-[14vw] sm:text-[16vw] lg:text-[14vw] leading-[0.8] mt-4 sm:mt-6 lg:mt-10 text-white font-bold tracking-tight">
                CASA PRODUÇÕES
              </h1>
              <p className="text-left md:text-right text-white text-sm sm:text-base">©copyright Casa Produções</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
