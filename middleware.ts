import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
    publicRoutes: ["/"]
})

export const conig ={
    matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"]
}