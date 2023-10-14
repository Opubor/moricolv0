import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

const providers = [
  CredentialsProvider({
    name: "Email",
    credentials: {
      email: { label: "Email", type: "text", placeholder: "Email" },
      password: {
        label: "Password",
        type: "password",
        placeholder: "Password",
      },
    },
    async authorize(credentials, req) {
      try {
        const response = await fetch(
          new URL("/api/login", "http://localhost:3000"),
          {
            method: "POST",
            body: JSON.stringify(credentials),
            headers: { "Content-Type": "application/json" },
          }
        );

        const user = await response.json();

        if (response.ok && user) {
          return user;
        }

        return null;
      } catch (error) {
        throw error;
      }
    },
  }),
  GoogleProvider({
    name: "Google",
    clientId: "",
    clientSecret: "",
  }),
];

const authOptions = {
  providers,
};

export default authOptions;
