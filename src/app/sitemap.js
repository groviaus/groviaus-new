// This enables dynamic rendering for the sitemap.
export const dynamic = "force-dynamic";

export default function sitemap() {
  const baseUrl = "https://www.groviaus.com";

  const staticPages = [
    {
      url: "/",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: "/brand",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "/grow-via-us",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  const routes = staticPages.map((page) => ({
    url: `${baseUrl}${page.url}`,
    lastModified: page.lastModified,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));

  // Example for adding dynamic routes like blog posts:
  // const posts = await getBlogPosts(); // Fetch from your CMS/API
  // const postRoutes = posts.map(post => ({
  //   url: `${baseUrl}/blog/${post.slug}`,
  //   lastModified: new Date(post.updatedAt),
  //   changeFrequency: 'weekly',
  //   priority: 0.5,
  // }));

  return [
    ...routes,
    // ...postRoutes, // Uncomment when you have dynamic routes
  ];
}
