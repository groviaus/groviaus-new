"use client";

import { useState, useEffect } from "react";
import { Plus, Minus, Sparkles } from "lucide-react";

const faqData = [
  {
    question: "What digital marketing services does GroViaUs offer?",
    answer:
      "GroViaUs offers Website/App Development, SEO, Google Ads (PPC), content marketing, social media marketing, and performance-driven lead generation strategies tailored for startups, businesses, and educators.",
  },
  {
    question: "Is GroViaUs a digital marketing agency based in Delhi?",
    answer:
      "Yes, GroViaUs is a Delhi-based digital agency providing marketing, SEO, development, and EdTech solutions for clients across India.",
  },
  {
    question: "Does GroViaUs provide website development services?",
    answer:
      "Yes. GroViaUs builds responsive websites, SaaS platforms, and custom web applications using modern technologies like React, Next.js, Node.js, and Tailwind CSS.",
  },
  {
    question: "Does GroViaUs help EdTech companies or training institutes?",
    answer:
      "Absolutely. GroViaUs specializes in building scalable EdTech platforms, LMS systems, and content-rich portals for educators, coaching institutes, and online academies.",
  },
  {
    question: "Can I hire GroViaUs for SEO services in Delhi NCR?",
    answer:
      "Yes. GroViaUs offers local SEO, technical SEO, and keyword-optimized content to help Delhi-based businesses rank higher on Google and drive organic traffic.",
  },
  {
    question: "What industries does GroViaUs serve?",
    answer:
      "GroViaUs primarily works with startups, coaching institutes, training centers, digital product companies, and small businesses across India.",
  },
  {
    question: "What technologies does GroViaUs use for web development?",
    answer:
      "GroViaUs builds modern web applications using React.js, Next.js, Node.js, Tailwind CSS, TypeScript, MongoDB, PostgreSQL, and other scalable frameworks.",
  },
];

// Floating particles component
function FloatingParticles() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 4,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute w-1 h-1 bg-violet-400/20 rounded-full animate-pulse"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            animationDelay: `${particle.delay}s`,
            animationDuration: "4s",
          }}
        />
      ))}
    </div>
  );
}

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(-1);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="h-max bg-gray-900 relative overflow-hidden z-[99] rounded-t-3xl -mb-10">
      {/* Subtle dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800" />

      {/* Floating particles */}
      <FloatingParticles />

      {/* Main content */}
      <div className="relative z-10 py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Enhanced Header */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 group">
              <div className="w-8 sm:w-12 h-0.5 bg-gradient-to-r from-transparent via-violet-500 to-transparent group-hover:via-violet-400 transition-all duration-500"></div>
              <div className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 backdrop-blur-sm">
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-violet-400 animate-pulse" />
                <span className="text-violet-300 font-semibold text-sm sm:text-lg tracking-wide">
                  FAQs
                </span>
              </div>
              <div className="w-8 sm:w-12 h-0.5 bg-gradient-to-r from-transparent via-violet-500 to-transparent group-hover:via-violet-400 transition-all duration-500"></div>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-violet-200 to-white mb-3 sm:mb-4 leading-tight px-4">
              Questions?{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 animate-pulse">
                Look here.
              </span>
            </h1>

            <p className="text-gray-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed px-4">
              Find answers to the most commonly asked questions about our
              services and processes.
            </p>
          </div>

          {/* Enhanced FAQ Items */}
          <div className="space-y-4 sm:space-y-6">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className={`group relative rounded-2xl sm:rounded-3xl transition-all duration-500 transform hover:scale-[1.01] sm:hover:scale-[1.02] ${
                  openIndex === index
                    ? "bg-gradient-to-r from-violet-600 via-purple-600 to-violet-600 shadow-2xl shadow-violet-500/25"
                    : "bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-violet-500/30 hover:bg-gray-800/70"
                }`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(-1)}
              >
                {/* Glow effect for open item */}
                {openIndex === index && (
                  <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 via-purple-600 to-violet-600 rounded-2xl sm:rounded-3xl blur opacity-30 animate-pulse" />
                )}

                {/* Hover glow effect */}
                {hoveredIndex === index && openIndex !== index && (
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-violet-600/20 via-purple-600/20 to-violet-600/20 rounded-2xl sm:rounded-3xl blur opacity-50 transition-opacity duration-300" />
                )}

                <div className="relative">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-4 py-4 sm:px-6 sm:py-6 md:px-8 md:py-8 lg:px-10 lg:py-10 text-left flex items-center justify-between group/button"
                  >
                    <h3
                      className={`text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold pr-3 sm:pr-4 md:pr-6 transition-all duration-300 leading-tight ${
                        openIndex === index
                          ? "text-white"
                          : "text-gray-200 group-hover:text-white"
                      }`}
                    >
                      {faq.question}
                    </h3>

                    <div
                      className={`flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-xl sm:rounded-2xl flex items-center justify-center transition-all duration-300 ${
                        openIndex === index
                          ? "bg-white/20 text-white shadow-lg backdrop-blur-sm rotate-180"
                          : hoveredIndex === index
                          ? "bg-violet-500 text-white shadow-lg shadow-violet-500/50 scale-110"
                          : "bg-violet-600/80 text-white group-hover/button:bg-violet-500 group-hover/button:scale-110"
                      }`}
                    >
                      {openIndex === index ? (
                        <Minus className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 transition-transform duration-300" />
                      ) : (
                        <Plus className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 transition-transform duration-300" />
                      )}
                    </div>
                  </button>

                  {/* Enhanced answer section */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      openIndex === index
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-4 pb-4 sm:px-6 sm:pb-6 md:px-8 md:pb-8 lg:px-10 lg:pb-10">
                      <div className="pt-4 sm:pt-6 border-t border-white/20">
                        <div className="bg-white/5 rounded-xl sm:rounded-2xl p-4 sm:p-6 backdrop-blur-sm">
                          <p className="text-white/90 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed font-medium">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
