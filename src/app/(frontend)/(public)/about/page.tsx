"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import RootLayout from "@/components/layouts/RootLayout";
import { Button } from "@/components/ui/button";
import { Leaf, Recycle, Users } from "lucide-react";
import Link from "next/link";
import * as React from "react";

export default function AboutUsPage() {
  return (
    <RootLayout header={<Navbar />} footer={<Footer />}>
      <section className="space-y-12">
        {/* Hero */}
        <div className="mx-auto max-w-3xl space-y-4 px-4 text-center">
          <h1 className="text-4xl font-bold md:text-5xl">About GreenPay</h1>
          <p className="text-muted-foreground text-sm">
            We are a digital platform that transforms waste into value.  
            GreenPay is here to encourage a shift toward a more eco-friendly lifestyle through real digital incentives.
          </p>
        </div>

        {/* Vision, Mission, Values */}
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-4 md:grid-cols-3">
          {[
            {
              icon: <Recycle className="h-10 w-10 text-green-600" />,
              title: "Vision",
              desc: "Creating a society that is aware and responsible in waste management for a sustainable future.",
            },
            {
              icon: <Leaf className="h-10 w-10 text-emerald-500" />,
              title: "Mission",
              desc: "Providing a waste-to-digital balance exchange system that is easy, fast, and integrated with the local digital ecosystem.",
            },
            {
              icon: <Users className="text-primary h-10 w-10" />,
              title: "Our Values",
              desc: "Innovation, sustainability, transparency, and collaboration with local communities and business partners.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="rounded-xl border p-6 text-center shadow-sm transition-all hover:shadow-md"
            >
              <div className="mb-4 flex justify-center">{item.icon}</div>
              <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 space-y-4 px-4 text-center">
          <h2 className="text-2xl font-bold">Join Us</h2>
          <p className="text-muted-foreground mx-auto max-w-md text-sm">
            Be part of the change. With GreenPay, every piece of your waste holds value!
          </p>
          <Button
            size="lg"
            className="relative cursor-pointer bg-[linear-gradient(270deg,var(--chart-1),var(--chart-2),var(--chart-3),var(--chart-4))] bg-[length:200%_200%] shadow transition-all duration-300 hover:shadow-[0_0_10px_4px_rgba(166,255,0,0.4)]"
            asChild
          >
            <Link href="/register">Register Now</Link>
          </Button>
        </div>
      </section>
    </RootLayout>
  );
}
