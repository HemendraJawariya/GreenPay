"use client";

import * as React from "react";
import RootLayout from "@/components/layouts/RootLayout";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import ProfileSection from "@/components/pages/user/dashboard/profile";
import { withAuth } from "@/hoc/withAuth";

export default withAuth(Dashboard, "/login", ["USER"]);

function Dashboard() {
  return (
    <RootLayout header={<Navbar />} footer={<Footer />}>
      <ProfileSection />
    </RootLayout>
  );
}
