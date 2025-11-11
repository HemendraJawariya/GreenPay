import React from "react";

export const metadata = {
  title: "Verify Waste Deposit | GreenPay",
  description:
    "Quickly and accurately verify residents' waste deposits using the QR code scanning feature in GreenPay.",
  alternates: {
    canonical: `${process.env.APP_URL}/trash/verify`,
  },
  openGraph: {
    title: "Verify Waste Deposit | GreenPay",
    description:
      "Use the QR code scanning feature to validate waste deposits in real-time with GreenPay. Supporting a cleaner environment movement.",
    url: `${process.env.APP_URL}/trash/verify`,
    siteName: "GreenPay",
    type: "website",
  },
};

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
