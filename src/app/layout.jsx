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
    default: "GroViaUs - Best Digital Marketing & EdTech Agency in Delhi",
    template: "%s | GroViaUs",
  },
  description:
    "GroViaUs is a Delhi-based digital marketing and EdTech agency offering SEO, website development, AI-driven video production, Google Ads, and lead generation services tailored for startups, educators, and businesses.",
  keywords: [
    "best digital marketing agency in Delhi",
    "website development company India",
    "top edtech agency",
    "SEO services for startups",
    "lead generation company Delhi",
    "Google Ads agency",
    "social media marketing India",
    "eLearning development company",
    "affordable web development Delhi",
    "best digital marketing agency in Delhi",
    "website development company India",
    "top edtech agency",
    "SEO services for startups",
    "lead generation company Delhi",
    "Google Ads agency",
    "social media marketing India",
    "eLearning development company",
    "affordable web development Delhi",
    "GroViaUs",
    "Groviaus",
    "groviaus",
  ].filter((value, index, self) => self.indexOf(value) === index),
  openGraph: {
    title: "GroViaUs - Best Digital Marketing & EdTech Agency in Delhi",
    description:
      "India's top digital and EdTech agency for SEO, lead generation, web design, and Google Ads. We help startups and businesses grow online.",
    url: "https://www.groviaus.com",
    siteName: "GroViaUs",
    images: [
      {
        url: "https://www.groviaus.com/logo.png",
        width: 1200,
        height: 630,
        alt: "GroViaUs - Best digital marketing agency in Delhi",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GroViaUs - Website Development & Lead Gen Agency in India",
    description:
      "GroViaUs provides web development, SEO, digital ads, and EdTech services for educators and startups in Delhi and across India.",
    images: ["https://www.groviaus.com/logo.png"],
  },
  metadataBase: new URL("https://www.groviaus.com"),
  icons: {
    icon: "/favicon.ico?v=2",
    shortcut: "/favicon.ico?v=2",
    apple: "/apple-touch-icon.png?v=2",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    interactiveWidget: "resizes-content",
  },
  // alternates: {
  //   canonical: "https://www.groviaus.com",
  // },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "GroViaUs",
  url: "https://www.groviaus.com",
  logo: "https://www.groviaus.com/logo.png",
  description:
    "GroViaUs is a full-service digital marketing and EdTech agency based in Delhi. We specialize in website development, SEO services, lead generation, AI video production, social media marketing, and Google & Meta Ads — tailored for startups, educators, and businesses in India.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Delhi",
    addressCountry: "IN",
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
  ],
  description: "Digital Marketing & EdTech Agency in Delhi",
  logo: "https://www.groviaus.com/logo.png",
  slogan: "Best Digital Marketing & EdTech Agency in Delhi",
};

const structuredDataLocal = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "GroViaUs",
  image: "https://www.groviaus.com/logo.png",
  "@id": "https://www.groviaus.com",
  url: "https://www.groviaus.com",
  telephone: "+91-0000000000",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Delhi",
    addressLocality: "Delhi",
    postalCode: "110001",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 28.6139,
    longitude: 77.209,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
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
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredDataLocal),
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
