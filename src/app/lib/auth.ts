import bcrypt from "bcryptjs";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import z from "zod";
import prisma from "./prisma";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      //     .safeParse(credentials);

      //   if (!parsedCredentials.success) {
      //     throw new Error("Invalid credentials");
      //   }

      //   const data = parsedCredentials.data;

      //   const userEmail = await prisma.user.findUnique({
      //     where: { email: data.email },
      //   });
      //   if (!userEmail) throw new Error("User not found");

      //   const verifyPass = await bcrypt.compare(
      //     data.password,
      //     userEmail.password as string,
      //   );
      //   if (!verifyPass) throw new Error("Invalid Password.");

      //   // return user object with their profile data
      //   const { password: _, ...userWithoutPass } = userEmail;
      //   return {
      //     id: String(userEmail.id),
      //     email: userEmail.email,
      //     name: userEmail.name,
      //   };
      // },
      authorize: async (credentials: any) => {
        const parsed = z
          .object({
            email: z.string().email(),
            password: z.string().min(6),
          })
          .safeParse(credentials);

        if (!parsed.success) {
          throw new Error("Invalid credentials");
        }

        const { email, password } = parsed.data;

        const user = await prisma.user.findMany({
          where: { email },
        });
        if (!user) throw new Error("User not found");

        const isValid = await bcrypt.compare(password, user[0].password);
        if (!isValid) throw new Error("Invalid password");

        return {
          id: String(user[0].id),
          email: user[0].email,
          name: user[0].name,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.accessToken = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.sessionToken = token.accessToken as string;
      }
      return session;
    },
    async authorized({ auth, request }) {
      const isAuthorized = !!auth?.user?.email;
      const isPrivateRoute = request.nextUrl.pathname.startsWith("/admin");

      if (isPrivateRoute && !isAuthorized) {
        Response.redirect(new URL("/", request.nextUrl));
        return false; // user not authorized
      }
      return true; // allow access
    },
  },
});
