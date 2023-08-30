import React from "react";
import NewProducts from '@/components/NewFavProducts'
import { AdminLayout } from '@/layout'
import { Box, Typography } from "@mui/material";

const Admin = () => {

  return (
    <AdminLayout>
      <div className="flex flex-col p-5">
        <Box sx={{ p: 2 }}>

          <div className="flex flex-row justify-between">
            <Typography variant="h4" gutterBottom>
              Welcome to SmartSpend!
            </Typography>
          </div>
          <Typography variant="body1">
            We are thrilled to have you as part of our community. SmartSpend is dedicated to helping you save money and live smarter.
          </Typography>
          <Typography variant="body1">
            Our online store offers the latest products at unbeatable prices. As a member, you will have access to exclusive deals and our rewards program.
          </Typography>
          <Typography variant="body1">
            Feel free to browse our catalog and don not hesitate to contact us if you need any assistance.
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Happy shopping!
          </Typography>
        </Box>
      </div>

      <NewProducts />

    </AdminLayout>
  )
}

export default Admin
