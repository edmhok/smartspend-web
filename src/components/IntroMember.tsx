'use client'

import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";


export default function IntroMember() {

  const [details, setDetails] = useState({
    points: 0
  })
  const [points, setPoints] = useState(0)

  const init = async () => {
    const token = localStorage.getItem('token')
    const role = localStorage.getItem('role')
    const userId = localStorage.getItem('userId')

    const api = role === 'patron' ? `http://localhost:4000/patrons/${userId}` : 
      role === 'merchant' ? `http://localhost:4000/merchants/${userId}` : ''

      if(api !== '') {
        const response = await fetch(api, {
          headers: { 'Authorization': `Bearer ${token}` }
        })
        const data = await response.json()
        setDetails(data)
      }
      else {
        setDetails('')
      }
    
  }
  useEffect(() => {
    init()
  }, [])

  return (
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

