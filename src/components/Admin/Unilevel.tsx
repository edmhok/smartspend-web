"use client";

import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    color: theme.palette.common.black,
    borderColor: theme.palette.common.black,
    borderBottomWidth: 2,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(
  userId: number,
  name: string,
  affiliateId: string,
  Location: string,
  commissionFee: number
) {
  return { userId, name, affiliateId, Location, commissionFee };
}

const rows = [
  createData(1, "Leonardo DiVinci", "whs5001342thw39458", "Davao, PH", 234.5),
  createData(1, "Leonardo DiVinci", "whs5001342thw39458", "Davao, PH", 234.5),
  createData(1, "Leonardo DiVinci", "whs5001342thw39458", "Davao, PH", 234.5),
];

export default function Unilevel() {
  return (
    <div className='productTable'>
      <div className='unilevel'>
        <div className='title'>Unilevel</div>

        <div className='table'>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>User ID</StyledTableCell>
                  <StyledTableCell>Name</StyledTableCell>
                  <StyledTableCell>Affiliate ID</StyledTableCell>
                  <StyledTableCell>Location</StyledTableCell>
                  <StyledTableCell>Commission Fee</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <StyledTableRow key={row.name}>
                    <StyledTableCell component="th" scope="row">
                      {row.userId}
                    </StyledTableCell>
                    <StyledTableCell>{row.name}</StyledTableCell>
                    <StyledTableCell>{row.affiliateId}</StyledTableCell>
                    <StyledTableCell>{row.Location}</StyledTableCell>
                    <StyledTableCell>{row.commissionFee}</StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
}
