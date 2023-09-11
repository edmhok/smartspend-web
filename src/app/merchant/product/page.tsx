import React from "react";
import type { NextPage } from "next";
import { MerchantLayout, PatronLayout } from "@/layout";
import NewProducts from "@/components/NewProducts";

const ProductID: NextPage = () => (

  <MerchantLayout>

    <NewProducts />
  </MerchantLayout>
);

export default ProductID;
