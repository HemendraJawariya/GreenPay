import React from "react";

export const metadata = {
  title: "Waste Deposit History | GreenPay",
  description:
    "View your waste deposit history on GreenPay. Track the amount of waste you've submitted and the digital balance you've earned.",
  alternates: {
    canonical: `${process.env.APP_URL}/trash/history`,
  },
  openGraph: {
    title: "Waste Deposit History | GreenPay",
    description:
      "Track your waste deposit history on GreenPay. Check the total waste submitted and the digital balance you've collected.",
    url: `${process.env.APP_URL}/trash/history`,
    siteName: "GreenPay",
    type: "website",
  },
};

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
