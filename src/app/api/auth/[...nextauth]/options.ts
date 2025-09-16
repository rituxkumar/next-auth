
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    // 🔹 Credentials (Email/Password) Login
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // 
        const user = { id: "1", name: "Ritu", email: "ritu@test.com" };

        if (credentials.email === "ritu@test.com" && credentials.password === "1234") {
          return user; //  Correct login
        }
        return null; //  Wrong login
      },
    }),

    // 🔹 GitHub OAuth Login
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],

  // 🔹 Callbacks (control how tokens & sessions behave)
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id; // custom data store in token
      }
      return token;
    },

    async session({ session, token }) {
      session.user.id = token.id; // token से session में data पास करना
      return session;
    },
  },

  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };







// Providers

import GoogleProvider from "next-auth/providers/google";

GoogleProvider({
  clientId: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
});


// Get session 

// import { getServerSession } from "next-auth";

// export default async function Dashboard() {
//   const session = await getServerSession(); 

//   return (
//     <div>
//       {session ? (
//         <p>Welcome {session.user.name}!</p>
//       ) : (
//         <p>Please login first</p>
//       )}
//     </div>
//   );
// }


  // Get session in Client component



//   "use client";
// import { useSession } from "next-auth/react";

// export default function Profile() {
//   const { data: session } = useSession();

//   if (!session) return <p>Not logged in</p>;
//   return <p>Hello {session.user.email}</p>;
// }

