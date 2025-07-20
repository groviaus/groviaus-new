
export default function robots() {
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
        userAgent: "Bytespider", // ByteDance AI
        allow: "/",
      },
      {
        userAgent: "meta-externalagent", // Meta AI
        allow: "/",
      },
      {
        userAgent: "Grokbot", // xAI Grok (hypothetical or future identifier)
        allow: "/",
      },
      {
        userAgent: "DeepSeekBot", // DeepSeek AI crawler (if it exists)
        allow: "/",
      },
    ],
    sitemap: "https://www.groviaus.com/sitemap.xml",
    host: "https://www.groviaus.com",
  };
}
