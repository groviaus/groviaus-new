"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Instagram, Twitter, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const navigationItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "#our-services" },
  { label: "Work", href: "#work" },
  { label: "Our Brand", href: "/brand" },
  // { label: "Portfolio", href: "#portfolio" },

  { label: "About", href: "#about-us" },
  // { label: "Blog", href: "#" },
  { label: "Contact", href: "#contact-section" },
];

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

export default function MobileNavDrawer({ isOpen, toggleDrawer }) {
  const drawerVariants = {
    closed: {
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  const itemVariants = {
    closed: {
      y: 30,
      opacity: 0,
    },
    open: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        delay: i * 0.08 + 0.2,
      },
    }),
  };

  const closeButtonVariants = {
    closed: {
      rotate: -90,
      opacity: 0,
    },
    open: {
      rotate: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25,
        delay: 0.1,
      },
    },
  };

  return (
    <>
      {/* Full Screen Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={drawerVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="drawer fixed inset-0 bg-black z-[99999999999]  overflow-hidden"
          >
            {/* Close Button */}
            <motion.div
              variants={closeButtonVariants}
              initial="closed"
              animate="open"
              className="absolute top-4 sm:top-6 right-4 sm:right-6 z-60"
            >
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleDrawer}
                className="hover:bg-white/10 p-2 sm:p-3 rounded-full"
              >
                <X className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-white" />
              </Button>
            </motion.div>

            {/* GroViaUs Branding */}
            {/* <motion.div
              variants={itemVariants}
              initial="closed"
              animate="open"
              custom={-1}
              className="absolute top-4 sm:top-6 left-4 sm:left-6"
            >
              <img
                src="/logo.png"
                alt="Groviaus"
                width={180}
                height={180}
              />
            </motion.div> */}

            {/* Main Content Container */}
            <div className="h-screen flex flex-col justify-center items-center px-6 sm:px-8 py-16 sm:pt-48">
              {/* Navigation Menu */}
              <nav className="text-center mb-12 sm:mb-16">
                <ul className="space-y-3 sm:space-y-4 md:space-y-6">
                  {navigationItems.map((item, index) => (
                    <motion.li
                      key={item.label}
                      variants={itemVariants}
                      initial="closed"
                      animate="open"
                      custom={index}
                    >
                      <a
                        href={item.href}
                        className="block text-center py-2 sm:py-3"
                        onClick={toggleDrawer}
                      >
                        <motion.span
                          className="text-4xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white hover:text-transparent hover:bg-gradient-to-r hover:from-orange-500 hover:to-violet-600 hover:bg-clip-text transition-all duration-500 tracking-tight leading-none"
                          whileHover={{ scale: 1.05 }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 25,
                          }}
                        >
                          {item.label.toUpperCase()}
                        </motion.span>
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              {/* Contact Section */}
              {/* <motion.div
                variants={itemVariants}
                initial="closed"
                animate="open"
                custom={navigationItems.length}
                className="text-center mb-8 sm:mb-12"
              >
                <h3 className="text-sm sm:text-base md:text-lg font-bold text-white/80 mb-4 sm:mb-6 tracking-widest">
                  GET IN TOUCH
                </h3>
                <div className="space-y-2 sm:space-y-3">
                  <motion.a
                    href="tel:+1234567890"
                    className="block text-sm sm:text-base md:text-lg font-semibold text-gray-300 hover:text-orange-500 transition-colors"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  >
                    +1 (234) 567-890
                  </motion.a>
                  <motion.a
                    href="mailto:hello@groviaus.com"
                    className="block text-sm sm:text-base md:text-lg font-semibold text-gray-300 hover:text-violet-500 transition-colors"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  >
                    hello@groviaus.com
                  </motion.a>
                </div>
              </motion.div> */}

              {/* Social Links */}
              {/* <motion.div
                variants={itemVariants}
                initial="closed"
                animate="open"
                custom={navigationItems.length + 1}
                className="flex justify-center space-x-4 sm:space-x-6 mb-8 sm:mb-12"
              >
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className="p-3 sm:p-4 rounded-full border border-white/20 hover:border-orange-500 hover:bg-orange-500/10 transition-all duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  >
                    <social.icon className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                  </motion.a>
                ))}
              </motion.div> */}

              {/* CTA Button */}
              {/* <motion.div
                variants={itemVariants}
                initial="closed"
                animate="open"
                custom={navigationItems.length + 2}
              >
                <motion.button
                  className="px-6 sm:px-8 md:px-10 py-3 sm:py-4 bg-gradient-to-r from-orange-500 to-violet-600 text-white font-black text-sm sm:text-base md:text-lg tracking-wide rounded-full hover:shadow-2xl transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  onClick={toggleDrawer}
                >
                  START PROJECT
                </motion.button>
              </motion.div> */}
            </div>

            {/* Footer */}
            {/* <motion.div
              variants={itemVariants}
              initial="closed"
              animate="open"
              custom={navigationItems.length + 3}
              className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2"
            >
              <p className="text-gray-500 font-bold tracking-widest text-xs">
                © 2024 GROVIAUS
              </p>
            </motion.div> */}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
