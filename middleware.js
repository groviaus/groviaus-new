import { NextResponse } from "next/server";

export function middleware(request) {
  const url = request.nextUrl.clone();

  // Handle misspelled domains
  const host = request.headers.get("host");
  if (host.includes("grovia.in") || host.includes("growvius.com")) {
    url.pathname = "/";
    return NextResponse.redirect("https://www.groviaus.com" + url.pathname);
  }

  // Handle misspelled paths
  const path = url.pathname.toLowerCase();
  if (path.includes("grovius") || path.includes("grovia")) {
    return NextResponse.redirect("https://www.groviaus.com");
  }

  return NextResponse.next();
}
