"use client";
import { Facebook, Instagram, Twitter, Youtube, ArrowBigUp } from "lucide-react";
import CircularText from "../../../yes/CircularText/CircularText";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="sm:min-h-screen flex py-10 flex-col justify-between relative overflow-hidden z-[110] rounded-t-3xl">
      {/* Textured background overlay */}
      <div
        className="absolute inset-0 z-10 "
        style={{
          backgroundImage: `url('/images/footer/footerBg.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Main content */}
      <div className="relative z-10 flex-1 container max-w-7xl mx-auto px-6 sm:pt-20  sm:pb-10 flex flex-col justify-center">
        <div className="flex  justify-between items-start">
          <div className="max-w-3xl">
            <h1 className="text-white mb-5 text-3xl md:text-7xl font-bold tracking-wider leading-tight">
              LET'S DISCUSS A<br />
              PROJECT TOGETHER
            </h1>
          </div>

          <div className="hidden sm:block">
            <CircularText
              text="Groviaus*Digital*Marketing*"
              onHover="goBonkers"
              spinDuration={50}
              className="custom-class bg-white !w-[150px] !h-[150px] sm:!w-[200px] sm:!h-[200px]"
              textClassName="font-semibold text-stone-800 text-lg sm:text-2xl"
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 max-w-7xl container mx-auto px-6 py-8 border-t border-gray-800">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-white text-3xl font-bold tracking-widest">
              Groviaus
            </h2>
          </div>

          <div className="flex space-x-6 mb-6 md:mb-0">
            {[
              { icon: <Facebook size={20} />, href: "https://www.facebook.com/groviaus" },
              { icon: <Instagram size={20} />, href: "https://www.instagram.com/groviaus/" },
              { icon: <Twitter size={20} />, href: "https://x.com/groviaus" },
              { icon: <Youtube size={20} />, href: "https://www.youtube.com/@groviaus" }
            ].map((item, i) => (
              <a
                key={i}
                target="_blank"
                href={item.href}
                className="text-white hover:text-violet transition-colors"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-col md:flex-row justify-between items-center">
          <nav>
            <ul className="flex flex-wrap space-x-8">
              <li>
                <Link
                  href="/"
                  className="text-white hover:text-violet transition-colors"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#work"
                  className="text-white hover:text-violet transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#work').scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Work
                </Link>
              </li>
              {/* <li>
                <a
                  href="#"
                  className="text-white hover:text-violet transition-colors"
                >
                  Blog
                </a>
              </li> */}
              
              <li>
                <Link
                  href="#contact-section"
                  className="text-white hover:text-violet transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          <div className="mt-6 md:mt-0 text-gray-400 text-sm">
            © Groviaus 2025. All rights reserved
            
          </div>
        </div>
      </div>

      {/* Floating action button */}
      <div className="fixed bottom-6 right-6 z-20 cursor-none" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <button className="w-14 h-14 rounded-full bg-violet-400 flex items-center justify-center shadow-lg cursor-none transition-colors animate-bounce">
          <ArrowBigUp className="stroke-white fill-white " size={35} />
        </button>
      </div>
    </div>
  );
}
