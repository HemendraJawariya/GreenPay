import React from "react";

export const metadata = {
  title: "Leaderboard | GreenPay",
  description:
    "See the top contributors ranked for their efforts in saving the environment.",
  alternates: {
    canonical: `${process.env.APP_URL}/leaderboard`,
  },
};

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
