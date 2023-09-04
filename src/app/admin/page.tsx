import React from 'react'
import type { NextPage } from 'next'
import NewProducts from '@/components/NewProducts'
import { AdminLayout } from '@/layout'
import { Box, Typography } from "@mui/material";

const Admin: NextPage = () => (
  <AdminLayout>
    <div className="flex flex-col p-5">
      <Box sx={{ p: 2 }}>
        <div className="flex flex-row justify-between">
          <Typography variant="h4" gutterBottom>
            Welcome to SmartSpend!
          </Typography>
        </div>
        <Typography variant="body1">
          We&apos;re thrilled to have you as part of our community. SmartSpend is dedicated to helping you save money and live smarter.
        </Typography>
        <Typography variant="body1">
          Our online store offers the latest products at unbeatable prices. As a member, you&apos;ll have access to exclusive deals and our rewards program.
        </Typography>
        <Typography variant="body1">
          Feel free to browse our catalog and don&apos;t hesitate to contact us if you need any assistance.
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Happy shopping!
        </Typography>
      </Box>
    </div>

    <NewProducts />

  </AdminLayout>
)


export default Admin
