import NextAuth, { Account, Profile, Session, User } from "next-auth";
import DiscordProvider from "next-auth/providers/discord";
import { Adapter, AdapterUser } from "next-auth/adapters";
import { JWT } from "next-auth/jwt/types";
import { getUserTokens } from "@/lib/firestore-helper";

// https://discord.com/developers/docs/topics/oauth2#shared-resources-oauth2-scopes
const scopes = ["identify"].join(" ");

export const options = {
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID as string,
      clientSecret: process.env.DISCORD_CLIENT_SECRET as string,
      authorization: { params: { scope: scopes } },
    }),
  ],
  callbacks: {
    async jwt({
      token,
      account,
      profile,
    }: {
      token: JWT;
      user: User | AdapterUser;
      account: Account | null;
      profile?: Profile | undefined;
    }) {
      if (profile?.id) {
        token.id = profile.id;
      }
      return token;
    },
    async session({
      session,
      token,
      user,
    }: {
      session: Session;
      token: JWT;
      user: User | AdapterUser;
    }) {
      session.user.id = token.id;
      const userTokens = await getUserTokens(token.id);
      session.user.tokens = userTokens;
      return session;
    },
  },
};

const handler = NextAuth(options);

export { handler as GET, handler as POST };
