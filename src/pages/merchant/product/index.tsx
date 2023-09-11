import React from "react";
import type { NextPage } from "next";
import NewProducts from "@/components/NewProducts";
import Menubar from "@/components/merchant/Menubar";

const ProductID: NextPage = () => (

  <>
    <Menubar />
    <NewProducts />
  </>
);

export default ProductID;
