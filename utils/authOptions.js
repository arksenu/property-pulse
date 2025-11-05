import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code"
        }
      }
    })
  ],
  callbacks: {
    // invoked on successful signin
    async signIn({ profile }) {
      // connect to DB
      // check if the user exists
      // if not, then add user to DB
      // return true to allow signin
    },
    // modifies the session object
    async session({ session }) {
      // get the user from DB
      // assign the user id  to the session
      // then return the session
    }
  }
};