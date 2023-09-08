import React from "react";
import type { NextPage } from "next";
import { MerchantLayout, PatronLayout } from "@/layout";
import ProductBigCard from "@/components/CardDetails";

const ProductID: NextPage = () => (

  <MerchantLayout>

    <ProductBigCard />
  </MerchantLayout>
);

export default ProductID;
