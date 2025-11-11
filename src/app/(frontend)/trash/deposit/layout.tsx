import React from "react";

export const metadata = {
  title: "Waste Deposit | GreenPay",
  description:
    "Deposit your waste with GreenPay and convert it into digital balance. Join the environmental movement and reap the benefits.",
  alternates: {
    canonical: `${process.env.APP_URL}/trash/deposit`,
  },
  openGraph: {
    title: "Waste Deposit | GreenPay",
    description:
      "Easily deposit your waste through GreenPay. Support a cleaner environment while earning digital balance.",
    url: `${process.env.APP_URL}/trash/deposit`,
    siteName: "GreenPay",
    type: "website",
  },
};

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
