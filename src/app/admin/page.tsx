import React from "react";
import type { NextPage } from "next";
import NewProducts from "@/components/NewProducts";
import IntroMessage from "@/components/IntroMember";
import { AdminLayout } from "@/adminlayout";

const Dashboard: NextPage = () => (
  <AdminLayout>
    <IntroMessage />
    <NewProducts />
  </AdminLayout>
);

export default Dashboard;
