import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_ID,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,
    }),
  ],
  pages:{
    signIn: "/auth/signin",

  },
  theme: {
      logo: "https://nextjs.org/static/images/logo-black.svg",
      brandColor: "#000000",
      colorScheme: "dark",
  },
  callbacks:{
    async session({session,user,token}){
      session.user.username = session.user.name
      .split(' ')
      .join('')
      .toLocaleLowerCase();

      session.user.uid = token.sub;
      return session
    }
  }
})