// export { auth as middleware } from "@/app/lib/auth";
// export const config = {
//   matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)", "/admin/:path*"],
//   runtime: "nodejs",
// };
import { auth } from "@/app/lib/auth"; // adjust path

export default auth((req) => {
  if (!req.auth && req.nextUrl.pathname.startsWith("/admin")) {
    const url = req.nextUrl.clone();
    url.pathname = "/";
    return Response.redirect(url);
  }
});
