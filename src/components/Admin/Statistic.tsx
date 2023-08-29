// "use client";

// import React from "react";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";

// function createData(
//   id: number,
//   date: number,
//   country: string,
//   websiteHits: number,
//   preEnrolled: number,
//   upgrade: number
// ) {
//   return {
//     id,
//     date,
//     country,
//     websiteHits,
//     preEnrolled,
//     upgrade,
//   };
// }

// const orderList = [
//   createData(1, 20230405, "🇵🇭", 12, 2, 4),
//   createData(2, 20230405, "🇵🇷", 12, 2, 4),
//   createData(3, 20230405, "🇼🇸", 12, 2, 4),
// ];

// export default function Statistic() {
//   return (
//     <div className='productTable'>
//       <div className='content'>
//         <div className='title'>Statistic</div>
//         <div className='table'>
//           <TableContainer component={Paper}>
//             <Table sx={{ minWidth: 650 }} aria-label="simple table">
//               <TableHead>
//                 <TableRow>
//                   <TableCell className='headerText'>Date</TableCell>
//                   <TableCell className='headerText'>Country</TableCell>
//                   <TableCell align="center" className='headerText'>
//                     Website Hits
//                   </TableCell>
//                   <TableCell align="center" className='headerText'>
//                     Pre-Enrolled
//                   </TableCell>
//                   <TableCell align="center" className='headerText'>
//                     Upgrade
//                   </TableCell>
//                 </TableRow>
//               </TableHead>
//               <TableBody>
//                 {orderList.map((row) => (
//                   <TableRow
//                     key={row.id}
//                     sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
//                   >
//                     <TableCell component="th" scope="row">
//                       {row.date}
//                     </TableCell>
//                     <TableCell>{row.country}</TableCell>
//                     <TableCell align="center">{row.websiteHits}</TableCell>
//                     <TableCell align="center">{row.preEnrolled}</TableCell>
//                     <TableCell align="center">{row.upgrade}</TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </TableContainer>
//         </div>
//       </div>
//     </div>
//   );
// }
