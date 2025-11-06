import User from "@/models/User";
import connectDB from "@/config/database";
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
      await connectDB();
      // check if the user exists
      const userExists = await User.findOne({ email: profile.email });
      // if not, then add user to DB
      if (!userExists) {
        // truncate username in case its too long
        const username = profile.name.slice(0, 20);

        await User.create({
          email: profile.email,
          username,
          image: profile.picture
        });
      }
      // return true to allow signin
      return true;
    },
    // modifies the session object
    async session({ session }) {
      // get the user from DB
      const user = await User.findOne({ email: session.user.email });
      // assign the user id  to the session
      session.user.id = user._id.toString();
      // then return the session
      return session;
    }
  }
};