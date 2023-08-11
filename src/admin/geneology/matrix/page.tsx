"use client";

import React from "react";
import style from "./../css/geneology.module.css";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

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
  matrixID: number,
  userId: number,
  name: string,
  affiliateId: string,
  Location: string,
  commissionFee: number
) {
  return { matrixID, userId, name, affiliateId, Location, commissionFee };
}

const rows = [
  createData(
    1,
    1,
    "Leonardo DiVinci",
    "whs5001342thw39458",
    "Davao, PH",
    234.5
  ),
  createData(
    1,
    1,
    "Leonardo DiVinci",
    "whs5001342thw39458",
    "Davao, PH",
    234.5
  ),
  createData(
    1,
    1,
    "Leonardo DiVinci",
    "whs5001342thw39458",
    "Davao, PH",
    234.5
  ),
];

export default function Matrix() {
  return (
    <div className={style.productTable}>
      <div className={style.unilevel}>
        <div className={style.title}>Matrix</div>

        <div className={style.table}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Matrix ID</StyledTableCell>
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
                      {row.matrixID}
                    </StyledTableCell>
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
