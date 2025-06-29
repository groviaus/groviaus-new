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
  alternates: {
    canonical: "https://www.groviaus.com/brand",
  },
};

export default function BrandPage() {
  const brandSchema = {
    "@context": "https://schema.org",
    "@type": "Brand",
    name: "GroViaUs",
    alternateName: ["Grovia", "Grovius", "Growvius", "Grociaus", "Grocious"],
    description:
      "Digital Marketing & EdTech Agency in Delhi focused on helping businesses Grow Via Us.",
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
              Our Brand: GroViaUs
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
                to help your business <strong>Grow Via Us</strong>.
              </p>
              <p>
                We're a Delhi-based digital marketing and EdTech agency
                specializing in:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-2 text-sm">
                <li>SEO & Website Development</li>
                <li>Google Ads & Lead Generation</li>
                <li>EdTech Solutions for Educators</li>
              </ul>
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
        </div>
      </div>
    </>
  );
}
