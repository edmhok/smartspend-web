"use client";

import React, { useEffect, useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

interface Data {
  _id: string;
  username: string;
  merchant: any;
  status: string;
  first_name: string;
  last_name: string;
  address: string;
  points: number;
}

export default function ViewPoints() {
  const handleClickOpen = (mpoints: Data) => {
    console.log({ mpoints });
    setSelectedMerchant(mpoints);
    setOpenAccept(true);
  };
  const handleClickDecline = (mpoints: Data) => {
    console.log({ mpoints });
    setSelectedMerchant(mpoints);
    setOpenDeclined(true);
  };

  const [merchantPoints, setMerchantPoints] = useState<Data[]>([]);
  const [selectedMerchant, setSelectedMerchant] = useState<Data | null>(null);
  const [openAccept, setOpenAccept] = React.useState(false);
  const [openDeclined, setOpenDeclined] = React.useState(false);

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClose = () => {
    setOpenAccept(false);
    setOpenDeclined(false);
    setSelectedMerchant(null);
  };

  const fetchData = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/orderpoints`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.ok) {
        const jsonData: Data[] = await response.json();
        const statusDone = jsonData.filter(
          (pointsStatus) =>
            pointsStatus.status.trim().toLowerCase() === "pending"
        );
        setMerchantPoints(statusDone);
      } else {
        console.error("Failed to fetch data");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleStatus = async () => {
    const _id = selectedMerchant?._id;
    const token = localStorage.getItem("token");
    const urlencoded = new URLSearchParams();
    urlencoded.append("status", "accepted");
    try {
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/orderpoints/${_id}`, {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: urlencoded,
      });
      setOpenAccept(false);
      fetchData();
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleDeclineStatus = async () => {
    const _id = selectedMerchant?._id;
    const token = localStorage.getItem("token");
    const urlencoded = new URLSearchParams();
    urlencoded.append("status", "declined");
    try {
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/orderpoints/${_id}`, {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: urlencoded,
      });
      setOpenDeclined(false);
      fetchData();
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };


  return (
    <div className="p-10">
      <h1 className="text-xl pb-3 text-[#218c20]"> Merchants Points</h1>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650, minHeight: 100 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Merchant</TableCell>
              <TableCell>Current Points</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Requested Points</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {merchantPoints.map((mpoints, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">{mpoints.merchant.username}</TableCell>
                <TableCell component="th" scope="row">{mpoints.merchant.points}</TableCell>

                <TableCell>{mpoints.status} </TableCell>

                <TableCell>{mpoints.points}</TableCell>
                <TableCell>
                  <Button
                    variant="outlined"
                    color="success"
                    onClick={() => handleClickOpen(mpoints)}
                  >
                    Accept
                  </Button>&nbsp;
                  <Button
                    variant="outlined"
                    color="success"
                    onClick={() => handleClickDecline(mpoints)}
                  >
                    Declined
                  </Button>
                </TableCell>
                <Dialog
                  fullScreen={fullScreen}
                  open={openAccept}
                  onClose={handleClose}
                  aria-labelledby="responsive-dialog-title"
                >
                  <DialogTitle id="responsive-dialog-title">
                    Are you sure you want to accept this request?
                  </DialogTitle>
                  <DialogActions>
                    <Button
                      variant="outlined"
                      color="success"
                      onClick={() => handleStatus()}
                      autoFocus
                    >
                      Accept
                    </Button>
                    <Button
                      autoFocus
                      variant="outlined"
                      color="info"
                      onClick={handleClose}
                    >
                      Cancel
                    </Button>
                  </DialogActions>
                </Dialog>
                <Dialog
                  fullScreen={fullScreen}
                  open={openDeclined}
                  onClose={handleClose}
                  aria-labelledby="responsive-dialog-title"
                >
                  <DialogTitle id="responsive-dialog-title">
                    Are you sure you want to decline this request?
                  </DialogTitle>
                  <DialogActions>
                    <Button
                      variant="outlined"
                      color="success"
                      onClick={() => handleDeclineStatus()}
                      autoFocus
                    >
                      Decline
                    </Button>
                    <Button
                      autoFocus
                      variant="outlined"
                      color="info"
                      onClick={handleClose}
                    >
                      Cancel
                    </Button>
                  </DialogActions>
                </Dialog>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
