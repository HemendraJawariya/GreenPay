import React from "react";

export const metadata = {
  title: "Submit Waste Deposit | GreenPay",
  description:
    "Staff can easily input and submit residents' waste deposits through the Submit Waste Deposit page on GreenPay.",
  alternates: {
    canonical: `${process.env.APP_URL}/trash/submit`,
  },
  openGraph: {
    title: "Submit Waste Deposit | GreenPay",
    description:
      "Simplifies staff tasks in recording and managing residents' waste deposits with GreenPay's practical submission feature.",
    url: `${process.env.APP_URL}/trash/submit`,
    siteName: "GreenPay",
    type: "website",
  },
};

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
