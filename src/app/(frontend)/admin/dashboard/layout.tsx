import React from "react";

export const metadata = {
  title: "Admin Panel | GreenPay",
  description:
    "Control panel for managing users, staff, and transaction data.",
  alternates: {
    canonical: `${process.env.APP_URL}/admin`,
  },
};

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
