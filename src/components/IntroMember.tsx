'use client'

import { Box, Typography } from "@mui/material";
import React from "react";


export default function IntroMember() {

  return (
    <div className="flex flex-col p-5">
       <Box sx={{ p: 2 }}>

        <Typography variant="h4" gutterBottom>
        Welcome to SmartSpend!
        </Typography>

        <Typography variant="body1">
        We're thrilled to have you as part of our community. SmartSpend is dedicated to helping you save money and live smarter. 
        </Typography>

        <Typography variant="body1">
        Our online store offers the latest products at unbeatable prices. As a member, you'll have access to exclusive deals and our rewards program.
        </Typography>

        <Typography variant="body1">
        Feel free to browse our catalog and don't hesitate to contact us if you need any assistance.
        </Typography>

        <Typography variant="body1" sx={{ mb: 2 }}>
        Happy shopping!
        </Typography>

        </Box>

    </div>
  )
}

