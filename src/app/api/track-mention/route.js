export async function POST(request) {
  const { text } = await request.json();

  // Log to console (replace with your logging system)
  console.log("Brand mention copied:", text.substring(0, 200));

  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
