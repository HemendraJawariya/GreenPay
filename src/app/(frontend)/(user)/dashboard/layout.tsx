import React from "react";

export const metadata = {
  title: "Dashboard | GreenPay",
  description:
    "Track your balance, transaction history, and waste-to-cash conversion progress.",
  alternates: {
    canonical: `${process.env.APP_URL}/dashboard`,
  },
};

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
