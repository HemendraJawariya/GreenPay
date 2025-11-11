"use client";

import * as React from "react";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Recycle, Clock } from "lucide-react";
import RootLayout from "@/components/layouts/RootLayout";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { withAuth } from "@/hoc/withAuth";

export default withAuth(TrashMainPage, undefined, ["USER"]);

function TrashMainPage() {
  return (
    <RootLayout header={<Navbar />} footer={<Footer />}>
      <section className="flex min-h-screen w-full items-center justify-center">
        <Card className="mx-auto max-w-2xl space-y-6 p-6">
          <div>
            <h2 className="text-xl font-semibold">Waste Management</h2>
            <p className="text-muted-foreground text-sm">
              Choose a menu to deposit waste or view your waste transaction history.
            </p>
          </div>

          <Separator />

          <div className="grid gap-4 sm:grid-cols-2">
            <Card className="flex flex-col items-center p-4 text-center transition hover:shadow-md">
              <Recycle className="text-primary mb-3 h-10 w-10" />
              <h3 className="mb-2 font-semibold">Deposit Waste</h3>
              <p className="text-muted-foreground mb-4 text-sm">
                Fill in deposit details and get a QR Code to hand over to the staff.
              </p>
              <Link href="/trash/deposit" className="w-full">
                <Button className="w-full cursor-pointer bg-[linear-gradient(270deg,var(--chart-1),var(--chart-2),var(--chart-3),var(--chart-4))] bg-[length:200%_200%] shadow transition-all duration-300 hover:shadow-[0_0_10px_4px_rgba(166,255,0,0.4)]">
                  Start Deposit
                </Button>
              </Link>
            </Card>

            <Card className="flex flex-col items-center p-4 text-center transition hover:shadow-md">
              <Clock className="text-primary mb-3 h-10 w-10" />
              <h3 className="mb-2 font-semibold">Waste History</h3>
              <p className="text-muted-foreground mb-4 text-sm">
                View records of all waste deposits you&apos;ve made.
              </p>
              <Link href="/trash/history" className="w-full">
                <Button variant="outline" className="w-full cursor-pointer">
                  View History
                </Button>
              </Link>
            </Card>
          </div>
        </Card>
      </section>
    </RootLayout>
  );
}
