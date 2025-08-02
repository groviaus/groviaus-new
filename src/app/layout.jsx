import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
// import BrandClarification from "@/components/BrandClarification";
// import GoogleBusiness from "@/components/GoogleBusiness";
import BrandMentionTracker from "@/components/BrandMentionTracker";
import Header from "@/components/Header";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default:
      "GroViaUs - Best Digital Marketing & EdTech Agency in Delhi | Grow Via Us",
    template: "%s | GroViaUs - Grow Via Us",
  },
  description:
    "GroViaUs is a Delhi-based digital marketing and EdTech agency helping businesses Grow Via Us. We offer SEO, website development, Google Ads, and lead generation services. Get guaranteed results with our proven strategies.",
  keywords: [
    "grow via us",
    "growviaus",
    "gro via us",
    "grow via us agency",
    "growviaus agency",
    "gro via us agency",
    "grow via us digital agency",
    "growviaus digital agency",
    "gro via us digital agency",
    "grow via us marketing agency",
    "growviaus marketing agency",
    "gro via us marketing agency",
    "grow via us delhi",
    "growviaus delhi",
    "gro via us delhi",
    "grow via us digital marketing",
    "growviaus digital marketing",
    "gro via us digital marketing",
    "grow via us seo",
    "growviaus seo",
    "gro via us seo",
    "grow via us website development",
    "growviaus website development",
    "gro via us website development",
    "grow via us google ads",
    "growviaus google ads",
    "gro via us google ads",
    "grow via us lead generation",
    "growviaus lead generation",
    "gro via us lead generation",
    "grow via us edtech",
    "growviaus edtech",
    "gro via us edtech",
    "best digital marketing agency in Delhi",
    "website development company India",
    "top edtech agency",
    "SEO services for startups",
    "lead generation company Delhi",
    "Google Ads agency",
    "social media marketing India",
    "eLearning development company",
    "affordable web development Delhi",
    "Groviaus",
    "groviaus",
    "groviaus agency",
    "Grovius",
    "growvius",
    "groviaus digital",
    "groviaus digital agency",
    "groviaus digital marketing",
    "groviaus digital marketing agency",
    "groviaus digital marketing agency in delhi",
    "digital marketing agency delhi ncr",
    "SEO agency delhi ncr",
    "web development agency delhi ncr",
    "google ads agency delhi",
    "lead generation agency delhi",
    "edtech agency delhi",
    "startup digital marketing delhi",
    "business growth agency delhi",
    "online marketing agency delhi",
    "digital transformation agency delhi",
  ].filter((value, index, self) => self.indexOf(value) === index),
  openGraph: {
    title:
      "GroViaUs - Best Digital Marketing & EdTech Agency in Delhi | Grow Via Us",
    description:
      "GroViaUs helps businesses Grow Via Us through proven SEO, website development, and digital marketing strategies. Delhi's leading digital agency for guaranteed results.",
    url: "https://www.groviaus.com",
    siteName: "GroViaUs - Grow Via Us",
    images: [
      {
        url: "https://www.groviaus.com/icon.png",
        width: 1200,
        height: 630,
        alt: "GroViaUs - Grow Via Us Digital Marketing Agency in Delhi",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GroViaUs - Grow Via Us Digital Marketing Agency in Delhi",
    description:
      "GroViaUs helps businesses Grow Via Us through SEO, web development, and digital marketing. Delhi's trusted agency for guaranteed growth and results.",
    images: ["https://www.groviaus.com/icon.png"],
  },
  metadataBase: new URL("https://www.groviaus.com"),
  icons: {
    icon: "/favicon.ico?v=3",
    shortcut: "/favicon.ico?v=3",
    apple: "/apple-touch-icon.png?v=3",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    interactiveWidget: "resizes-content",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "GroViaUs",
  alternateName: ["Grow Via Us", "GrowViaUs", "Gro Via Us"],
  url: "https://www.groviaus.com",
  logo: "https://www.groviaus.com/logo.png",
  description:
    "GroViaUs is a full-service digital marketing and EdTech agency based in Delhi. We help you Grow Via Us through website development, SEO services, lead generation, AI video production, social media marketing, and Google & Meta Ads — tailored for startups, educators, and businesses in India.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Delhi",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+919310156995",
    contactType: "customer service",
    areaServed: "IN",
    availableLanguage: "English",
  },
  sameAs: [
    "https://www.linkedin.com/company/groviaus",
    "https://twitter.com/groviaus",
    "https://www.facebook.com/groviaus",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Digital Marketing Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "SEO Services",
          description:
            "Search Engine Optimization to help your business Grow Via Us",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Website Development",
          description:
            "Custom website development to help your business Grow Via Us",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Google Ads Management",
          description: "PPC advertising to help your business Grow Via Us",
        },
      },
    ],
  },
};

const structuredDataBrand = {
  "@context": "https://schema.org",
  "@type": "Brand",
  name: "GroViaUs",
  alternateName: [
    "Grovia",
    "Grovius",
    "Growvius",
    "Groviaus",
    "GroviaUs",
    "Grovius Digital",
    "Grow Via Us",
    "GrowViaUs",
    "Gro Via Us",
    "GrowViaUs Agency",
    "Grow Via Us Agency",
    "Gro Via Us Agency",
  ],
  description:
    "Digital Marketing & EdTech Agency in Delhi - We help you Grow Via Us. Specializing in SEO, website development, and lead generation services.",
  logo: "https://www.groviaus.com/logo.png",
  slogan: "Best Digital Marketing & EdTech Agency in Delhi - Grow Via Us",
};

const structuredDataLocal = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "GroViaUs Agency - Grow Via Us",
  alternateName: [
    "Grow Via Us Agency",
    "GrowViaUs Agency",
    "Gro Via Us Agency",
  ],
  image: "https://www.groviaus.com/logo.png",
  "@id": "https://www.groviaus.com",
  url: "https://www.groviaus.com",
  telephone: "+919310156995",
  email: "hello@groviaus.com",
  description:
    "GroViaUs is a Delhi-based digital marketing agency helping businesses Grow Via Us through SEO, website development, and digital marketing services.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "11th Floor, Bhutani City Center, Sector 32",
    addressLocality: "NOIDA",
    postalCode: "201301",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 28.57405315949912,
    longitude: 77.3535590891702,
  },
  areaServed: [
    {
      "@type": "City",
      name: "Delhi",
    },
    {
      "@type": "City",
      name: "Noida",
    },
    {
      "@type": "City",
      name: "Gurgaon",
    },
    {
      "@type": "Country",
      name: "India",
    },
  ],
  serviceArea: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: 28.57405315949912,
      longitude: 77.3535590891702,
    },
    geoRadius: "50000",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "10:00",
    closes: "20:00",
  },
  priceRange: "₹₹₹",
  paymentAccepted: ["Cash", "Credit Card", "Bank Transfer"],
  currenciesAccepted: "INR",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Digital Marketing Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "SEO Services",
          description:
            "Search Engine Optimization to help your business Grow Via Us",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Website Development",
          description:
            "Custom website development to help your business Grow Via Us",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Google Ads Management",
          description: "PPC advertising to help your business Grow Via Us",
        },
      },
    ],
  },
};

const structuredDataFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What digital marketing services does GroViaUs offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "GroViaUs offers SEO, Google Ads (PPC), content marketing, social media marketing, and performance-driven lead generation strategies tailored for startups, businesses, and educators.",
      },
    },
    {
      "@type": "Question",
      name: "Is GroViaUs a digital marketing agency based in Delhi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, GroViaUs is a Delhi-based digital agency providing marketing, SEO, development, and EdTech solutions for clients across India.",
      },
    },
    {
      "@type": "Question",
      name: "Does GroViaUs provide website development services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. GroViaUs builds responsive websites, SaaS platforms, and custom web applications using modern technologies like React, Next.js, Node.js, and Tailwind CSS.",
      },
    },
    {
      "@type": "Question",
      name: "Does GroViaUs help EdTech companies or training institutes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. GroViaUs specializes in building scalable EdTech platforms, LMS systems, and content-rich portals for educators, coaching institutes, and online academies.",
      },
    },
    {
      "@type": "Question",
      name: "Can I hire GroViaUs for SEO services in Delhi NCR?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. GroViaUs offers local SEO, technical SEO, and keyword-optimized content to help Delhi-based businesses rank higher on Google and drive organic traffic.",
      },
    },
    {
      "@type": "Question",
      name: "What industries does GroViaUs serve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "GroViaUs primarily works with startups, coaching institutes, training centers, digital product companies, and small businesses across India.",
      },
    },
    {
      "@type": "Question",
      name: "What technologies does GroViaUs use for web development?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "GroViaUs builds modern web applications using React.js, Next.js, Node.js, Tailwind CSS, TypeScript, MongoDB, PostgreSQL, and other scalable frameworks.",
      },
    },
    {
      "@type": "Question",
      name: "Is GroViaUs a grocery store?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No, GroViaUs is not related to grocery stores. We're a digital marketing and EdTech agency based in Delhi. Our name means 'Grow Via Us'. Some grocery stores like Grocious have similar sounding names, but we specialize in SEO, website development, and digital marketing services.",
      },
    },
    {
      "@type": "Question",
      name: "How do you pronounce GroViaUs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can pronounce it by breaking it down: 'Grow' + 'Via' + 'Us'. Phonetically, that's 'Grow-Vee-uh-Us'. Our name reflects our mission to help you Grow Via Us.",
      },
    },
    {
      "@type": "Question",
      name: "What does Grow Via Us mean?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Grow Via Us means we help your business grow through our digital marketing services. Our name GroViaUs is a combination of 'Grow' + 'Via' + 'Us', representing our mission to help businesses grow via our expertise in SEO, web development, and digital marketing.",
      },
    },
    {
      "@type": "Question",
      name: "Is GroViaUs the same as Grow Via Us?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, GroViaUs is our brand name and 'Grow Via Us' is our mission statement. Both refer to the same Delhi-based digital marketing agency that helps businesses grow through proven digital marketing strategies.",
      },
    },
    {
      "@type": "Question",
      name: "How can GroViaUs help my business grow?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "GroViaUs helps your business grow through comprehensive digital marketing services including SEO optimization, website development, Google Ads management, lead generation, and social media marketing. Our proven strategies deliver guaranteed results.",
      },
    },
    {
      "@type": "Question",
      name: "Why choose GroViaUs for digital marketing in Delhi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Choose GroViaUs because we're Delhi's trusted digital marketing agency with proven results. We help businesses Grow Via Us through data-driven strategies, transparent reporting, and guaranteed ROI. Our local expertise combined with global best practices ensures your success.",
      },
    },
  ],
};

const structuredDataServices = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Service",
        name: "SEO Services",
        description:
          "Technical SEO, local SEO, and content optimization for startups and businesses in Delhi",
        serviceType: "Search Engine Optimization",
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Service",
        name: "Website Development",
        description:
          "Responsive websites, SaaS platforms, and custom web applications using React and Next.js",
        serviceType: "Web Development",
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "Service",
        name: "Google Ads Management",
        description:
          "Performance-driven Google Ads campaigns for lead generation and brand visibility.",
        serviceType: "Pay Per Click Advertising",
      },
    },
    {
      "@type": "ListItem",
      position: 4,
      item: {
        "@type": "Service",
        name: "Social Media Marketing",
        description:
          "Engaging social media strategies for brands on platforms like Instagram, Facebook, and LinkedIn.",
        serviceType: "Social Media Marketing",
      },
    },
    {
      "@type": "ListItem",
      position: 5,
      item: {
        "@type": "Service",
        name: "EdTech Solutions",
        description:
          "Building custom Learning Management Systems (LMS) and educational platforms.",
        serviceType: "Education Technology",
      },
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* JSON-LD Structured Data */}
        <Script
          id="structured-data"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />
        <Script
          id="structured-data-faq"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredDataFAQ).replace(/</g, "\\u003c"),
          }}
        />
        <Script
          id="structured-data-brand"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredDataBrand).replace(
              /</g,
              "\\u003c"
            ),
          }}
        />
        <Script
          id="local-business-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredDataLocal).replace(
              /</g,
              "\\u003c"
            ),
          }}
        />
        <Script
          id="service-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredDataServices).replace(
              /</g,
              "\\u003c"
            ),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {/* <BrandClarification /> */}
        {/* <GoogleBusiness /> */}
        {children}
        <BrandMentionTracker />
      </body>
    </html>
  );
}
