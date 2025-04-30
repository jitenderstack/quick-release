import { db } from "@/lib/db";
import { compare } from "bcrypt";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
    maxAge: 1 * 60 * 60, //1 hour,
  },
  cookies: {
    csrfToken: {
      name: "auth-token",
      options: {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        secure: true,
      },
    },
    sessionToken: {
      name: "session-token",

      options: {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        secure: true,
      },
    },
  },

  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        const uniqueUser = await db.users.findUnique({
          where: {
            email: credentials?.email,
          },
        });
        if (!uniqueUser) {
          throw new Error("Incorrect Credentials!");
        }
        const checkPassword = await compare(
          credentials?.password ?? "",
          uniqueUser?.password
        );

        if (!checkPassword) {
          throw new Error("Incorrect Credentials!");
        }
        if (checkPassword && uniqueUser && uniqueUser.isActive === false) {
          throw new Error("Your Access has been Restricted, Contact Admin");
        }

        if (checkPassword && uniqueUser && uniqueUser.isVerified === false) {
          throw new Error("Your Account is not Verified Yet, Check Email");
        }
        if (checkPassword) {
          return {
            id: uniqueUser.cuid,
            email: uniqueUser.email,
            name: `${uniqueUser.firstName} ${uniqueUser.lastName}`,
          };
        }

        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        return {
          ...token,
          id: user?.id,
        };
      }
      return token;
    },
    async session({ session, token }) {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
        },
      };
    },
  },
};
