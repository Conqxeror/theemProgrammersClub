import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import {connectToDatabase} from '../../../lib/db';


export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET
    }),
  ],
  callbacks: {
    async session(session) {
      const {db} = await connectToDatabase();

      await db.collection('User').updateOne(
        { email: session.session.user.email },
        {
          $set: {
            name: session.session.user.name,
            email: session.session.user.email,
            image: session.session.user.image,
            userType: 'STUDENT',
          },
        },
        { upsert: true }
      );

      return session;
    },
  },
});