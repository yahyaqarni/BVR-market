import NextAuth, { getServerSession } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import dbPool from "@/lib/db";
import bcrypt from 'bcrypt';

const promisePool = dbPool.promise();

export const authOptions = {
  secret: process.env.NEW_SECRET,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      session: {
        jwt: true,
      },
      authorize: async (credentials) => {
        const { email, password } = credentials;

        try {
          const [results] = await promisePool.query(
            "SELECT id, firstName, email, password, role FROM `users` WHERE email = ?",
            [email]
          );
          console.log(results);
          console.log(password);

          if (results && results.length > 0) {
            if (bcrypt.compareSync(password, results[0].password)) {
              const user = {
                id: results[0].id,
                name: results[0].firstName,
                email: results[0].email,
                role: results[0].role
              };
              return user;
            } else return null;
          } else {
            return null; // No user found with provided credentials
          }
        } catch (err) {
          console.log(err);
          return null; // Error occurred during database query
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.user = user;
      }
      console.log(token);
      return token;
    },

    async session({ session, token, user }) {
      //if (!user) return;
      session.user = token.user;
      console.log(session.user);
      return session;
    },

  },
};



export async function isBDO() {
    const session = await getServerSession(authOptions);
    const userRole = session?.user?.role;
    if (userRole !== 'bdo') {
      return false;
    }
   
    return session?.user;
  }

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }
