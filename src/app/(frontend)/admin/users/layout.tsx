import React from "react";

export const metadata = {
  title: "User Management | GreenPay Admin",
  description: "Manage accounts and field user assignments for GreenPay.",
  alternates: {
    canonical: `${process.env.APP_URL}/admin/users`,
  },
};

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
