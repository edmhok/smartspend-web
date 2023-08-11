import React from "react";
import type { NextPage } from "next";
import { AdminLayout } from "@/adminLayout";
import AddProducts from "@/admin/products/addProducts/page";

const Admin: NextPage = () => (
  <AdminLayout>
    <AddProducts />
  </AdminLayout>
);

export default Admin;
