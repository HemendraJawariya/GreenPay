import React from "react";

export const metadata = {
  title: "About Us | GreenPay",
  description:
    "Get to know GreenPay: a digital platform that empowers communities to manage waste and support the green economy.",
  alternates: {
    canonical: `${process.env.APP_URL}/about`,
  },
  openGraph: {
    title: "About Us | GreenPay",
    description:
      "Meet the team behind GreenPay and our mission to create a cleaner and more sustainable environment.",
    url: `${process.env.APP_URL}/about`,
    siteName: "GreenPay",
    type: "profile",
  },
};

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
