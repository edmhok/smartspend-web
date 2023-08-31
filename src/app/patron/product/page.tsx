import React from "react";
import type { NextPage } from "next";
import { PatronLayout } from "@/layout";
import ProductBigCard from "../../../components/ProductBigCard";

const ProductCard: NextPage = () => (
  <PatronLayout>
    <ProductBigCard id={0} img={""} title={""} desc={""} price={0} />
  </PatronLayout>
);

export default ProductCard;
