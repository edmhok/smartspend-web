import React from "react";
import type { NextPage } from "next";
import OrderList from "@/components/Admin/OrderList";
import Menubar from "@/components/patron/Menubar";

const OrderView: NextPage = () => (
  <>
    <Menubar />
    <OrderList />
  </>
);

export default OrderView;
