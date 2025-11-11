import React from "react";

export const metadata = {
  title: "Register | GreenPay",
  description: "Create a GreenPay account and start turning waste into balance.",
  alternates: {
    canonical: `${process.env.APP_URL}/register`,
  },
};

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
