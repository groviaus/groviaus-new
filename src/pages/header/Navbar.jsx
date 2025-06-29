"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import imageLoader from "@/lib/imageLoader";
import MobileNavDrawer from "@/components/MobileNavDrawer";

export default function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

  return (
    <>
      <nav className="absolute top-0 left-0 right-0 bg-transparent flex items-center justify-between py-8 px-4 sm:px-6 z-[100]">
        {/* Mobile menu button */}
        <button
          className="sm:hidden p-2 rounded-md hover:bg-gray-100"
          onClick={toggleDrawer}
        >
          {isDrawerOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden sm:flex items-center gap-10">
          <Link
            href="/"
            className="text-gray-800 hover:text-gray-600 text-sm font-medium tracking-wide"
          >
            Home
          </Link>
          <Link
            href="#our-services"
            className="text-gray-800 hover:text-gray-600 text-sm font-medium tracking-wide"
          >
            Services
          </Link>
          <Link
            href="#work"
            className="text-gray-800 hover:text-gray-600 text-sm font-medium tracking-wide"
          >
            Work
          </Link>
          <Link
            href="/brand"
            className="text-gray-800 hover:text-gray-600 text-sm font-medium tracking-wide"
          >
            Our Brand
          </Link>
          {/* <Link
          href="#"
          className="text-gray-800 hover:text-gray-600 text-sm font-medium tracking-wide"
        >
          Blog
        </Link> */}
        </div>

        {/* Logo - Centered */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Link href="/" className="flex items-center">
            <div className="flex items-center">
              <Image
                loader={imageLoader}
                src="/logo.png"
                alt="Groviaus"
                width={180}
                height={180}
              />
              {/* <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-400 to-blue-500 mr-1.5"></div> */}
              {/* <span className="text-xl font-bold tracking-tight">Groviaus</span> */}
            </div>
          </Link>
        </div>

        {/* Contact Link - Desktop */}
        <Link
          href="#contact-section"
          className="hidden sm:block text-gray-800 hover:text-gray-600 text-sm font-medium tracking-wide"
        >
          Contact Us
        </Link>
      </nav>
      <MobileNavDrawer isOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
    </>
  );
}
