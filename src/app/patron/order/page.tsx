import React from "react";
import type { NextPage } from "next";
import { PatronLayout } from "@/layout/patron";
import OrderList from "@/components/Admin/OrderList";

const Patron: NextPage = () => (
  <PatronLayout>
    <OrderList />
  </PatronLayout>
);

export default Patron;
