"use client";

import React, { useEffect, useState } from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

interface Data {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  address: string;
  points: number;

}

export default function ViewPoints() {
const [merchantData, setMerchantData] = useState<Data[]>([]);
const [open, setOpen] = useState(false); 
const [selectedMerchant, setSelectedMerchant] = useState<Data | null>(null);

const modalStyle = {
    backdrop: {
      opacity: 0.5,
      color: 'white'
    }
  };

useEffect(() => {
    async function fetchData() {
      try {
        const token = localStorage.getItem("token");
        
        const response = await fetch("http://localhost:4000/", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        console.log(response);

        if (response.ok) {
          const jsonData: Data[] = await response.json();
          
          setMerchantData(jsonData);
          // console.log(response);
        } else {
          console.error("Failed to fetch data");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }

    fetchData();
  }, []);

  const handleOpen = (merchant: Data) => {
    setOpen(true);
    setSelectedMerchant(merchant);
  }

  const handleClose = async () => {
    setOpen(false);
    setSelectedMerchant(null);
  }

  const handleSave = async () => {
    if (!selectedMerchant) {
      return;
    }
  
    try {
      const tokenRes = await fetch('http://localhost:4000/auth/login');
      const { token } = await tokenRes.json();
      // const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyUGF5bG9hZCI6eyJ1c2VybmFtZSI6ImFkbWluMkB0ZXN0LmNvbSIsInBhc3N3b3JkIjoiJDJiJDEwJEl4ODkwNDMwOGRacjNsa01OdDMvTE83bzEyUGphTFNBTm9LOFNrYUxlOENNcUQ2L25ENWF1IiwiZmlyc3RfbmFtZSI6ImxjaGVuIiwibWlkZGxlX25hbWUiOiJ0aGUiLCJsYXN0X25hbWUiOiJncmVhdCIsImJpcnRoZGF0ZSI6IjIwMDAtMTAtMTRUMTY6MDA6MDAuMDAwWiIsInBob25lIjoiMDM0OTgxMDkyNCIsImFkZHJlc3MiOiJyZWxvYyIsImNpdHkiOiJkYXZhbyIsInN0YXRlIjoiZGF2YW8gZGVsIHN1ciIsImNvdW50cnkiOiJwaGlsaXBwaW5lcyIsInppcGNvZGUiOiI4MDAwIn0sImlhdCI6MTY5MjA4MDMxNywiZXhwIjoxNjkyMTY2NzE3fQ.-QOPdWRVakekGVKuUgHKTfB975rCma-qfOzx-Dyi-9Q";
      
      const response = await fetch(`http://localhost:4000/merchant/${selectedMerchant.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`

        },
        body: JSON.stringify({
          points: selectedMerchant.points
        })
      });
      if (!response.ok) {
        throw new Error('Failed to update patron');
      }
      // Close modal
      handleClose();
      // Refetch patrons 
      fetchData(); 
  
    } catch (error) {
      console.error(error);
    }
  
  }
    function fetchData() {
      throw new Error("Function not implemented.");
  }

  return (
    <div className='p-10'>
        <h1 className="text-xl pb-3 text-[#218c20]"> Merchants Points</h1>
          <TableContainer component={Paper}>
            <Table
              sx={{ minWidth: 650, minHeight: 100 }}
              aria-label="simple table"
            >
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Username</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Address</TableCell>
                  <TableCell>Points</TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {merchantData.map(merchant => (
                  <TableRow
                    key={merchant.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">{merchant.id}</TableCell>
                    <TableCell component="th" scope="row"> {merchant.email}</TableCell>
                    <TableCell>{merchant.last_name}, {merchant.first_name}</TableCell>
                    <TableCell>{merchant.address}</TableCell>
                    <TableCell>{merchant.points}</TableCell>
                    <TableCell>
                    <Button onClick={() => handleOpen(merchant)} className="bg-[#ffad1e] p-2 text-black">SEND Points</Button>
                    <Dialog open={open} onClose={handleClose} sx={modalStyle}>
                    <DialogTitle>Manage Points for {selectedMerchant?.first_name}</DialogTitle>
                        <DialogContent>
                            <TextField 
                            label="Points"
                            value={selectedMerchant?.points || ''} 
                            onChange={(e) => setSelectedMerchant({...selectedMerchant!, points: parseInt(e.target.value) })}
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose}>Cancel</Button>
                            <Button onClick={handleSave}>Save</Button>
                        </DialogActions>
                    </Dialog>
                
                    </TableCell>
                    <TableCell>
                    <IconButton>
                        <DeleteOutlineIcon fontSize="small" />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
    </div>
  
  );
}



