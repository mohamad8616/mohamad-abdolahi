import bcrypt from "bcryptjs";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import z from "zod";
import { authConfig } from "../../../auth.config";
import prisma from "./prisma";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      // authorize: async (credentials) => {
      //   const parsedCredentials = z
      //     .object({ email: z.string().email(), password: z.string().min(6) })
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

        const user = await prisma.user.findUnique({
          where: { email },
        });
        if (!user) throw new Error("User not found");

        const isValid = await bcrypt.compare(password, user.password);
        if (!isValid) throw new Error("Invalid password");

        return {
          id: String(user.id),
          email: user.email,
          name: user.name,
        };
      },
      ...authConfig,
    }),
  ],
});
