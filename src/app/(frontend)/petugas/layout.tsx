import React from "react";

export const metadata = {
  title: "Staff Dashboard | GreenPay",
  description:
    "Dedicated GreenPay staff dashboard for verifying waste deposits, monitoring transaction history, and processing balance withdrawals.",
  alternates: {
    canonical: `${process.env.APP_URL}/petugas/dashboard`,
  },
  openGraph: {
    title: "Staff Dashboard | GreenPay",
    description:
      "Efficiently manage and verify waste deposits through the GreenPay staff dashboard. Monitor transaction history and process balance withdrawals.",
    url: `${process.env.APP_URL}/petugas/dashboard`,
    siteName: "GreenPay",
    type: "website",
  },
};

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
