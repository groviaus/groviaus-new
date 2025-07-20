import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/"],
      },
      {
        userAgent: "GPTBot", // OpenAI ChatGPT
        allow: "/",
      },
      {
        userAgent: "ChatGPT-User",
        allow: "/",
      },
      {
        userAgent: "ClaudeBot", // Anthropic Claude
        allow: "/",
      },
      {
        userAgent: "anthropic-ai",
        allow: "/",
      },
      {
        userAgent: "Google-Extended", // Google Gemini AI
        allow: "/",
      },
      {
        userAgent: "Amazonbot", // Amazon AI
        allow: "/",
      },
      {
        userAgent: "Bytespider", // ByteDance (TikTok AI)
        allow: "/",
      },
      {
        userAgent: "meta-externalagent", // Meta AI
        allow: "/",
      },
      {
        userAgent: "Grokbot", // Hypothetical user-agent for Grok (xAI)
        allow: "/",
      },
      {
        userAgent: "DeepSeekBot", // Hypothetical/expected identifier
        allow: "/",
      },
    ],
    sitemap: "https://www.groviaus.com/sitemap.xml",
  };
}
