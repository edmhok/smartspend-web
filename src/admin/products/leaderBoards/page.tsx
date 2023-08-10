"use client";

import React from "react";
import style from "./../css/product.module.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(
  userID: number,
  name: string,
  rank: string,
  membersEnrolled: number
) {
  return {
    userID,
    name,
    rank,
    membersEnrolled,
  };
}

const orderList = [
  createData(2847592, "Diamond", " 🇧🇵🇭Daniel Padilla", 230),
  createData(2847592, "Diamond", " 🇧🇵🇭Daniel Padilla", 230),
  createData(2847592, "Diamond", " 🇧🇵🇭Daniel Padilla", 230),
];

export default function LeaderBoard() {
  return (
    <div className={style.productTable}>
      <div className={style.content}>
        <div className={style.title}>Leaderboard</div>

        <div className={style.table}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell className={style.headerText}>User ID.</TableCell>
                  <TableCell className={style.headerText}>Name</TableCell>
                  <TableCell className={style.headerText}>Rank</TableCell>
                  <TableCell align="center" className={style.headerText}>
                    Members Enrolled
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {orderList.map((row) => (
                  <TableRow
                    key={row.userID}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.userID}
                    </TableCell>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.rank}</TableCell>
                    <TableCell align="center">{row.membersEnrolled}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
}
