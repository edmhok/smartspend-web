import React from "react";
import type { NextPage } from "next";
import { PatronLayout } from "@/layout/patron";
import NewProducts from "@/components/NewProducts";
import IntroMember from "@/components/IntroMember";
import ProductBigCard from "../../../../src/components/ProductBigCard";

const Patron: NextPage = () => (
  <PatronLayout>
    <ProductBigCard id={0} img={""} title={""} desc={""} price={0} />
  </PatronLayout>
);

export default Patron;
