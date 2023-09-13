import React from "react";
import type { NextPage } from "next";
import Menubar from "@/components/Patron/Menubar";
import ViewOrder from "@/components/Patron/ViewOrder";

const OrderView: NextPage = () => (
  <>
    <Menubar />
    <ViewOrder />
  </>
);

export default OrderView;
