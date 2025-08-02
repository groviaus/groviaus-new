import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ArrowRight,
  CheckCircle,
  Lightbulb,
  Target,
  TrendingUp,
} from "lucide-react";
import Script from "next/script";

export const metadata = {
  title: "Grow Via Us - Digital Marketing Agency in Delhi | GroViaUs",
  description:
    "Grow Via Us with GroViaUs - Delhi's leading digital marketing agency. We help businesses grow through SEO, website development, Google Ads, and lead generation. Get guaranteed results.",
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
    "grow via us meaning",
    "growviaus meaning",
    "gro via us meaning",
    "grow via us services",
    "growviaus services",
    "gro via us services",
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
    "digital marketing agency delhi",
    "SEO agency delhi",
    "web development agency delhi",
    "google ads agency delhi",
    "lead generation agency delhi",
  ],
  alternates: {
    canonical: "https://www.groviaus.com/grow-via-us",
  },
  openGraph: {
    title: "Grow Via Us - Digital Marketing Agency in Delhi | GroViaUs",
    description:
      "Grow Via Us with GroViaUs - Delhi's leading digital marketing agency. We help businesses grow through SEO, website development, Google Ads, and lead generation.",
    url: "https://www.groviaus.com/grow-via-us",
    siteName: "GroViaUs - Grow Via Us",
    images: [
      {
        url: "https://www.groviaus.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Grow Via Us - GroViaUs Digital Marketing Agency in Delhi",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function GrowViaUsPage() {
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Grow Via Us - Digital Marketing Agency in Delhi",
    description:
      "Grow Via Us with GroViaUs - Delhi's leading digital marketing agency helping businesses grow through proven strategies.",
    url: "https://www.groviaus.com/grow-via-us",
    mainEntity: {
      "@type": "Organization",
      name: "GroViaUs",
      alternateName: ["Grow Via Us", "GrowViaUs", "Gro Via Us"],
      description:
        "Digital Marketing Agency in Delhi helping businesses Grow Via Us",
      url: "https://www.groviaus.com",
      logo: "https://www.groviaus.com/logo.png",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Delhi",
        addressCountry: "IN",
      },
    },
  };

  return (
    <>
      <Script
        id="grow-via-us-page-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <div className="max-w-6xl mt-20 mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-violet-600">
              Grow Via Us
            </span>
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-600">
            Delhi's trusted digital marketing agency helping businesses{" "}
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-violet-500">
              Grow Via Us
            </span>{" "}
            through proven SEO, web development, and digital marketing
            strategies.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
          <Card className="border-orange-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-6 h-6 text-orange-500" />
                <span>SEO Services</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Help your business <strong>Grow Via Us</strong> with our
                comprehensive SEO services:
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Technical SEO optimization
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Local SEO for Delhi businesses
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Content optimization
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Keyword research and targeting
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-violet-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-violet-500" />
                <span>Website Development</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                <strong>Grow Via Us</strong> with custom websites that convert:
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Responsive web design
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  E-commerce solutions
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  SaaS platforms
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Custom web applications
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-orange-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="w-6 h-6 text-orange-500" />
                <span>Google Ads</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                <strong>Grow Via Us</strong> with targeted advertising:
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  PPC campaign management
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Lead generation ads
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Remarketing campaigns
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Performance optimization
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="bg-gradient-to-r from-orange-50 to-violet-50 rounded-2xl p-8 mb-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">
              Why Choose{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-violet-500">
                Grow Via Us
              </span>
              ?
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div>
                <h3 className="font-semibold text-lg mb-2">Proven Results</h3>
                <p className="text-gray-600">
                  We've helped 100+ businesses in Delhi grow their online
                  presence with guaranteed results.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Local Expertise</h3>
                <p className="text-gray-600">
                  Delhi-based team with deep understanding of local market and
                  business needs.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">
                  Transparent Reporting
                </h3>
                <p className="text-gray-600">
                  Regular reports and updates so you can see your business grow
                  via us.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-violet-500">
              Grow Via Us
            </span>
            ?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Let's discuss how we can help your business grow through our proven
            digital marketing strategies.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-violet-500 text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Get Started Today
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </>
  );
}
