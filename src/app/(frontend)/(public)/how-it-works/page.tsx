"use client";

import Footer from "@/components/Footer";
import RootLayout from "@/components/layouts/RootLayout";
import Navbar from "@/components/Navbar";
import { QrCode, ShoppingCart, Trash2 } from "lucide-react";
import * as React from "react";

const steps = [
  {
    icon: Trash2,
    title: "Collect Waste",
    desc: "Gather waste according to its type and make sure it is properly sorted.",
  },
  {
    icon: QrCode,
    title: "Scan QR",
    desc: "Visit a GreenPay partner, scan the QR code, and receive your balance instantly.",
  },
  {
    icon: ShoppingCart,
    title: "Withdraw or Shop",
    desc: "Use your balance for digital shopping or withdraw cash easily.",
  },
];

export default function HowItWorks() {
  return (
    <RootLayout header={<Navbar />} footer={<Footer />}>
      <section className="space-y-10">
        <div className="flex flex-col items-center justify-center space-y-2 text-center">
          <h1 className="text-4xl font-bold md:text-5xl">
            How Does It Work?
          </h1>
          <p className="text-muted-foreground max-w-md text-sm">
            Follow these 3 easy steps to convert your waste into digital balance.
          </p>
        </div>

        <div className="space-y-10">
          {steps.map((step, i) => {
            const Icon = step.icon;
            const isEven = i % 2 === 0;

            return (
              <div
                key={i}
                className={`flex flex-col items-center gap-6 md:flex-row ${
                  !isEven ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="bg-primary/10 flex items-center justify-center rounded-full p-6 shadow-md">
                  <Icon className="text-primary h-12 w-12" />
                </div>
                <div className="max-w-md text-center md:text-left">
                  <h3 className="mb-2 text-xl font-bold">
                    <span className="text-primary mr-2">0{i + 1}.</span>
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{step.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </RootLayout>
  );
}
