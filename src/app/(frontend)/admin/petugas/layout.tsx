import React from "react";

export const metadata = {
  title: "Staff Management | GreenPay Admin",
  description: "Manage accounts and field staff assignments for GreenPay.",
  alternates: {
    canonical: `${process.env.APP_URL}/admin/petugas`,
  },
};

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
