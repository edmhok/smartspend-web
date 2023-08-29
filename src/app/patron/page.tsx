'use client'

import React, { useEffect, useState } from "react";
import { PatronLayout } from '@/layout/patron'
import NewProducts from '@/components/NewProducts'
import { Box, Typography } from "@mui/material";

const Patron = () => {
  const [details, setDetails] = useState({
    points: 0
  })

  const fetchData = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await fetch("http://localhost:4000/patron", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      console.log(response);

      if (response.ok) {
        const data = await response.json()
        setDetails(data);
        // console.log(response);
      } else {
        console.error("Failed to fetch data");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);


  return (
    <PatronLayout>
      <div className="flex flex-col p-5">
        <Box sx={{ p: 2 }}>

          <div className="flex flex-row justify-between">
            <Typography variant="h4" gutterBottom>
              Welcome to SmartSpend!

            </Typography>

            {details && (
              <Typography variant="h5" gutterBottom>
                Points : <span>{details.points}</span>
              </Typography>
            )}
          </div>


          <Typography variant="body1">
            We are thrilled to have you as part of our community. SmartSpend is dedicated to helping you save money and live smarter.
          </Typography>

          <Typography variant="body1">
            Our online store offers the latest products at unbeatable prices. As a member, you will have access to exclusive deals and our rewards program.
          </Typography>

          <Typography variant="body1">
            Feel free to browse our catalog and do not hesitate to contact us if you need any assistance.
          </Typography>

          <Typography variant="body1" sx={{ mb: 2 }}>
            Happy shopping!
          </Typography>

        </Box>

      </div>


      <NewProducts />

    </PatronLayout>
  )
}

export default Patron
