import React from "react";

export const metadata = {
  title: "Waste Deposit Menu | GreenPay",
  description:
    "Access various waste deposit features on GreenPay. Choose waste types, check prices, and start converting waste into digital balance.",
  alternates: {
    canonical: `${process.env.APP_URL}/trash`,
  },
  openGraph: {
    title: "Waste Deposit Menu | GreenPay",
    description:
      "Discover all waste deposit features on GreenPay. Support a cleaner environment while earning digital balance.",
    url: `${process.env.APP_URL}/trash`,
    siteName: "GreenPay",
    type: "website",
  },
};

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
