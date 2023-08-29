'use client'

import React, { useEffect, useState } from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from "@mui/material";
import { AdminLayout } from '@/layout/admin'
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
interface Data {
  id: number;
  username: string;
  first_name: string;
  last_name: string;
  address: string;
  points: number;

}

const Points = () => {
  const [merchantData, setMerchantData] = useState<Data[]>([]);
  const [open, setOpen] = useState(false);
  const [selectedMerchant, setSelectedMerchant] = useState<Data | null>(null);

  const fetchData = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await fetch("http://localhost:4000/merchants", {
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

  useEffect(() => {
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
  }

  const deleteMerchant = async (id: number) => {
    try {
      const token = localStorage.getItem("token");

      const response = await fetch(`http://localhost:4000/merchants/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      if (!response.ok) {
        throw new Error('Failed to delete merchant');
      }
      // Refetch merchants after delete
      fetchData();

    } catch (error) {
      console.error(error);
    }
  }

  return (
    <AdminLayout>
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
                  <TableCell component="th" scope="row"> {merchant.username}</TableCell>
                  <TableCell>{merchant.last_name}, {merchant.first_name}</TableCell>
                  <TableCell>{merchant.address}</TableCell>
                  <TableCell>{merchant.points}</TableCell>
                  <TableCell>
                    <Button variant="outlined" color='secondary' onClick={() => handleOpen(merchant)}>
                      Send Points
                    </Button>
                    <Dialog
                      open={open}
                      onClose={handleClose}
                      aria-labelledby="alert-dialog-title"
                      aria-describedby="alert-dialog-description"

                    >
                      <DialogTitle id="alert-dialog-title">
                        Manage Points for {selectedMerchant?.first_name}
                      </DialogTitle>
                      <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                          <TextField
                            label="Points"
                            value={selectedMerchant?.points || ''}
                            onChange={(e) => setSelectedMerchant({ ...selectedMerchant!, points: parseInt(e.target.value) })}
                          />
                        </DialogContentText>
                      </DialogContent>
                      <DialogActions>
                        <Button color='info' onClick={handleClose}>Cancel</Button>
                        <Button color='info' onClick={handleSave} autoFocus>
                          Save
                        </Button>
                      </DialogActions>
                    </Dialog>

                  </TableCell>
                  <TableCell>
                    <IconButton
                      onClick={() => deleteMerchant(merchant.id)}>
                      <DeleteOutlineIcon fontSize="small" />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

      </div>


    </AdminLayout>
  )
}

export default Points


