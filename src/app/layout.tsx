import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import AuthProvider from "@/components/providers/auth-provider";
import LoadingProvider from "@/components/providers/loading-provider";

const poppins = Poppins({
  variable: "--font-poppins-sans",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "GreenPay – Turn Waste into Digital Balance",
  description:
    "Turn waste into digital balance and help the environment with GreenPay.",
  alternates: {
    canonical: `${process.env.APP_URL}/`,
  },
  openGraph: {
    title: "GreenPay",
    description: "A community-driven platform that transforms waste into digital balance.",
    url: `${process.env.APP_URL}/`,
    siteName: "GreenPay",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        style={{ overflow: "hidden" }}
        className={`${poppins.className} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LoadingProvider>
            <AuthProvider>
              {children}
              <Toaster />
            </AuthProvider>
          </LoadingProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
