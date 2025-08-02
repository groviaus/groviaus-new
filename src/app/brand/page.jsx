import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Annoyed,
  HelpCircle,
  Lightbulb,
  Sparkles,
  Volume2,
} from "lucide-react";
import Script from "next/script";

export const metadata = {
  title: "Grow Via Us - GroViaUs Brand & Digital Marketing Agency in Delhi",
  description:
    "Discover GroViaUs - the digital marketing agency that helps you Grow Via Us. Learn about our brand, pronunciation, and how we help businesses grow through SEO, web development, and digital marketing services in Delhi.",
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
    "grow via us pronunciation",
    "growviaus pronunciation",
    "gro via us pronunciation",
    "grow via us brand",
    "growviaus brand",
    "gro via us brand",
    "grow via us mission",
    "growviaus mission",
    "gro via us mission",
    "grow via us digital marketing",
    "growviaus digital marketing",
    "gro via us digital marketing",
    "grow via us seo",
    "growviaus seo",
    "gro via us seo",
    "grow via us website development",
    "growviaus website development",
    "gro via us website development",
    "groviaus brand",
    "groviaus pronunciation",
    "groviaus meaning",
    "digital marketing agency delhi",
    "SEO agency delhi",
    "web development agency delhi",
    "grow via us company",
    "growviaus company",
    "gro via us company",
    "grow via us business",
    "growviaus business",
    "gro via us business",
    "grow via us services",
    "growviaus services",
    "gro via us services",
  ],
  alternates: {
    canonical: "https://www.groviaus.com/brand",
  },
  openGraph: {
    title: "Grow Via Us - GroViaUs Brand & Digital Marketing Agency in Delhi",
    description:
      "Discover GroViaUs - the digital marketing agency that helps you Grow Via Us. Learn about our brand, pronunciation, and services.",
    url: "https://www.groviaus.com/brand",
    siteName: "GroViaUs",
    images: [
      {
        url: "https://www.groviaus.com/logo.png",
        width: 1200,
        height: 630,
        alt: "GroViaUs - Grow Via Us Digital Marketing Agency",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function BrandPage() {
  const brandSchema = {
    "@context": "https://schema.org",
    "@type": "Brand",
    name: "GroViaUs",
    alternateName: [
      "Grovia",
      "Grovius",
      "Growvius",
      "Grociaus",
      "Grocious",
      "Grow Via Us",
      "GrowViaUs",
      "Gro Via Us",
      "GrowViaUs Agency",
      "Grow Via Us Agency",
      "Gro Via Us Agency",
      "GrowViaUs Digital Agency",
      "Grow Via Us Digital Agency",
      "Gro Via Us Digital Agency",
    ],
    description:
      "Digital Marketing & EdTech Agency in Delhi focused on helping businesses Grow Via Us. We provide SEO, web development, and digital marketing services.",
    logo: "https://www.groviaus.com/logo.png",
    slogan: "We help you Grow Via Us.",
  };

  return (
    <>
      <Script
        id="brand-page-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(brandSchema) }}
      />
      <div className="max-w-4xl mt-20 mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-violet-600">
              Grow Via Us - GroViaUs Agency
            </span>
          </h1>
          <p className="mt-4 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-6 md:text-xl md:max-w-3xl">
            It's simple: We help you{" "}
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-violet-500">
              Grow Via Us
            </span>
            .
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <Card className="border-violet-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="w-6 h-6 text-violet-500" />
                <span>Our Name Explained</span>
              </CardTitle>
              <CardDescription>
                It's not about groceries, it's about growth.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Our name, <strong>GroViaUs</strong>, embodies our core mission:
                to help your business <strong>Grow Via Us</strong>. We're a
                leading digital marketing agency in Delhi.
              </p>
              <p>
                We're a Delhi-based digital marketing and EdTech agency
                specializing in helping businesses <strong>Grow Via Us</strong>{" "}
                through:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-2 text-sm">
                <li>SEO & Website Development</li>
                <li>Google Ads & Lead Generation</li>
                <li>EdTech Solutions for Educators</li>
                <li>Digital Marketing Agency Services</li>
              </ul>
              <p className="mt-4 text-sm text-gray-600">
                <strong>GrowViaUs</strong> - Your trusted partner for digital
                growth in Delhi and across India.
              </p>
            </CardContent>
          </Card>

          <Card className="border-orange-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-orange-500" />
                <span>Common Misspellings</span>
              </CardTitle>
              <CardDescription>
                People often find us using these names.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="grid grid-cols-2 gap-3">
                {[
                  "Grovia",
                  "Grovius",
                  "Growvius",
                  "Groviaus",
                  "Grocious",
                  "Grociaus",
                  "GroviaUs",
                  "Grovius Digital",
                  "Grow Via Us",
                  "GrowViaUs",
                  "Gro Via Us",
                  "GrowViaUs Agency",
                  "Grow Via Us Agency",
                  "Gro Via Us Agency",
                  "GrowViaUs Digital",
                  "Grow Via Us Digital",
                ].map((name) => (
                  <li
                    key={name}
                    className="bg-orange-50 text-orange-800 p-2 rounded-md text-center text-sm font-medium"
                  >
                    {name}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="border-orange-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Volume2 className="w-6 h-6 text-orange-500" />
                <span>Pronunciation Guide</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <p className="text-lg font-semibold">Break it down:</p>
                  <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
                    <li>
                      <strong>Gro</strong> — like "Grow" (rhymes with "show")
                    </li>
                    <li>
                      <strong>Via</strong> — like "Vee-uh" (or "Vy-uh")
                    </li>
                    <li>
                      <strong>Us</strong> — just like the word "us"
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold">Put it together:</p>
                  <p className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-violet-600">
                    "Grow-Vee-uh-Us"
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    Phonetically:{" "}
                    <span className="font-mono">/groʊ ˈviː ə ʌs/</span>
                  </p>
                </div>
                <div>
                  <p className="font-semibold">
                    For a smoother, faster version:
                  </p>
                  <p className="text-lg font-bold text-violet-600">
                    "Grow-Vee-Us"
                  </p>
                </div>
              </div>

              <audio controls className="w-full mt-4">
                <source src="/brand-pronunciation.mp3" type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
              <p className="text-xs text-gray-500 mt-2">
                Note: You'll need to add the audio file to
                /public/brand-pronunciation.mp3 for the player to work.
              </p>
            </CardContent>
          </Card>

          <Card className="border-violet-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <HelpCircle className="w-6 h-6 text-violet-500" />
                <span>Correct Our Google Listing</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                If you see incorrect information about us on Google, please help
                us fix it by suggesting an edit.
              </p>
              <a
                href="https://support.google.com/business/answer/7091"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-violet-600 hover:opacity-80"
              >
                Suggest an edit for GroViaUs on Google &rarr;
              </a>
            </CardContent>
          </Card>

          <Card className="border-orange-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="w-6 h-6 text-orange-500" />
                <span>Grow Via Us - Our Mission</span>
              </CardTitle>
              <CardDescription>
                Why we're called GroViaUs and what it means for your business.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p>
                  <strong>Grow Via Us</strong> isn't just our name—it's our
                  promise. As a leading digital marketing agency in Delhi, we
                  help businesses:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-sm">
                  <li>
                    <strong>Grow Via Us</strong> through strategic SEO and
                    digital marketing
                  </li>
                  <li>
                    <strong>Grow Via Us</strong> with custom website development
                    and design
                  </li>
                  <li>
                    <strong>Grow Via Us</strong> via targeted Google Ads and
                    lead generation
                  </li>
                  <li>
                    <strong>Grow Via Us</strong> by building scalable EdTech
                    solutions
                  </li>
                </ul>
                <p className="text-sm text-gray-600">
                  Whether you search for <strong>GrowViaUs</strong>,{" "}
                  <strong>Grow Via Us</strong>, or <strong>Gro Via Us</strong>,
                  you'll find the same dedicated digital marketing agency in
                  Delhi committed to your success.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-violet-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <HelpCircle className="w-6 h-6 text-violet-500" />
                <span>Frequently Asked Questions</span>
              </CardTitle>
              <CardDescription>
                Common questions about GroViaUs and Grow Via Us.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-lg mb-2">
                    What does "Grow Via Us" mean?
                  </h4>
                  <p className="text-sm text-gray-700">
                    "Grow Via Us" means we help your business grow through our
                    digital marketing expertise. Our name GroViaUs combines
                    "Grow" + "Via" + "Us" to represent our mission of helping
                    businesses grow via our services.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">
                    Is GroViaUs the same as Grow Via Us?
                  </h4>
                  <p className="text-sm text-gray-700">
                    Yes, GroViaUs is our brand name and "Grow Via Us" is our
                    mission statement. Both refer to the same Delhi-based
                    digital marketing agency that helps businesses grow through
                    proven strategies.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">
                    How can GroViaUs help my business grow?
                  </h4>
                  <p className="text-sm text-gray-700">
                    GroViaUs helps your business grow through comprehensive
                    digital marketing services including SEO optimization,
                    website development, Google Ads management, lead generation,
                    and social media marketing.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">
                    Why choose GroViaUs for digital marketing in Delhi?
                  </h4>
                  <p className="text-sm text-gray-700">
                    Choose GroViaUs because we're Delhi's trusted digital
                    marketing agency with proven results. We help businesses
                    Grow Via Us through data-driven strategies, transparent
                    reporting, and guaranteed ROI.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
