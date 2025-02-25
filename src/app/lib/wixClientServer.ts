// wixClientServer.ts
import { createClient, OAuthStrategy } from "@wix/sdk";
import { products, collections } from "@wix/stores";
import { cookies } from "next/headers";

export const wixCLientServer = async () => {
  let refreshToken;

  try {
    const cookieStore = await cookies();
    const refreshTokenCookie = cookieStore.get("refreshToken");
    refreshToken = refreshTokenCookie
      ? JSON.parse(refreshTokenCookie.value)
      : null;

    if (!refreshToken || Object.keys(refreshToken).length === 0) {
      console.warn("No valid refresh token found. Using fallback.");
      // Optional: Use a fallback refresh token for development
      refreshToken = {
        access_token: process.env.NEXT_PUBLIC_ACCESS_TOKEN || "",
        expires_in: 3600,
        token_type: "Bearer",
      };
    }

    console.log("Refresh Token:", refreshToken);
  } catch (e) {
    console.error("Error parsing refreshToken:", e);
    refreshToken = {}; // Fallback to an empty object
  }

  try {
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

    console.log("Wix Client initialized:", !!wixClient);
    return wixClient;
  } catch (error) {
    console.error("Error initializing Wix Client:", error);
    throw new Error("Failed to initialize Wix Client.");
  }
};
