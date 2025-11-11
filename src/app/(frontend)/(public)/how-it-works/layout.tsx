import React from "react";

export const metadata = {
  title: "How It Works | GreenPay",
  description:
    "Learn how GreenPay transforms your waste into digital balance through a transparent and efficient system.",
  alternates: {
    canonical: `${process.env.APP_URL}/how-it-works`,
  },
  openGraph: {
    title: "How It Works | GreenPay",
    description:
      "Explore the steps to convert waste into digital balance with GreenPay.",
    url: `${process.env.APP_URL}/how-it-works`,
    siteName: "GreenPay",
    type: "article",
  },
};

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
