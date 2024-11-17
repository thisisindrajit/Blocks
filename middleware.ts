import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher(["/user(.*)"]);

export default clerkMiddleware(async (auth, req) => {
  if (isProtectedRoute(req)) {
    const { userId, sessionId } = await auth();

    // Redirect to the homepage if the user is not signed in
    if (!userId || !sessionId) {
      (await auth()).redirectToSignIn({
        returnBackUrl: req.url,
      });
    }
  }
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc|block)(.*)"],
};
