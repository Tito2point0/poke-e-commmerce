import { createClient, OAuthStrategy } from "@wix/sdk";
import { products, collections } from "@wix/stores";
import { cookies } from "next/headers";

export const wixCLientServer = async () => {
  let refreshToken;

  try {
    const cookieStore = await cookies(); // Await the cookies promise
    const refreshTokenCookie = cookieStore.get("refreshToken"); // Use .get() on the resolved object
    refreshToken = refreshTokenCookie
      ? JSON.parse(refreshTokenCookie.value)
      : {}; // Parse the cookie value if it exists
  } catch (e) {
    console.error("Error parsing refreshToken:", e);
    refreshToken = {}; // Fallback to an empty object
  }

  const wixClient = createClient({
    modules: {
      products,
      collections,
    },
    auth: OAuthStrategy({
      clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID!,
      tokens: {
        refreshToken,
        accessToken: { value: "", expiresAt: 0 },
      },
    }),
  });

  return wixClient;
};
