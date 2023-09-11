import React from "react";
import type { NextPage } from "next";
import { PatronLayout } from "@/layout";
import NewProducts from "@/components/NewProducts";

const ProductID: NextPage = () => (

  <PatronLayout>

    <NewProducts />
  </PatronLayout>
);

export default ProductID;
