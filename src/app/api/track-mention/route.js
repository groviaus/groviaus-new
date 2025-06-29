export async function POST(request) {
  const { text } = await request.json();
  // Log to database or analytics service
  console.log(`Brand mention copied: ${text.substring(0, 100)}`);
  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
