import React from "react";

export const metadata = {
  title: "Login | GreenPay",
  description: "Log in to your GreenPay account to start exchanging waste.",
  alternates: {
    canonical: `${process.env.APP_URL}/login`,
  },
};

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
